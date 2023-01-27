const app = require("./app");
const { sequelize } = require("./models");
const config = require("./config");
const port = process.env.PORT;

app.listen(port, async () => {
  await sequelize.sync({ force: false });
  console.log(`back server start / PORT : ${port}`);
});
