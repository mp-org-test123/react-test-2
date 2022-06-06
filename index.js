import { setTimeout } from "timers/promises";
console.log("setTimeout start time:", Date.now());
const time = await setTimeout(2000, Date.now());
console.log("setTimeout execute time:", time);
console.log("setTimeout end time:", Date.now());
