
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
  { id: 'img1', src: 'https://picsum.photos/seed/gallery_A_enosh/600/400', alt: 'Enosh Generation Event 1' },
  { id: 'img2', src: 'https://picsum.photos/seed/gallery_B_enosh/600/400', alt: 'Community Gathering' },
  { id: 'img3', src: 'https://picsum.photos/seed/gallery_C_enosh/600/400', alt: 'Youth Ministry' },
  { id: 'img4', src: 'https://picsum.photos/seed/gallery_D_bible/600/400', alt: 'Bible Study Session' },
  { id: 'img5', src: 'https://picsum.photos/seed/gallery_E_animal/600/400', alt: 'Nature and Creation' },
  { id: 'img6', src: 'https://picsum.photos/seed/gallery_F_enosh/600/400', alt: 'Fellowship Moment' },
  { id: 'img7', src: 'https://picsum.photos/seed/gallery_G_worship/600/400', alt: 'Worship Night' },
  { id: 'img8', src: 'https://picsum.photos/seed/gallery_H_service/600/400', alt: 'Community Service' },
  { id: 'img9', src: 'https://picsum.photos/seed/gallery_I_hope/600/400', alt: 'Symbol of Hope' },
  { id: 'img10', src: 'https://picsum.photos/seed/gallery_J_joy/600/400', alt: 'Joyful Gathering' },
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
