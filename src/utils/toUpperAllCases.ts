export default function toUpperAllCases(text: string) {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}
