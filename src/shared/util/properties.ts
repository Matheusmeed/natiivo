export interface IProperty {
  icon: string;
  cardBackground: string;
  background: string;
  title: string;
  cardTitle: string;
  description: string;
  id: number;
}

export const properties = [
  {
    icon: '/images/icon/360.png',
    cardBackground: '/images/cardBackground/360_card.jpg',
    background: '/images/background/360_wallpaper.jpg',
    title: '360° BUILDING',
    cardTitle: 'BUILDING',
    description: 'View the building and availability',
    id: 1,
  },
  {
    icon: '/images/icon/tour.png',
    cardBackground: '/images/cardBackground/tour_card.png',
    background: '/images/background/tour_wallpaper.png',
    title: 'TOUR VIRTUAL',
    cardTitle: 'TOUR VIRTUAL',
    description: 'Take a tour of our building',
    id: 2,
  },
  {
    icon: '/images/icon/amenities.png',
    cardBackground: '/images/cardBackground/amenities_card.jpg',
    background: '/images/background/amenities_wallpaper.jpg',
    title: 'AMENITIES',
    cardTitle: 'AMENITIES',
    description: 'See each floor and it’s amenities',
    id: 3,
  },
  {
    icon: '/images/icon/surroundings.png',
    cardBackground: '/images/cardBackground/surroundings_card.png',
    background: '/images/background/surroundings_wallpaper.png',
    title: 'SURROUNDINGS',
    cardTitle: 'SURROUNDINGS',
    description: 'See what’s around',
    id: 4,
  },
  {
    icon: '/images/icon/gallery.png',
    cardBackground: '/images/cardBackground/gallery_card.png',
    background: '/images/background/gallery_wallpaper.jpg',
    title: 'GALLERY',
    cardTitle: 'GALLERY',
    description: 'View images in high resolution',
    id: 5,
  },
  {
    icon: '/images/icon/video.png',
    cardBackground: '/images/cardBackground/watch_card.png',
    background: '/images/background/watch_wallpaper.png',
    title: 'WATCH',
    cardTitle: 'VIDEO',
    description: 'Complete videos of the project',
    id: 6,
  },
];
