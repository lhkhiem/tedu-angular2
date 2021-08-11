export interface  LoggedInUser {
  
  Id: string;
  TokenString: string;
  LastName: string;
  FirstName: string;
  Email: string;
  PhoneNumber: string;
  Dob: Date;
  ErrorMessage: string;
}