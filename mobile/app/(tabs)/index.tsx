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
          source={require('@/assets/images/logo.cabeçalho.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-Vindo(a)</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Neste site iremos abordar sobre saúde e corpo humano,
        </ThemedText>
        <ThemedText type="subtitle">bem como alimentação, exercícios físicos e entre outros temas que nos auxiliam a ter uma vida mais saudável e feliz. </ThemedText>
      </ThemedView>
<Image
  source={require('@/assets/images/giphy.webp')}
  style={{ width: 400, height: 350}}
/>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Página em andamento</ThemedText>
        <ThemedText>
          {`Agora há algo para visualizar (favor, NÃO REPARAR NA IMAGEM DE PÉSSIMA QUALIDADE. A desenvolvedora da página não se deu o trabalho de verificar os px :/)`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Página inicial gerenciada por emillya</ThemedText>
        <ThemedText>
         .
          <ThemedText type="defaultSemiBold">.</ThemedText> .
          <ThemedText type="defaultSemiBold">.</ThemedText> .
          <ThemedText type="defaultSemiBold">.</ThemedText> .
          <ThemedText type="defaultSemiBold">.</ThemedText> .
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create ({

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
    width: 800, 
    height: 250,
    bottom: 0,
    left: 0,
    position: 'absolute',
    resizeMode: 'contain',
}
});
