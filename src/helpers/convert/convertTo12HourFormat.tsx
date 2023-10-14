export function convertTo12HourFormat(time: string) {
  // Split the time into hours and minutes
  const [hours, minutes] = time.split(":");

  // Convert hours to a number
  const hour = parseInt(hours, 10);

  // Determine AM or PM
  const period = hour >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  const hour12 = hour % 12 || 12;

  // Create the 12-hour format time string
  const time12Hour = `${hour12}:${minutes} ${period}`;

  return time12Hour;
}
