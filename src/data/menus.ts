import type { Menu } from '@/types';

export const menus: readonly Menu[] = [
  {
    id: 'sinchon-chicken-fried',
    restaurantName: '신촌치킨',
    menuName: '후라이드 1인분',
    points: 1200,
    imageLabel: '치킨',
  },
  {
    id: 'yonsei-baekban-set',
    restaurantName: '연세백반',
    menuName: '백반세트',
    points: 500,
    imageLabel: '백반',
  },
  {
    id: 'good-salad-avocado',
    restaurantName: '굿샐러드',
    menuName: '아보카도 샐러드',
    points: 600,
    imageLabel: '샐러드',
  },
] as const;
