export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;

  constructor(id, firstName, lastName, email, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
  }
}
