import type { PropsWithChildren } from 'react';
import { ScrollView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BrandColors, Layout } from '@/constants/brand';

interface PageScrollViewProps extends PropsWithChildren {
  contentStyle?: StyleProp<ViewStyle>;
}

export function PageScrollView({ children, contentStyle }: PageScrollViewProps) {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.content, contentStyle]}>{children}</View>
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
});
