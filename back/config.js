require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT,
  db: {
    development: {
      host: "127.0.0.1",
      port: "3306",
      username: "root",
      password: "dmswlWkd--",
      database: "ezhome",
      dialect: "mysql",
      define: {
        freezeTableName: true,
        timestamps: false,
      },
    },
  },
};

module.exports = config;
