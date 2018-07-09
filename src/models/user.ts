class User {
  id: string;
  displayName: string;
  email: string;

  constructor(params: User) {
    this.id = params.id;
    this.displayName = params.displayName;
    this.email = params.email;
  }
}

export default User;
