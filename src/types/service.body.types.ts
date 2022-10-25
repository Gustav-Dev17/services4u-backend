export interface IRequestServiceBody {
  title?: string;
  description?: string;
  location?: string;
  price?: string;
  service_area?: string[];
  userId?: string;
}

export interface IService {
  title: string;
  description: string;
  location: string;
  price: string;
  service_area: string[];
  userId: string;
}
