const express = require('express');
const app = express();
const port = 3000;
const axios = require("axios")

app.get(
  '/',
  async (req, res) => {
    const nameList = [ "Tyler", "Nick", "Cruz", "Faina" ];
    const pickedName = nameList[Math.floor(Math.random() * 4)];
    const response = await axios.get("https://randomuselessfact.appspot.com/random.json?language=en");
    const randomFact = response.data.text;
    const message = `This week ${pickedName} will be release master.\n` +
      `Here is your random fact for the week: \n  ${randomFact}\n` +
      `Thank you, this concludes your regularly scheduled program.`;
    return res.send(message);
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
