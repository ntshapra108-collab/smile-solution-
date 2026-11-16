export type TreatmentCategory = 
  | 'all'
  | 'orthodontics'
  | 'aligners'
  | 'rct'
  | 'veneers'
  | 'implants'
  | 'pediatric'
  | 'whitening';

export interface BeforeAfterCase {
  id: string;
  patientName: string;
  ageGender?: string;
  category: TreatmentCategory;
  title: string;
  description: string;
  treatmentDuration: string;
  doctor: string;
  beforeImg: string;
  afterImg: string;
  tags: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  benefits: string[];
  isPopular?: boolean;
  isBookable: boolean;
  priceRange?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  rating: number;
  date: string;
  comment: string;
  treatment: string;
  verified: boolean;
  avatarBg?: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  degrees: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
  highlights: string[];
}

export interface AppointmentFormData {
  patientName: string;
  phone: string;
  email?: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  preferredDoctor: string;
  notes: string;
}
