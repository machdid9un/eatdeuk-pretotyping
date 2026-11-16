import { StyleSheet, Text, View } from 'react-native';

import { BrandColors } from '@/constants/brand';

export function BrandHeader() {
  return (
    <View style={styles.brandRow}>
      <View style={styles.logoMark}>
        <Text style={styles.logoMarkText}>잇</Text>
      </View>
      <View>
        <Text style={styles.logoText}>잇득</Text>
        <Text style={styles.slogan}>먹을수록 쌓인다.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },
  logoMark: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: BrandColors.primary,
  },
  logoMarkText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
  },
  logoText: {
    color: BrandColors.text,
    fontSize: 23,
    fontWeight: '900',
    letterSpacing: -0.6,
  },
  slogan: {
    marginTop: 1,
    color: BrandColors.textSecondary,
    fontSize: 12,
    fontWeight: '500',
  },
});
