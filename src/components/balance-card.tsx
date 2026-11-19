import { Pressable, StyleSheet, Text, View } from 'react-native';

import { BrandColors, Layout } from '@/constants/brand';

interface BalanceCardProps {
  onPress: () => void;
}

export function BalanceCard({ onPress }: BalanceCardProps) {
  return (
    <Pressable
      accessibilityHint="참여 신청 폼으로 이동합니다"
      accessibilityLabel="현재 잔액 0원"
      accessibilityRole="link"
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View>
        <Text style={styles.label}>현재 잔액</Text>
        <Text style={styles.balance}>0원</Text>
      </View>
      <View style={styles.action}>
        <Text style={styles.actionText}>혜택 시작하기</Text>
        <Text aria-hidden style={styles.arrow}>›</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 20,
    padding: 24,
    borderRadius: Layout.cardRadius,
    backgroundColor: BrandColors.primary,
  },
  label: {
    color: '#FFE9A6',
    fontSize: 14,
    fontWeight: '700',
  },
  balance: {
    marginTop: 7,
    color: BrandColors.accent,
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: -1,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingBottom: 6,
  },
  actionText: {
    color: '#FFF8EA',
    fontSize: 13,
    fontWeight: '800',
  },
  arrow: {
    color: BrandColors.accent,
    fontSize: 24,
    lineHeight: 24,
  },
  pressed: {
    opacity: 0.72,
  },
});
