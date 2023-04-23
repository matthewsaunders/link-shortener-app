export const BASE_URL = `http://localhost:4000`;
// For development with msw
// export const BASE_URL = ``;

export function generateUrlFromToken(token: string): string {
  return `${BASE_URL}/a/${token}`;
}

export async function copyTextToClipboard(text: string) {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
}
