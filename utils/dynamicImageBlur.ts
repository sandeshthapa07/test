import { getPlaiceholder } from 'plaiceholder';

const fallback =
  'https://images.unsplash.com/photo-1721332149069-a470150ef51c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

async function fetchAndProcessImage(src: string) {
  const response = await fetch(src);

  if (!response.ok) {
    throw new Error(`Failed to fetch image from src: ${src}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    src,
    height,
    width,
  };
}

// Main function to handle image fetching with fallback
const getImage = async (src: string, fallback?: string) => {
  try {
    // Try fetching and processing the primary image
    return await fetchAndProcessImage(src);
  } catch (err) {
    console.error(`Error fetching image from src: ${src}, falling back to fallback image. Error:`, err);

    // Try fetching and processing the fallback image
    try {
      return await fetchAndProcessImage(
        'https://images.unsplash.com/photo-1721332149069-a470150ef51c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      );
    } catch (fallbackErr) {
      console.error('Error fetching fallback image:', fallbackErr);
      throw fallbackErr;
    }
  }
};

export default getImage;
