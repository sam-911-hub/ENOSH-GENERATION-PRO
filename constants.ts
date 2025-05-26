
import { SocialMediaLink } from './types';

export enum PageRoutes {
  HOME = '/',
  UPCOMING_EVENTS = '/upcoming-events',
  ABOUT_US = '/about-us',
  PHOTO_GALLERY = '/photo-gallery',
  LINKS = '/links',
  VOLUNTEER_SUPPORT = '/volunteer-support',
  ONLINE_RESOURCES = '/online-resources',
  FAQ = '/faq',
}

export const AppName = "ENOSH GENERATION";

export const ContactEmail = "enoshgeneration894@gmail.com";
export const WhatsAppNumbers = ["+254115264132", "+254790282363"];

export const SocialLinks: SocialMediaLink[] = [
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100091299983773&__tn__=%2Cd", iconClass: "fab fa-facebook-f" },
  { name: "Instagram", url: "https://www.instagram.com/enosh.generation/?hl=en", iconClass: "fab fa-instagram" },
  { name: "YouTube", url: "https://www.youtube.com/@enosh.generation", iconClass: "fab fa-youtube" },
  { name: "TikTok", url: "https://www.tiktok.com/@enosh.generation", iconClass: "fab fa-tiktok" },
];

export const AddressLinks = [
    { name: "Google Maps Link 1", url: "https://g.co/kgs/RMqmMZV" },
    { name: "Google Maps Directions", url: "https://www.google.com/maps/dir//PWW2%2B735+Maximum+Miracle+Centre+Church,+Near+Pentecostal+Church,+Councillor+Opundo+Rd,+Nairobi/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x182f14501ef6e549:0x273216f22cbe5a5f?sa=X&ved=1t:57443&ictx=111" }
];

export const PageBackgrounds = {
  [PageRoutes.HOME]: 'https://picsum.photos/seed/home_enosh/1920/1080',
  [PageRoutes.UPCOMING_EVENTS]: 'https://picsum.photos/seed/events_enosh/1920/1080',
  [PageRoutes.ABOUT_US]: 'https://picsum.photos/seed/about_enosh/1920/1080',
  [PageRoutes.PHOTO_GALLERY]: 'https://picsum.photos/seed/gallery_enosh/1920/1080',
  [PageRoutes.LINKS]: 'https://picsum.photos/seed/connect_enosh/1920/1080',
  [PageRoutes.VOLUNTEER_SUPPORT]: 'https://picsum.photos/seed/support_enosh/1920/1080',
  [PageRoutes.ONLINE_RESOURCES]: 'https://picsum.photos/seed/resources_enosh/1920/1080',
  [PageRoutes.FAQ]: 'https://picsum.photos/seed/faq_enosh/1920/1080',
};

