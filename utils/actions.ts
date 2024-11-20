/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use server';

export const validateRecaptcha = async (reCaptcha: string) => {
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${reCaptcha}`;
  const response = await fetch(url, { method: 'POST' });
  if (!response.ok) {
    throw new Error('Failed to validate reCAPTCHA');
  }
};
