const mineflayer = require("mineflayer");
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`What's the account name?`, name => {
  console.log(`Hi ${name}!`);
  NameOfBot = name;
  readline.close();
  createBot();
  bot.on("chat", (username, message) => {
    console.log(`${username}: ${message}`);
    if (message == "/register <password> <ConfirmPassword>") {
      logIn = false;
      if (message == "Successful login!") {
        logIn = true;
      } else {
        if (logIn == false) {
          bot.chat("/register superepicgaming superepicgaming");
          console.log("Logged In");
          logIn = true;
          console.log("Going to quit in 5 seconds");
          setTimeout(() => {
            bot.end("Reconnector");
          }, 5000);
        }
      }
    }
    if (message == "/login <password>" || message == "/login <password>!") {
      logIn = false;
      if (message == "Successful login!") {
        logIn = true;
      } else {
        if (logIn == false) {
          bot.chat("/login superepicgaming");
          console.log("Logged In");
          logIn = true;
          let firstWordOfMessage = message.split(" ")[0];
          if ((firstWordOfMessage = "Welcome")) {
            console.log("Going to quit in 5 seconds");
            setTimeout(() => {
              bot.end("Reconnector");
            }, 5000);
          }
        }
      }
    }
  });
  bot.on('error', (err) => console.log(err))
  bot.on('end', createBot)
});

function createBot() {
  bot = mineflayer.createBot({
    host: "superepicgaming.club",
    username: NameOfBot ? NameOfBot : "reconnector",
    version: "1.12.2",
  });
}