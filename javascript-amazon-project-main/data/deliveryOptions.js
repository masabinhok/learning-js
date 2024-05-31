import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

export const deliveryOptions = [
  {
    id: "1",
    deliveryDays: 7,
    priceCents: 0,
  },
  {
    id: "2",
    deliveryDays: 3,
    priceCents: 499,
  },
  {
    id: "3",
    deliveryDays: 1,
    priceCents: 999,
  },
];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;
  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });
  return deliveryOption || deliveryOptions[0];
}

function isWeekend(day) {
  const dayOfWeek = day.format("dddd");
  return dayOfWeek === "Saturday" || dayOfWeek === "Sunday";
}

export function calculateDeliveryDate(deliveryOption, productId) {
  const today = dayjs();
  let dayToAdd = 0;
  let totalDaysAdded = 0;

  while (dayToAdd < deliveryOption.deliveryDays) {
    totalDaysAdded++;
    let toCheck = today.add(totalDaysAdded, "days");
    if (!isWeekend(toCheck)) {
      dayToAdd++;
    }
  }

  const deliveryDate = today.add(totalDaysAdded, "days");
  const dateString = deliveryDate.format("dddd, MMMM D");
  return dateString;
}
