export interface IAddress {
  city: string,
  geo: {
    lat: string,
    lng: string,
  }
  street: string,
  suite: string,
  zipcode: string,
}

export interface ICompany {
  bs: string,
  catchPhrase: string,
  name: string
}

export interface IUser {
  id: number,
  name: string,
  phone: string,
  username: string,
  email: string,
  website: string,
  address: IAddress,
  company: ICompany
}

export interface IPost {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export interface IComment {
  userId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}