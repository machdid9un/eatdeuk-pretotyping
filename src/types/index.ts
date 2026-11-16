import type { ImageSourcePropType } from 'react-native';

export interface Menu {
  id: string;
  restaurantName: string;
  menuName: string;
  points: number;
  imageLabel: string;
  imageSource?: ImageSourcePropType;
}
