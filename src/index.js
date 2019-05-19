export function truncateText(string, chars) {
  if (string.length > chars) {
    return string.substring(0, chars) + "...";
  } else {
    return string;
  }
}
