export default function transformGender(text: string) {
  return text
    .replace('n/a', 'No gender')
    .replace('male', 'Male')
    .replace('feMale', 'Female');
}
