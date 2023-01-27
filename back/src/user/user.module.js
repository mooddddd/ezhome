const {
  sequelize: {
    models: { User },
  },
} = require("../../models");

const UserRepo = require("./user.repo");
const UserService = require("./user.service");
const UserController = require("./user.controller");

// const JWT = require("../../lib/jwt");
// const crypto = require("crypto");

// const jwt = new JWT({ crypto });

const userRepo = new UserRepo({ User });
const userService = new UserService({ userRepo });

// const userService = new UserService({ userRepo, jwt });
const userController = new UserController({ userService });

module.exports = {
  userController,
};
