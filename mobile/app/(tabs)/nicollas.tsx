import { StyleSheet, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A8E6CF', dark: '#81C784' }}
      headerImage={
        <View style={styles.headerContainer}>
          <IconSymbol
            size={100}
            color="#ffffff"
            name="heart.fill"
            style={styles.headerIcon}
          />
          <ThemedText type="title" style={styles.headerTitle}>
            Saúde e Bem-Estar
          </ThemedText>
          <ThemedText style={styles.headerSubtitle}>
            Cuide do corpo, da mente e do coração 💚
          </ThemedText>
        </View>
      }
    >
      <ThemedText style={styles.pageText}>Página em andamento...</ThemedText>

      {/* Exemplo de seção (mantive para não quebrar o layout) */}
      <Collapsible title="Android, iOS e Web">
        <ThemedText>
          Este projeto pode ser aberto em Android, iOS e também no navegador.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingBottom: 40,
    backgroundColor: '#A8E6CF',
  },
  headerIcon: {
    marginBottom: 10,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#ffffff',
    fontSize: 16,
    marginTop: 6,
    fontStyle: 'italic',
  },
  pageText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
  },
});
