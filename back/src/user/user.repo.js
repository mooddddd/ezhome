class UserRepo {
  constructor({ User }) {
    this.User = User;
  }

  async addUser(payload) {
    try {
      // console.log(payload);
      const user = await this.User.create(payload);
      console.log(user);
      return user.dataValues;
      /*
  dataValues: {
    userid: 'asdfasdfasdfasdf',
    username: 'asdf',
    userpw: 'asdf',
    filename: '3_1674638112171.png'
  }
       */
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = UserRepo;
