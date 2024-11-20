# Use an official Node.js runtime as a base image
# Enable Docker BuildKit for further optimization
# Use: DOCKER_BUILDKIT=1 docker build .

# Base image
FROM node:20-alpine AS base
WORKDIR /app

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Install dependencies based on the available lockfile, only running the one needed
RUN if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm install --frozen-lockfile; \
    else echo "No lockfile found." && exit 1; fi

# Build the application
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_PRIVATE_STANDALONE true

# Run the build based on available lockfile
RUN if [ -f yarn.lock ]; then yarn build; \
    elif [ -f package-lock.json ]; then npm run build; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
    else echo "No lockfile found." && exit 1; fi

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=development

# Copy only necessary files for production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set permissions and user
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs && \
    chown -R nextjs:nodejs /app

# Use a non-root user for security
USER nextjs

# Start the application
CMD ["node", "server.js"]