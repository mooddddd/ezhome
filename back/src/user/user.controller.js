class UserController {
  constructor({ userService }) {
    this.userService = userService;
  }

  async postSignup(req, res, next) {
    try {
      const { userid, userpw, username } = req.body;
      const { filename } = req.file;
      // console.log(req.body);
      // console.log(req.file);
      const user = await this.userService.signup({ userid, userpw, username, filename });
      res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = UserController;
