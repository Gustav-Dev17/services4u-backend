export interface IRequestUserBody {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  work_area?: string[];
}

export interface IUser {
  name: string;
  phone: string;
  email: string;
  password: string;
  work_area: string[];
}
