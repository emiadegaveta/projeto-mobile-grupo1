import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#9966CC', dark: '#6A0DAD' }}
      headerImage={
        <Image
          source={require('@/assets/images/esterela.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Projeto em produção</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Página não finalizada</ThemedText>
        <ThemedText>
        <ThemedText type="defaultSemiBold">realizando as configurações necessárias</ThemedText>
         
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Página em andamento</ThemedText>
        <ThemedText>
          {`não há nada para visualizar aqui, por enquanto...`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Página inicial gerenciada por emillya</ThemedText>
        <ThemedText>
         .
          <ThemedText type="defaultSemiBold">.</ThemedText> .
          <ThemedText type="defaultSemiBold">.</ThemedText> .
          <ThemedText type="defaultSemiBold">.</ThemedText> .
          <ThemedText type="defaultSemiBold">.</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
