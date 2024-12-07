export function generateLink(...args: string[]): string {
  // Combine all arguments into a single string
  const combinedString = args.join("-");
  // Remove spaces, replace "&" with "-", replace multiple "-" with a single "-", and convert to lowercase
  return combinedString
    .replace(/\s*&\s*/g, "-") // Replace " & " with "-"
    .replace(/\s+/g, "-") // Replace multiple spaces with "-"
    .replace(/-+/g, "-") // Replace multiple "-" with a single "-"
    .toLowerCase(); // Convert to lowercase
}
