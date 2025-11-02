import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function CerebroHumanoScreen() {
  return (
    <ScrollView style={styles.container}>
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

      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Introdução</ThemedText>
        <ThemedText style={styles.paragraph}>
          A qualidade do sono é um estado de repouso que permite a restauração física e mental, sendo essencial para a saúde e bem-estar.
        </ThemedText>
      </View>

      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Estrutura do Sono</ThemedText>
        <ThemedText style={styles.paragraph}>
          A estrutura do sono é composta por ciclos de 90 a 120 minutos, que alternam entre duas fases principais: o sono não-REM (NREM) e o sono REM (movimento rápido dos olhos).
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          <ThemedText type="defaultSemiBold" style={styles.topicTitle}>Não-REM (NREM):</ThemedText> Estágio 1 (N1): é a fase mais leve do sono, um estágio de transição entre a vigília e o sono.
          Estágio 2 (N2): O sono se aprofunda, com a frequência cardíaca e a temperatura do corpo diminuindo. 
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          <ThemedText type="defaultSemiBold" style={styles.topicTitle}>REM:</ThemedText> Ocorre em ciclos que se repetem ao longo da noite. 
          É caracterizado por movimentos rápidos dos olhos, respiração e batimentos cardíacos acelerados, e é a fase em que a maioria dos sonhos vívidos acontece. 
        </ThemedText>
      </View>

      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Benefícios do Sono</ThemedText>
        <ThemedText style={styles.paragraph}>
        O sono de qualidade oferece diversos benefícios para a saúde física e mental, incluindo melhoria da função cerebral e da memória, fortalecimento do sistema imunológico, regulação de hormônios e peso, e reparação celular. Dormir bem também pode reduzir o estresse e o risco de doenças crônicas. 
        </ThemedText>
      </View>

      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Curiosidades sobre o Sono</ThemedText>
        <ThemedText style={styles.paragraph}>
        
        <ThemedText type="defaultSemiBold" style={styles.topicTitle}>Cérebro ativo: </ThemedText>O cérebro não descansa durante o sono. Ele organiza memórias, processa emoções e até impulsiona a criatividade.{'\n'}</ThemedText>
        
        <ThemedText style={styles.paragraph}>
        
        <ThemedText type="defaultSemiBold" style={styles.topicTitle}>Fases do sono: </ThemedText>O sono é dividido em quatro fases que se repetem em ciclos de aproximadamente 90 minutos.{'\n'}</ThemedText>

        <ThemedText style={styles.paragraph}>

        <ThemedText type="defaultSemiBold" style={styles.topicTitle}>Paralisia do corpo: </ThemedText>Durante os sonhos mais intensos (fase REM), o cérebro está muito ativo, mas o corpo fica paralisado para proteger o indivíduo de "encenar" seus sonhos.{'\n'}</ThemedText>

        <ThemedText style={styles.paragraph}>

        <ThemedText type="defaultSemiBold" style={styles.topicTitle}>Aumento da vontade de comer: </ThemedText>A privação do sono pode aumentar a vontade de consumir alimentos gordurosos e açucarados.{'\n'}</ThemedText>

        <ThemedText style={styles.paragraph}>

        <ThemedText type="defaultSemiBold" style={styles.topicTitle}>Necessidade de sono: </ThemedText>A quantidade de sono necessária varia de pessoa para pessoa e ao longo da vida. Bebês dormem muito mais, enquanto idosos tendem a dormir menos do que os adultos.{'\n'}</ThemedText>

        <ThemedText style={styles.paragraph}>
        
        <ThemedText type="defaultSemiBold" style={styles.topicTitle}>Rosto nos sonhos: </ThemedText>Nós só podemos sonhar com rostos que já vimos na vida real, mesmo que não nos lembremos de tê-los visto antes.{'\n'}</ThemedText>
        
      </View>

      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Conclusão</ThemedText>
        <ThemedText style={styles.paragraph}>
        O sono é fundamental para a saúde física e mental, pois durante o descanso o corpo se recupera, repara tecidos, consolida memórias e regula hormônios.
        </ThemedText>
      </View>

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
    backgroundColor: '#0066ffff',
    paddingVertical: 28,
    borderBottomWidth: 2,
    borderBottomColor: '#0273acff',
  },

  headerImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#0273acff',
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#004b70ff',
    textAlign: 'center',
  },

  headerSubtitle: {
    fontSize: 15,
    color: '#004b70ff',
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
    color: '#004b70ff', 
    marginBottom: 10,
    textShadowColor: 'rgba(80, 60, 120, 0.25)', 
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

  topicTitle: {
    color: '#004b70ff',
  },

  footer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#0066FF',
    marginTop: 16,
  },
  footerText: {
    fontSize: 13,
    color: '#004b70ff',
    opacity: 0.8,
    textAlign: 'center',
  },
});
