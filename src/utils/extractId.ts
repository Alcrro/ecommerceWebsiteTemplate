export function extractTextAfterLastDash(input: string): string {
  // Find the last occurrence of '-' and extract text after it
  const lastDashIndex = input.lastIndexOf("-");

  // If '-' is not found, return an empty string or handle as needed
  if (lastDashIndex === -1) {
    return "";
  }

  // Extract and return the text after the last '-'
  return input.substring(lastDashIndex + 1);
}
