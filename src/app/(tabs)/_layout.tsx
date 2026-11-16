import { Tabs } from 'expo-router';
import type { ColorValue } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import { BrandColors } from '@/constants/brand';

interface TabIconProps {
  color: ColorValue;
  focused: boolean;
  label: string;
}

function TabIcon({ color, focused, label }: TabIconProps) {
  return (
    <View style={[styles.icon, focused && styles.focusedIcon]}>
      <Text style={[styles.iconText, { color }]}>{label}</Text>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: BrandColors.background },
        tabBarActiveTintColor: BrandColors.primary,
        tabBarInactiveTintColor: BrandColors.textMuted,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '홈',
          tabBarAccessibilityLabel: '홈 탭',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon color={color} focused={focused} label="⌂" />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: '메뉴',
          tabBarAccessibilityLabel: '메뉴 탭',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon color={color} focused={focused} label="≡" />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: BrandColors.background,
    borderTopColor: BrandColors.border,
    paddingTop: 5,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '700',
  },
  icon: {
    minWidth: 26,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
  },
  focusedIcon: {
    backgroundColor: BrandColors.primarySoft,
  },
  iconText: {
    fontSize: 17,
    fontWeight: '900',
  },
});
