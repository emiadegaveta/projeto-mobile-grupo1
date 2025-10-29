import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function CerebroHumanoScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <ThemedView style={styles.header}>
        <Image
          source={require('@/assets/images/cerebelo.webp')}
          style={styles.headerImage}
        />
        <ThemedText type="title" style={styles.headerTitle}>
          O Cérebro Humano
        </ThemedText>
        <ThemedText style={styles.headerSubtitle}>
          Desenvolvido por Davi de Freitas
        </ThemedText>
      </ThemedView>

      {/* Introdução */}
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Introdução</ThemedText>
        <ThemedText style={styles.paragraph}>
          O cérebro humano é o órgão mais complexo do corpo. Ele comanda
          pensamentos, emoções, memória e movimentos, sendo o centro da
          consciência e da personalidade humana.
        </ThemedText>
      </View>

      {/* Estrutura */}
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Estrutura do Cérebro</ThemedText>
        <ThemedText style={styles.paragraph}>
          O cérebro é dividido em três grandes regiões:
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          <ThemedText type="defaultSemiBold">Cérebro (Telencéfalo):</ThemedText> controla as funções
          cognitivas, como pensamento e linguagem.
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          <ThemedText type="defaultSemiBold">Cerebelo:</ThemedText> coordena o equilíbrio e os
          movimentos, garantindo precisão motora.
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          <ThemedText type="defaultSemiBold">Tronco encefálico:</ThemedText> regula funções vitais
          como respiração e batimentos cardíacos.
        </ThemedText>
      </View>

      {/* Funções */}
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Funções do Cérebro</ThemedText>
        <ThemedText style={styles.paragraph}>
          O cérebro interpreta informações sensoriais e envia comandos para o
          corpo. Cada hemisfério atua de maneira distinta: o esquerdo é lógico
          e analítico, enquanto o direito é criativo e intuitivo.
        </ThemedText>
      </View>

      {/* Curiosidades */}
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Curiosidades</ThemedText>
        <ThemedText style={styles.paragraph}>
          • O cérebro consome cerca de 20% da energia do corpo.{'\n'}
          • Contém aproximadamente 86 bilhões de neurônios.{'\n'}
          • Durante o sono, o cérebro reorganiza memórias e limpa toxinas.{'\n'}
          • Emoções e decisões são formadas em redes neurais complexas.
        </ThemedText>
      </View>

      {/* Conclusão */}
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Conclusão</ThemedText>
        <ThemedText style={styles.paragraph}>
          Compreender o cérebro é compreender a si mesmo. É nele que nascem
          nossos pensamentos, emoções e sonhos. Estudar o cérebro é mergulhar
          nas origens da consciência humana.
        </ThemedText>
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <ThemedText style={styles.footerText}>
          © 2025 — Desenvolvido por Davi de Freitas | Projeto de Neurociência
        </ThemedText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F1F9',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DCC9E6',
    paddingVertical: 28,
    borderBottomWidth: 2,
    borderBottomColor: '#A895C9',
  },
  headerImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#BFA7E2',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3A226E',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 15,
    color: '#5D3D9B',
    opacity: 0.9,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 14,
    marginVertical: 8,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#37245F', // mais escuro, destaque
    marginBottom: 10,
    textShadowColor: 'rgba(80, 60, 120, 0.25)', // brilho leve
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#3B2F42',
    textAlign: 'justify',
    marginTop: 8,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#DCC9E6',
    marginTop: 16,
  },
  footerText: {
    fontSize: 13,
    color: '#4C2A85',
    opacity: 0.8,
    textAlign: 'center',
  },
});
