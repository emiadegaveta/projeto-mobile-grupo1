import { Image } from 'expo-image';
import { Platform, StyleSheet, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#8A2BE2', dark: '#4B0082' }}
      headerImage={
        <View style={styles.headerImageWrapper}>
          <IconSymbol
            size={280}
            color="#B59DFF"
            name="chevron.left.forwardslash.chevron.right"
            style={styles.headerImage}
          />
          <ThemedText type="title" style={styles.headerTitle}>
            Musculação & Alimentação
          </ThemedText>
        </View>
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Musculação e Alimentação</ThemedText>
      </ThemedView>
      <ThemedText type="subtitle">
        A musculação e a alimentação saudável são pilares fundamentais para o bem-estar físico e mental. 
        Praticar exercícios regularmente e manter uma dieta equilibrada ajudam a fortalecer o corpo, prevenir doenças e melhorar a qualidade de vida.
      </ThemedText>
      <Image 
        source={require('@/assets/images/imagem.corpoo.jpg')}
        style={{ width: 450, height: 235 }}
      />
      
      <Collapsible title="músculos">
      </Collapsible>
      <Image
        source={require('@/assets/images/musculo.webp')}
        style={{ width: 400, height: 350 }}
      />
      
      <Collapsible title="músculos inferiores">
      </Collapsible>
      
      
      <Collapsible title="músculos superiores">  
      </Collapsible>

      <Collapsible title="músculos inferiores">
      </Collapsible>

      <Collapsible title="...">  
      </Collapsible>
      
      <Collapsible title="...">  
      </Collapsible>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImageWrapper: {
    position: 'relative',
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    position: 'absolute',
    opacity: 0.15,
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 28,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
    zIndex: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginVertical: 12,
  },
});
