// const input = await Deno.readTextFileSync("input.txt", "utf-8");
const input = await Deno.readTextFileSync("sample.txt", "utf-8");
let game = [];
input.split("\r\n").map(
  (line) => {
    game[line.substring(0, 5)] = { bid: line.substring(6), rank: 0 };
  },
);
console.log(game);
