import type { Menu } from '@/types';

export const menus: readonly Menu[] = [
  {
    id: 'sinchon-chicken-fried',
    restaurantName: '신촌치킨',
    menuName: '후라이드 1인분',
    points: 1200,
    imageLabel: '치킨',
    imageSource: require('../../assets/images/foods/sinchon-chicken-fried.jpg'),
  },
  {
    id: 'yonsei-baekban-set',
    restaurantName: '연세백반',
    menuName: '백반세트',
    points: 500,
    imageLabel: '백반',
    imageSource: require('../../assets/images/foods/yonsei-baekban-set.png'),
  },
  {
    id: 'good-salad-avocado',
    restaurantName: '굿샐러드',
    menuName: '아보카도 샐러드',
    points: 600,
    imageLabel: '샐러드',
    imageSource: require('../../assets/images/foods/good-salad-avocado.jpg'),
  },
  {
    id: 'shanghai-mala-set',
    restaurantName: '상하이마라',
    menuName: '마라탕 1인세트',
    points: 600,
    imageLabel: '마라탕',
    imageSource: require('../../assets/images/foods/shanghai-mala-set.jpg'),
  },
  {
    id: 'hongbogak-jengban-jjajang',
    restaurantName: '홍보각',
    menuName: '젱반짜장',
    points: 800,
    imageLabel: '짜장면',
    imageSource: require('../../assets/images/foods/hongbogak-jengban-jjajang.jpg'),
  },
  {
    id: 'letter-bakery-campagne',
    restaurantName: '레터베이커리',
    menuName: '깜빠뉴',
    points: 500,
    imageLabel: '빵',
    imageSource: require('../../assets/images/foods/letter-bakery-campagne.jpg'),
  },
  {
    id: 'moon-night-couple-pasta',
    restaurantName: '문나이트',
    menuName: '커플 파스타 세트',
    points: 2400,
    imageLabel: '파스타',
    imageSource: require('../../assets/images/foods/moon-night-couple-pasta.jpg'),
  },
  {
    id: 'jeyuk-delicious-squid',
    restaurantName: '제육맛있는집',
    menuName: '오징어볶음',
    points: 1300,
    imageLabel: '오징어볶음',
    imageSource: require('../../assets/images/foods/jeyuk-squid.jpg'),
  },
] as const;

export const featuredMenus = menus.slice(0, 3);
