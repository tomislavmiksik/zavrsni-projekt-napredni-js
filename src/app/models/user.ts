export class User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  username: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    password: string,
    username: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.password = password;
    this.username = username;
  }
}
