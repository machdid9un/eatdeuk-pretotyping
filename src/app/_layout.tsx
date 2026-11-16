import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { BrandColors } from '@/constants/brand';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: BrandColors.background },
          headerShown: false,
        }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </>
  );
}
