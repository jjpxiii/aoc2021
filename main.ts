const input = await Deno.readTextFileSync("input.txt", "utf-8");

type N = {
  left: string;
  right: string;
};

let side = input.split("\r\n");
let s = side.slice(2);
// spl

let directions: Record<string, N> = [];

s.map((line: string) => {
  directions[line.substring(0, 3)] = {
    left: line.substring(7, 10),
    right: line.substring(12, 15),
  };
});

console.log(directions);

let next = "AAA";
let i = 0;
while (next !== "ZZZ") {
  console.log(i);
  console.log(side[0][i % side.length]);
  next = side[0][i % side[0].length] === "L"
    ? directions[next].left
    : directions[next].right;

  i++;
}
console.log(i);
