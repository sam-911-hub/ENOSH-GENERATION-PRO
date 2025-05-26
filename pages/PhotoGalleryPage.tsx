
import React from 'react';
import PageContainer from '../components/PageContainer';
import TestimonialCard from '../components/TestimonialCard';
import GalleryImage from '../components/GalleryImage';
import { Testimonial } from '../types';
import { PageRoutes, PageBackgrounds } from '../constants';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Miriam',
    role: 'A Member',
    quote: 'Enosh has positively transformed me spiritually, physically and even emotionally.',
    // imageUrl: 'https://picsum.photos/seed/miriam/100/100' // Example, replace with actual if available
  },
  {
    id: '2',
    name: 'Andrew',
    role: 'Minister',
    quote: `One night in the year 2018 God, I saw a revelation of the son of God when I was a sleep, I woke up and the whole house was dazzling white, I heard a voice speaking of Moses and Me echoing of kingdom of heaven belonging to old generation and young generation that were represented by Moses and me in particular amazing part was that no young generation was present, so I was commanded to back for them, The following day I was confused cause have never had such a terrifying night before. I tried to enquire from spiritual men of God but i was led astray. I took the initiative to inquire from God that's when i started getting blury part of the vision that led me to waste two good years doing minor things by just singing in a band, In 2021 and 2022 there was lock down when I went in silence and thorough seeking to help me trace back what happened in 2018, Through bible study I got some clarity in the midst of az generation where God's name is not used in difficult situations, what can people do, "I will remember the name of the Lord" and I will call that name." Out of that I got ENOSH Generation which later changed my way of discerning God's voice. The vision has changed my life in many ways most so in spiritual matters that are manifesting in physical realms like gathering of young people, mentoring and my prayer life and believe changed from being ordinary to divine...
There have been challenges here and there but that has made me be strongly rooted in trusting God as I clearly know and see the future of the vision.`
    // imageUrl: 'https://picsum.photos/seed/andrew/100/100' // Example
  },
];

const galleryImages = [
  { id: 'img1', src: 'https://drive.google.com/file/d/1EsJD1lyJgpcZHyHWHMbZcUrIXLjxgxRY/view?usp=drive_link', alt: 'Enosh Generation Event 1' },
  { id: 'img2', src: 'https://drive.google.com/file/d/14UalaX2M7xM-7ldvLkNex0LH6cIqts1m/view?usp=drive_link', alt: 'Community Gathering' },
  { id: 'img3', src: 'https://drive.google.com/file/d/1ygedFnKvoLnwLNqdzXPSxw6VvGTQyLMo/view?usp=drive_link', alt: 'Youth Ministry' },
  { id: 'img4', src: 'https://drive.google.com/file/d/1FQTcNvL3RQpcFgKtjolEovRB2K6_sv6L/view?usp=drive_link', alt: 'Bible Study Session' },
  { id: 'img5', src: 'https://drive.google.com/file/d/1HcJ03IJMU7ooOsR1wAW5IHuJlx4vwsrf/view?usp=drive_link', alt: 'Nature and Creation' },
  { id: 'img6', src: 'https://drive.google.com/file/d/1NfZnKsWMlZsEaehRlk1T1wGmGEyhV2yf/view?usp=drive_link', alt: 'Fellowship Moment' },
  { id: 'img7', src: 'https://drive.google.com/file/d/1VOj1tCPAdj41DE_yIW-wtCgArVZJiywA/view?usp=drive_link', alt: 'Worship Night' },
  { id: 'img8', src: 'https://drive.google.com/file/d/11esh7jCxddXjRCWZvmiwFQC9mvQC2lU4/view?usp=drive_link', alt: 'Community Service' },
  { id: 'img9', src: 'https://drive.google.com/file/d/1RIdCy_etWazRxlwrbQlxoneWXrC_DNTY/view?usp=drive_link', alt: 'Symbol of Hope' },
  { id: 'img10', src: 'https://drive.google.com/file/d/1uKexQSFiXiu-EmjBdls0BHnv5W2Jd-7s/view?usp=drive_link', alt: 'Joyful Gathering' },
];


const PhotoGalleryPage: React.FC = () => {
  return (
    <PageContainer 
      title="Photo Gallery & Testimonials"
      backgroundImageUrl={PageBackgrounds[PageRoutes.PHOTO_GALLERY]}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-heading text-brand-accent text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map(image => (
            <GalleryImage key={image.id} src={image.src} alt={image.alt} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-heading text-brand-accent text-center mb-8">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </PageContainer>
  );
};

export default PhotoGalleryPage;
