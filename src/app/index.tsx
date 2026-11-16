import type { Metadata } from 'expo-router/server';
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BalanceCard } from '@/components/balance-card';
import { BrandHeader } from '@/components/brand-header';
import { MenuCard } from '@/components/menu-card';
import { BrandColors, Layout } from '@/constants/brand';
import { PARTICIPATION_FORM_URL } from '@/constants/links';
import { menus } from '@/data/menus';

export function generateMetadata(): Metadata {
  return {
    title: '잇득 | 먹을수록 쌓인다',
    description: '맛있는 한 끼를 먹고 혜택을 쌓는 잇득을 만나보세요.',
  };
}

export default function LandingScreen() {
  const openParticipationForm = () => {
    void Linking.openURL(PARTICIPATION_FORM_URL);
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
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
              잇득 제휴 식당의 메뉴를 먹고 인증하면 포인트가 쌓여요.
            </Text>
          </View>

          <View style={styles.balanceSection}>
            <BalanceCard onPress={openParticipationForm} />
          </View>

          <View style={styles.menuSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>지금 참여할 수 있는 메뉴</Text>
              <Text style={styles.sectionDescription}>
                먹고 싶은 메뉴를 눌러 잇득 프리토타입에 참여해 주세요.
              </Text>
            </View>
            <View style={styles.menuList}>
              {menus.map((menu) => (
                <MenuCard key={menu.id} menu={menu} onPress={openParticipationForm} />
              ))}
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerBrand}>잇득</Text>
            <Text style={styles.footerText}>먹을수록 쌓인다.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BrandColors.background,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  content: {
    width: '100%',
    maxWidth: Layout.contentMaxWidth,
    paddingHorizontal: Layout.screenPadding,
    paddingTop: 20,
    paddingBottom: 36,
  },
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
    borderColor: BrandColors.border,
    borderRadius: 14,
    backgroundColor: BrandColors.background,
  },
  loginButtonText: {
    color: BrandColors.text,
    fontSize: 14,
    fontWeight: '800',
  },
  hero: {
    marginTop: 64,
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
    fontSize: 36,
    fontWeight: '900',
    lineHeight: 46,
    letterSpacing: -1.2,
  },
  heroDescription: {
    maxWidth: 480,
    marginTop: 16,
    color: BrandColors.textSecondary,
    fontSize: 16,
    lineHeight: 25,
  },
  balanceSection: {
    marginTop: 36,
  },
  menuSection: {
    gap: 16,
    marginTop: 48,
  },
  sectionHeader: {
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
