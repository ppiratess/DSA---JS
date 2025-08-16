function frogJump1(x, y, d) {
  let jumps = 0;

  for (let i = x; i < y; i += d) {
    jumps += 1;
  }

  return jumps;
}

console.log("f", frogJump1(1, 7, 2));

function frogJump(x, y, d) {
  return Math.ceil((y - x) / d);
}

console.log("f2", frogJump(1, 7, 2));
