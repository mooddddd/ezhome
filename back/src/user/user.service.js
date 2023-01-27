class UserService {
  constructor({ userRepo, jwt }) {
    this.userRepo = userRepo;
    // this.jwt = jwt;
    // this.crypto = jwt.crypto;
  }

  async signup({ userid, userpw, username, filename }) {
    try {
      if (!userid || !userpw || !username) throw "냉무";
      //   const hash = await this.crypto.createHmac("sha256", "mood").update(userpw).digest("hex");
      // console.log(filename);
      const user = await this.userRepo.addUser({ userid, username, userpw, filename });
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = UserService;
