const baseUrl = `localhost:3000`;

export function generateUrlFromToken(token: string): string {
  return `${baseUrl}/a/${token}`;
}

export async function copyTextToClipboard(text: string) {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
}
