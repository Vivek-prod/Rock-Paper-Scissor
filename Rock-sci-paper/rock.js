function user() {
  let ur = prompt("[Rock/Paper/Scissors]", "");
  ur = ur.toLowerCase();
  return ur;
}

function comp() {
  let pc = Math.floor(Math.random() * 3);

  if (pc === 0) {
    return "rock";
  } else if (pc === 1) {
    return "scissor";
  } else {
    return "paper";
  }
}

function main() {
  let a = 0;
  let b = 0;
  console.log("WELCOME TO GAME");
  console.log("YOU:0  PC:0");

  game(a, b);
}

function game(a, b) {
  for (let c = 1; c <= 5; c++) {
    let userchoice = user();
    console.log("USER:", userchoice);

    let pcchoice = comp();
    console.log("COMPUTER:", pcchoice);

    if (userchoice === "rock" && pcchoice === "paper") {
      b = b + 1;
      console.log("Round", c, "won by:COMPUTER");
    } else if (userchoice === "rock" && pcchoice === "scissor") {
      a = a + 1;
      console.log("Round", c, "won by:USER");
    } else if (userchoice === "paper" && pcchoice === "scissor") {
      b = b + 1;
      console.log("Round", c, "won by:COMPUTER");
    } else if (userchoice === "paper" && pcchoice === "rock") {
      a = a + 1;
      console.log("Round", c, "won by:USER");
    } else if (userchoice === "scissor" && pcchoice === "rock") {
      b = b + 1;
      console.log("Round", c, "won by:COMPUTER");
    } else if (userchoice === "scissor" && pcchoice === "paper") {
      a = a + 1;
      console.log("Round", c, "won by:COMPUTER");
    } else {
      console.log("Round", c, ": Tie");
    }
  }
  console.log("USER won:", a);

  console.log("COMPUTER won:", b);

  if (a > b) {
    console.log("USER WON OVERALL");
  } else {
    console.log("COMPUTER WON OVERALL");
  }
}

main();
