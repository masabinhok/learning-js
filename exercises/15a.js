import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import isSatSun from "./default.js";

const today = dayjs();
const later = today.add(5, "days");
console.log(later.format("MMMM, D"));
const oneMonthAfter = today.add(1, "month");
console.log(oneMonthAfter.format("MMMM, D"));
const oneMonthBefore = today.subtract(1, "month");
console.log(oneMonthBefore.format("MMMM, D"));

console.log(today.format("dddd"));
const tomorrow = today.add(1,'days')


isSatSun(today.add(1,'days'));