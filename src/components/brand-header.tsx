import { Image, StyleSheet, Text, View } from 'react-native';

import { BrandColors } from '@/constants/brand';

const logoSource = require('../../assets/images/eatdeuk-logo.png');

export function BrandHeader() {
  return (
    <View style={styles.brandRow}>
      <Image
        accessibilityLabel="갈색과 노란색의 잇득 로고"
        resizeMode="contain"
        source={logoSource}
        style={styles.logo}
      />
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
  logo: {
    width: 48,
    height: 48,
    borderRadius: 15,
  },
  logoText: {
    color: BrandColors.primary,
    fontSize: 23,
    fontWeight: '900',
    letterSpacing: -0.6,
  },
  slogan: {
    marginTop: 1,
    color: BrandColors.textSecondary,
    fontSize: 12,
    fontWeight: '600',
  },
});
