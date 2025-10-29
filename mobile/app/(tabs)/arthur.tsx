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
          source={require('@/assets/images/2325590-1.jpg')}
          style={styles.headerImage}
        />
        <ThemedText type="title" style={styles.headerTitle}>
          Qualidade do Sono
        </ThemedText>
        <ThemedText style={styles.headerSubtitle}>
          Desenvolvido por Arthur Mota
        </ThemedText>
      </ThemedView>

      {/* Introdução */}
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Introdução</ThemedText>
        <ThemedText style={styles.paragraph}>
          A qualidade do sono é um estado de repouso que permite a restauração física e mental, sendo essencial para a saúde e bem-estar.
        </ThemedText>
      </View>

      {/* Estrutura */}
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Estrutura do Sono</ThemedText>
        <ThemedText style={styles.paragraph}>
          A estrutura do sono é composta por ciclos de 90 a 120 minutos, que alternam entre duas fases principais: o sono não-REM (NREM) e o sono REM (movimento rápido dos olhos).
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          <ThemedText type="defaultSemiBold">Não-REM (NREM):</ThemedText> Estágio 1 (N1): é a fase mais leve do sono, um estágio de transição entre a vigília e o sono.
          Estágio 2 (N2): O sono se aprofunda, com a frequência cardíaca e a temperatura do corpo diminuindo. 
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          <ThemedText type="defaultSemiBold">REM:</ThemedText> ° Ocorre em ciclos que se repetem ao longo da noite. 
          É caracterizado por movimentos rápidos dos olhos, respiração e batimentos cardíacos acelerados, e é a fase em que a maioria dos sonhos vívidos acontece. 
        </ThemedText>
      </View>

      {/* Funções */}
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Benefícios do Sono</ThemedText>
        <ThemedText style={styles.paragraph}>
        O sono de qualidade oferece diversos benefícios para a saúde física e mental, incluindo melhoria da função cerebral e da memória, fortalecimento do sistema imunológico, regulação de hormônios e peso, e reparação celular. Dormir bem também pode reduzir o estresse e o risco de doenças crônicas. 
        </ThemedText>
      </View>

      {/* Curiosidades */}
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Curiosidades sobre o Sono</ThemedText>
        <ThemedText style={styles.paragraph}>
        * Cérebro ativo: O cérebro não descansa durante o sono. Ele organiza memórias, processa emoções e até impulsiona a criatividade. 

        * Fases do sono: O sono é dividido em quatro fases que se repetem em ciclos de aproximadamente 90 minutos. 

        * Paralisia do corpo: Durante os sonhos mais intensos (fase REM), o cérebro está muito ativo, mas o corpo fica paralisado para proteger o indivíduo de "encenar" seus sonhos. 

        * Aumento da vontade de comer: A privação do sono pode aumentar a vontade de consumir alimentos gordurosos e açucarados.

        * Necessidade de sono: A quantidade de sono necessária varia de pessoa para pessoa e ao longo da vida. Bebês dormem muito mais, enquanto idosos tendem a dormir menos do que os adultos. 

        * Rosto nos sonhos: Nós só podemos sonhar com rostos que já vimos na vida real, mesmo que não nos lembremos de tê-los visto antes.
        </ThemedText>
      </View>

      {/* Conclusão */}
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Conclusão</ThemedText>
        <ThemedText style={styles.paragraph}>
        O sono é fundamental para a saúde física e mental, pois durante o descanso o corpo se recupera, repara tecidos, consolida memórias e regula hormônios.
        </ThemedText>
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <ThemedText style={styles.footerText}>
          © 2025 — Desenvolvido por Arthur Mota | Projeto sobre o Sono
        </ThemedText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66CCFF',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0066FF',
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
    backgroundColor: '#0066FF',
    marginTop: 16,
  },
  footerText: {
    fontSize: 13,
    color: '#4C2A85',
    opacity: 0.8,
    textAlign: 'center',
  },
});
