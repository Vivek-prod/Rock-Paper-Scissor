function user() {
  let ur = prompt("[Rock/Paper/Scissors]", "");
  ur = ur.toLowerCase();
  return ur;
}

function comp() {
  let pc = Math.floor(Math.random() * 3);

  if (pc === 0) {
    return "rock";
  } else if (pc == 1) {
    return "scissor";
  } else {
    return "paper";
  }
}

function main() {
  let a = 0;
  let b = 0;
  let c = 1;
  console.log("WELCOME TO GAME");
  console.log("Round:", c);
  console.log("YOU:0  PC:0");

  let userchoice = user();
  console.log(userchoice);

  let pcchoice = comp();
  console.log(pcchoice);
}

main();
