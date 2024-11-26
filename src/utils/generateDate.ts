export function generateDate(): Date {
  let today = new Date();
  const past60Days = new Date();
  past60Days.setDate(today.getDate() - 60); // Date 60 days ago

  // Generate a random timestamp between past60Days and today
  const randomTimestamp =
    Math.random() * (today.getTime() - past60Days.getTime()) +
    past60Days.getTime();

  return new Date(randomTimestamp); // Convert the random timestamp to a Date object
}
