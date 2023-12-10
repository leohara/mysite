export function formatDate(dateUTC: Date | null): string {
  if (!dateUTC) return "";

  const date = new Date(dateUTC);

  const jstOffset = 9 * 60;
  date.setMinutes(date.getMinutes() + jstOffset);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}
