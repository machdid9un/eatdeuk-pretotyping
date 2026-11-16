import { Linking, StyleSheet, Text, View } from 'react-native';

import { BrandHeader } from '@/components/brand-header';
import { MenuCard } from '@/components/menu-card';
import { PageScrollView } from '@/components/page-scroll-view';
import { BrandColors } from '@/constants/brand';
import { PARTICIPATION_FORM_URL } from '@/constants/links';
import { menus } from '@/data/menus';

export default function MenuScreen() {
  const openParticipationForm = () => {
    void Linking.openURL(PARTICIPATION_FORM_URL);
  };

  return (
    <PageScrollView>
      <BrandHeader />

      <View style={styles.header}>
        <Text style={styles.eyebrow}>MENU</Text>
        <Text style={styles.title}>잇득 메뉴</Text>
        <Text style={styles.description}>
          원하는 메뉴를 선택하면 잇득 참여 신청으로 이어져요.
        </Text>
      </View>

      <View style={styles.menuList}>
        {menus.map((menu) => (
          <MenuCard key={menu.id} menu={menu} onPress={openParticipationForm} />
        ))}
      </View>
    </PageScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 42,
  },
  eyebrow: {
    color: BrandColors.primary,
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1.2,
  },
  title: {
    marginTop: 8,
    color: BrandColors.text,
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: -0.8,
  },
  description: {
    marginTop: 10,
    color: BrandColors.textSecondary,
    fontSize: 15,
    lineHeight: 23,
  },
  menuList: {
    gap: 12,
    marginTop: 24,
  },
});
