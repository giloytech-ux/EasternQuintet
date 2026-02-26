export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface SocialLink {
  label: string;
  href: string;
  color: string;
  icon: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  venue: string;
  eventType: string;
  message: string;
}

export interface TrustedByLogo {
  name: string;
  initials: string;
}
