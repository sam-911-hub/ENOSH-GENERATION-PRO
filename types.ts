
export interface NavLinkItem {
  label: string;
  path: string;
}

export interface EventItem {
  category: string;
  title: string;
  details: string[];
  registrationInfo?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  imageUrl?: string; // Optional image for testimonial giver
}

export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  reference?: string;
  summaryPoints: string[];
  conclusion?: string;
  authorTag?: string;
  fullText?: string; // For longer sermon texts
}

export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
}

export interface SocialMediaLink {
  name: string;
  url: string;
  iconClass: string; // Font Awesome class
}

export interface WorshipPlaylistItem {
  id: string;
  title: string;
}
