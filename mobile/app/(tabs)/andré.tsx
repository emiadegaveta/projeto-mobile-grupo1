import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#8A2BE2 ', dark: '#4B0082' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#B59DFF"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Musculação e Alimentação</ThemedText>
      </ThemedView>
      <ThemedText type="subtitle">A musculação e a alimentação saudável são pilares fundamentais para o bem-estar físico e mental. 
      Praticar exercícios regularmente e manter uma dieta equilibrada ajudam a fortalecer o corpo, prevenir doenças e melhorar a qualidade de vida.</ThemedText>
      <Image 
      source={require('@/assets/images/alimentos.jpg')}
      style={{ width: 450, height: 235 }}
      />
      
      <Collapsible title="músculos">
      </Collapsible>
      <Image
  source={require('@/assets/images/musculo.webp')}
  style={{ width: 400, height: 350 }}
/>
      
      <Collapsible title="Volte em outro momento :)">
      </Collapsible>
      
      <Collapsible title="...">  
      </Collapsible>

      <Collapsible title="...">
      </Collapsible>

      <Collapsible title="...">  
      </Collapsible>
      
      <Collapsible title="...">  
      </Collapsible>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#ffffffff',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
