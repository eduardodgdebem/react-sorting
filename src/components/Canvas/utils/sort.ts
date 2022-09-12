const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

function defaultCompare(a: number, b: number) {
  if (a === b) {
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function swap(arr: number[], a: number, b: number) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const generateRandomArray = (length = 50, max = 100) => {
  return Array.from({ length }, () => Math.random() * max);
};

export { sleep, generateRandomArray, swap, defaultCompare, Compare };
