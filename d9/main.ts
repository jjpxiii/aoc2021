// const input = await Deno.readTextFileSync("input.txt", "utf-8");
const input = await Deno.readTextFileSync("sample.txt", "utf-8");
let total = 0;
let max = 0;
input.split("\r\n").map((line: string) => {
  let arr = [];
  let i = 0;

  arr[i] = line.split(" ").map((i) => Number(i));
  if (arr[i][0] > max) max = arr[i][0];
  while (true) {
    let temp = [];
    let index = 0;
    while (true) {
      //   console.log(arr[i]);
      //   console.log(arr[i][index + 1]);
      if (arr[i][index + 1] !== undefined) {
        let t = arr[i][index] - arr[i][index + 1];
        if (isNaN(t)) {
          console.log("CCCCCCC");
        }
        temp.push(t);
      } else break;
      index++;
    }

    arr[++i] = temp;
    if (arr[i].every((val, i, arr) => val === arr[0])) {
      break;
    }
  }
  //   console.log(arr);
  let subt = arr.reduce((acc, _, idx) => acc + arr[idx][0], 0);
  //   console.log(subt);
  if (isNaN(subt)) {
    process.exit(0);
  }
  total += subt;
});
console.log(total);
console.log(max);
