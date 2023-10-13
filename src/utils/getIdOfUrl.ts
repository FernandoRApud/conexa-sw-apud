export default function getIdOfUrl(text: string) {
  return text.match(/(\d+)\/$/)![1];
}
