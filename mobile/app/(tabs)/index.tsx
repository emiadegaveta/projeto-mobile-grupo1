import { Image } from 'expo-image';
import { Platform, StyleSheet, Pressable, View } from 'react-native';
import { useState } from 'react';
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
          contentFit="contain"
          transition={300}
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
        > </InteractiveSection>

        <InteractiveSection
          title="Músculos e Alimentação saudável"
          summary="Saiba a importância de uma boa alimentação e como ela afeta os músculos."
          image={require('@/assets/images/salada.jpg')}
        > </InteractiveSection>

        <InteractiveSection
          title="Saúde do Sono"
          summary="Por que o sono é vital para a saúde geral do corpo e da mente."
          image={require('@/assets/images/sono.webp')}
        > </InteractiveSection>

         <InteractiveSection
          title="Problemas de saúde"
          summary="Os principais problemas de saúde, como evitá-los e como afetam o corpo humano."
          image={require('@/assets/images/problemas.jpg')}
        > </InteractiveSection>

      </ThemedView>

      <ThemedView style={styles.stepContainer}>
      </ThemedView>
      </ParallaxScrollView>
   );
}

function ActionButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable style={({ pressed }) => [styles.actionButton, pressed && styles.actionButtonPressed]} onPress={onPress}>
      <ThemedText type="defaultSemiBold" style={styles.actionLabel}>{label}</ThemedText>
    </Pressable>
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
  children: React.ReactNode;
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
            <Image source={image} style={styles.cardImage} contentFit="cover" transition={200} />
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create ({

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  stepContainer: {
    gap: 12,
    marginBottom: 16,
    paddingHorizontal: 12,
  },

  reactLogo: {
   aspectRatio: 3,
   bottom: 0,
   resizeMode: 'contain',
   width: '100%',
   height: 220,     
   position: 'absolute',
   top: 0,
   left: 0,
  },

  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginVertical: 12,
    gap: 8,
  },

  actionButton: {
    flex: 1,
    backgroundColor: '#EDE7F6',
    paddingVertical: 10,
    marginHorizontal: 4,
    borderRadius: 10,
    alignItems: 'center',
  },

  actionButtonPressed: {
    opacity: 0.8,
  },

  actionLabel: {
    color: '#4B0082',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
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
    fontSize: 16,
  },
  cardSummary: {
    color: '#',
    marginTop: 6,
    marginBottom: 8,
  },
  cardBody: {
    marginTop: 8,
    gap: 8,
  },
  cardImage: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginTop: 8,
  },
});