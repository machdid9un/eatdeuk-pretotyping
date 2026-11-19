import { router } from 'expo-router';
import type { Metadata } from 'expo-router/server';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

import { BalanceCard } from '@/components/balance-card';
import { BrandHeader } from '@/components/brand-header';
import { MenuCard } from '@/components/menu-card';
import { PageScrollView } from '@/components/page-scroll-view';
import { BrandColors } from '@/constants/brand';
import { PARTICIPATION_FORM_URL } from '@/constants/links';
import { featuredMenus } from '@/data/menus';

export function generateMetadata(): Metadata {
  return {
    title: '잇득 | 먹을수록 쌓인다',
    description: '맛있는 한 끼를 먹고 돈을 쌓는 잇득을 만나보세요.',
  };
}

export default function HomeScreen() {
  const openParticipationForm = () => {
    void Linking.openURL(PARTICIPATION_FORM_URL);
  };

  return (
    <PageScrollView>
      <View style={styles.header}>
        <BrandHeader />
        <Pressable
          accessibilityHint="참여 신청 폼으로 이동합니다"
          accessibilityRole="link"
          onPress={openParticipationForm}
          style={({ pressed }) => [styles.loginButton, pressed && styles.pressed]}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </Pressable>
      </View>

      <View style={styles.hero}>
        <Text style={styles.eyebrow}>EAT &amp; EARN</Text>
        <Text style={styles.heroTitle}>맛있게 먹은 만큼{`\n`}혜택으로 돌아와요.</Text>
        <Text style={styles.heroDescription}>
          1포인트= 1원. 포인트를 쌓으면 현금으로 인출할 수 있어요
        </Text>
      </View>

      <View style={styles.balanceSection}>
        <BalanceCard onPress={openParticipationForm} />
      </View>

      <View style={styles.menuSection}>
        <View style={styles.sectionHeaderRow}>
          <View style={styles.sectionHeaderText}>
            <Text style={styles.sectionTitle}>지금 메뉴 확인</Text>
            <Text style={styles.sectionDescription}>현재 참여할 수 있는 메뉴예요.</Text>
          </View>
          <Pressable
            accessibilityHint="전체 메뉴 탭으로 이동합니다"
            accessibilityLabel="전체 메뉴 보기"
            accessibilityRole="button"
            onPress={() => router.push('/menu')}
            style={({ pressed }) => [styles.moreButton, pressed && styles.pressed]}>
            <Text style={styles.moreButtonText}>+</Text>
          </Pressable>
        </View>

        <View style={styles.menuList}>
          {featuredMenus.map((menu) => (
            <MenuCard key={menu.id} menu={menu} onPress={openParticipationForm} />
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerBrand}>잇득</Text>
        <Text style={styles.footerText}>먹을수록 쌓인다.</Text>
      </View>
    </PageScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 16,
  },
  loginButton: {
    minHeight: 42,
    justifyContent: 'center',
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: BrandColors.accent,
    borderRadius: 14,
    backgroundColor: BrandColors.accent,
  },
  loginButtonText: {
    color: BrandColors.primaryDark,
    fontSize: 14,
    fontWeight: '800',
  },
  hero: {
    marginTop: 48,
  },
  eyebrow: {
    color: BrandColors.primary,
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1.2,
  },
  heroTitle: {
    marginTop: 12,
    color: BrandColors.text,
    fontSize: 34,
    fontWeight: '900',
    lineHeight: 44,
    letterSpacing: -1.1,
  },
  heroDescription: {
    maxWidth: 480,
    marginTop: 14,
    color: BrandColors.textSecondary,
    fontSize: 16,
    lineHeight: 25,
  },
  balanceSection: {
    marginTop: 32,
  },
  menuSection: {
    gap: 16,
    marginTop: 42,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  sectionHeaderText: {
    flex: 1,
    gap: 5,
  },
  sectionTitle: {
    color: BrandColors.text,
    fontSize: 21,
    fontWeight: '800',
    letterSpacing: -0.4,
  },
  sectionDescription: {
    color: BrandColors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
  moreButton: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: BrandColors.accent,
  },
  moreButtonText: {
    color: BrandColors.primaryDark,
    fontSize: 26,
    fontWeight: '700',
    lineHeight: 28,
  },
  menuList: {
    gap: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 48,
    paddingTop: 22,
    borderTopWidth: 1,
    borderTopColor: BrandColors.border,
  },
  footerBrand: {
    color: BrandColors.text,
    fontSize: 14,
    fontWeight: '900',
  },
  footerText: {
    color: BrandColors.textMuted,
    fontSize: 12,
  },
  pressed: {
    opacity: 0.72,
  },
});
