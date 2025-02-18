const departments: string[] = ["dev", "design", "marketing"];
const depart = departments[0];
const departments1: number[][] = [
  [45, 58],
  [123, 452],
];

const report = departments
  .filter((dep: string) => dep !== "dev")
  .map((dep: string) => `${dep} - done`)
  .map((dep: string) => `${dep} !!`);

// console.log(report);

const [first, second] = report;
console.log(first, second);

export {};
