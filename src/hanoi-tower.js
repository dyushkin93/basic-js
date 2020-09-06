module.exports = function calculateHanoi(diskNumber, turnSpeed) {
  let hanoi = {
    turns: 0,
    seconds: 0
  };
  hanoi.turns = Math.pow(2, diskNumber) - 1;
  hanoi.seconds = Math.floor(hanoi.turns / (turnSpeed / 3600));
  return hanoi;
}