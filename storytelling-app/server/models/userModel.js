class User {
  constructor(id, username, password, role) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.role = role;
  }
}

class UserModel {
  constructor() {
    this.users = [];
  }

  createUser(username, password, role) {
    const id = this.users.length + 1;
    const user = new User(id, username, password, role);
    this.users.push(user);
    return user;
  }

  findUserByUsername(username) {
    return this.users.find(user => user.username === username);
  }
}

module.exports = new UserModel();
