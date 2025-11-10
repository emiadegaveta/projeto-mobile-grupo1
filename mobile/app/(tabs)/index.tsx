import { Image } from 'react-native'; // ✅ trocado de 'expo-image' para 'react-native'
import { StyleSheet, Pressable, View } from 'react-native';
import { useState } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#7B0BE0', dark: '#7B0BE0' }}
      headerImage={
        <Image
          source={require('@/assets/images/coração.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-Vindo(a)</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          Neste site iremos abordar sobre saúde e corpo humano, bem como alimentação, exercícios físicos e temas que nos auxiliam a ter uma vida mais saudável e feliz.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="title">Confira os assuntos abordados:</ThemedText>

        <InteractiveSection
          title="Cérebro Humano"
          summary="Entenda como manter o cérebro saudável e como isso impacta o corpo."
          image={require('@/assets/images/cerebelo.webp')}
        />

        <InteractiveSection
          title="Músculos e Alimentação saudável"
          summary="Saiba a importância de uma boa alimentação e como ela afeta os músculos."
          image={require('@/assets/images/salada.jpg')}
        />

        <InteractiveSection
          title="Saúde do Sono"
          summary="Por que o sono é vital para a saúde geral do corpo e da mente."
          image={require('@/assets/images/sono.webp')}
        />

        <InteractiveSection
          title="Saúde e Bem-Estar"
          summary="Como uma boa alimentação e exercícios físicos podem melhorar sua qualidade de vida."
          image={require('@/assets/images/problemas.jpg')}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

function InteractiveSection({
  title,
  summary,
  children,
  image,
}: {
  title: string;
  summary?: string;
  children?: React.ReactNode;
  image?: any;
}) {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.card}>
      <Pressable onPress={() => setOpen(v => !v)} style={styles.cardHeader}>
        <ThemedText type="subtitle" style={styles.cardTitle}>{title}</ThemedText>
        <ThemedText>{open ? '−' : '+'}</ThemedText>
      </Pressable>

      <ThemedText type="default" style={styles.cardSummary}>{summary}</ThemedText>

      {open && (
        <View style={styles.cardBody}>
          {children}
          {image && (
            <Image source={image} style={styles.cardImage} resizeMode="cover" />
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 12,
    marginBottom: 0,
    paddingHorizontal: 2,
  },
  reactLogo: {
    aspectRatio: 3,
    bottom: 0,
    resizeMode: 'contain',
    width: '100%',
    height: 220,
    position: 'absolute',
    top: 20,
    left: 0,
  },
  card: {
    backgroundColor: '#7B0BE0',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    width: '92%',
    maxWidth: 700,
    alignSelf: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
  },
  cardSummary: {
    color: '#FFFFFF', // ✅ corrigido
    marginTop: 6,
    marginBottom: 8,
  },
  cardBody: {
    marginTop: 7,
    gap: 8,
  },
  cardImage: {
    width: '100%',
    maxWidth: 620,
    aspectRatio: 16 / 9,
    borderRadius: 10,
    marginVertical: 20,
    alignSelf: 'center',
  },
});
