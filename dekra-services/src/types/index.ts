export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  details: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface ClientFile {
  id: string;
  serviceType: string;
  date: string;
  status: 'pending' | 'completed' | 'in_progress';
  reference: string;
}

export interface Certificate {
  id: string;
  name: string;
  issueDate: string;
  expiryDate: string;
  downloadUrl: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface User {
  email: string;
  name: string;
  company?: string;
}
