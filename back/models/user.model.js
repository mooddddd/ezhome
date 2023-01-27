module.exports = (sequelize, Sequelize) => {
  class User extends Sequelize.Model {
    static initialize() {
      return this.init(
        {
          userid: {
            type: Sequelize.STRING(60),
            primaryKey: true,
          },
          userpw: {
            type: Sequelize.STRING(64),
            allowNull: false,
          },
          username: {
            type: Sequelize.STRING(30),
            allowNull: false,
          },
          // provider: {
          //   type: Sequelize.ENUM("local", "kakao"),
          //   allowNull: false,
          //   defaultValue: "local",
          // },
          // snsId: {
          //   type: Sequelize.STRING(30),
          //   allowNull: true,
          // },
          // email: {
          //   type: Sequelize.STRING(100),
          //   allowNull: true,
          // },
          filename: {
            type: Sequelize.STRING(100),
            allowNull: true,
          },
        },
        {
          sequelize,
        }
      );
    }
  }

  User.initialize();
};
