import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { BrandColors, Layout } from '@/constants/brand';
import type { Menu } from '@/types';

interface MenuCardProps {
  menu: Menu;
  onPress: () => void;
}

export function MenuCard({ menu, onPress }: MenuCardProps) {
  return (
    <Pressable
      accessibilityHint="참여 신청 폼으로 이동합니다"
      accessibilityLabel={`${menu.restaurantName} ${menu.menuName}, ${menu.points.toLocaleString('ko-KR')}포인트 적립`}
      accessibilityRole="link"
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      {menu.imageSource ? (
        <Image
          accessibilityLabel={`${menu.menuName} 음식 사진`}
          resizeMode="contain"
          source={menu.imageSource}
          style={styles.image}
        />
      ) : (
        <View accessibilityLabel={`${menu.menuName} 음식 사진 자리`} style={styles.placeholder}>
          <Text style={styles.placeholderText}>{menu.imageLabel}</Text>
        </View>
      )}
      <View style={styles.content}>
        <Text style={styles.restaurant}>{menu.restaurantName}</Text>
        <Text numberOfLines={1} style={styles.menuName}>{menu.menuName}</Text>
        <View style={styles.rewardRow}>
          <Text style={styles.rewardLabel}>적립</Text>
          <Text style={styles.points}>{menu.points.toLocaleString('ko-KR')}P</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 136,
    overflow: 'hidden',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: BrandColors.border,
    borderRadius: Layout.cardRadius,
    backgroundColor: BrandColors.background,
  },
  image: {
    width: 136,
    height: 136,
    backgroundColor: BrandColors.surface,
  },
  placeholder: {
    width: 136,
    height: 136,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BrandColors.surface,
  },
  placeholderText: {
    color: BrandColors.textMuted,
    fontSize: 13,
    fontWeight: '700',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  restaurant: {
    color: BrandColors.textSecondary,
    fontSize: 13,
    fontWeight: '700',
  },
  menuName: {
    marginTop: 4,
    color: BrandColors.text,
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: -0.3,
  },
  rewardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 13,
  },
  rewardLabel: {
    color: BrandColors.primary,
    fontSize: 12,
    fontWeight: '700',
  },
  points: {
    color: BrandColors.primary,
    fontSize: 17,
    fontWeight: '900',
  },
  pressed: {
    opacity: 0.72,
  },
});
