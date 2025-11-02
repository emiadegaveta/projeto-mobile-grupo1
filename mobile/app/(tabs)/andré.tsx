import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function MusculacaoAlimentacaoScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <Image
          source={require('@/assets/images/imagem.corpoo.jpg')}
          style={styles.headerImage}
        />
        <ThemedText type="title" style={styles.headerTitle}>
          Musculação & Alimentação
        </ThemedText>
        <ThemedText style={styles.headerSubtitle}>
          Desenvolvido por André
        </ThemedText>
      </ThemedView>

      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Introdução</ThemedText>
        <ThemedText style={styles.paragraph}>
          A musculação e a alimentação saudável são pilares fundamentais para o bem-estar físico e mental. 
          Praticar exercícios regularmente e manter uma dieta equilibrada ajudam a fortalecer o corpo, 
          prevenir doenças e melhorar a qualidade de vida.
        </ThemedText>
      </View>

      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>O Sistema Muscular</ThemedText>
        <ThemedText style={styles.paragraph}>
          Os músculos são tecidos especializados responsáveis pelos movimentos do corpo humano.
          Existem cerca de 600 músculos no corpo, e eles trabalham junto com ossos e articulações
          para permitir desde gestos simples até movimentos complexos.
        </ThemedText>
        <Image
          source={require('@/assets/images/musculo.webp')}
          style={styles.sectionImage}
        />

        <ThemedText style={styles.paragraph}>
          <ThemedText type="defaultSemiBold">Tipos de músculos:{'\n'}</ThemedText>
          • Músculos esqueléticos: controlados voluntariamente (usados em exercícios){'\n'}
          • Músculos lisos: involuntários, encontrados em órgãos internos{'\n'}
          • Músculo cardíaco: exclusivo do coração, trabalha de forma contínua.
        </ThemedText>
         <Image
          source={require('@/assets/images/típos de músculos.jpg')}
          style={styles.sectionImage}
        />
      </View>

      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Grupos Musculares</ThemedText>
        <ThemedText style={styles.paragraph}>
          <ThemedText type="defaultSemiBold">Músculos Superiores:{'\n'}</ThemedText>
          • Peitorais: responsáveis por empurrar e mover os braços{'\n'}
          • Dorsais (costas): ajudam em puxadas e sustentação da coluna{'\n'}
          • Deltoides (ombros): dão amplitude e estabilidade aos ombros{'\n'}
          • Bíceps e tríceps: controlam a flexão e extensão dos braços
        </ThemedText>
         <Image
          source={require('@/assets/images/peito.jpg')}
          style={styles.sectionImage}
        />
        <Image
          source={require('@/assets/images/dorsal.jpg')}
          style={styles.sectionImage}
        />
        <Image
          source={require('@/assets/images/bíceps.webp')}
          style={styles.sectionImage}
        />
        <Image
          source={require('@/assets/images/tríceps.jpg')}
          style={styles.sectionImage}
        />
        
        <ThemedText style={[styles.paragraph, styles.topSpacing]}>
          <ThemedText type="defaultSemiBold">Músculos Inferiores:{'\n'}</ThemedText>
          • Quadríceps: fundamentais para correr, agachar e saltar{'\n'}
          • Glúteos: estabilizam a pelve e ajudam na extensão dos quadris{'\n'}
          • Isquiotibiais: auxiliam na flexão dos joelhos{'\n'}
          • Panturrilhas: controlam o impulso e movimentação dos pés
        </ThemedText>
      </View>

      {/* Alimentação */}
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Alimentação e Performance</ThemedText>
        <ThemedText style={styles.paragraph}>
          A alimentação é parte essencial da construção muscular. Uma dieta adequada fornece energia, 
          melhora a recuperação e ajuda na hipertrofia.
        </ThemedText>
        <ThemedText style={[styles.paragraph, styles.topSpacing]}>
          <ThemedText type="defaultSemiBold">Recomendações Nutricionais:{'\n'}</ThemedText>
          • Proteínas: essenciais para reconstrução muscular (frango, ovos, peixe){'\n'}
          • Carboidratos complexos: fornecem energia (arroz integral, batata-doce){'\n'}
          • Gorduras boas: equilibram hormônios (abacate, azeite, castanhas){'\n'}
          • Hidratação: beber água regularmente evita fadiga e melhora o desempenho
        </ThemedText>
      </View>

      {/* Dicas */}
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Dicas Práticas</ThemedText>
        <ThemedText style={styles.paragraph}>
          • Combine treinos regulares com alimentação equilibrada{'\n'}
          • Descanse o suficiente — o músculo cresce durante o repouso{'\n'}
          • Mantenha consistência: resultados vêm com o tempo{'\n'}
          • Busque acompanhamento profissional para otimizar seus treinos
        </ThemedText>
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <ThemedText style={styles.footerText}>
          © 2025 — Desenvolvido por André | Projeto de Musculação e Nutrição
        </ThemedText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8A2BE2',
    paddingVertical: 28,
    borderBottomWidth: 2,
    borderBottomColor: '#7B1FA2',
  },
  headerImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#B39DDB',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  headerSubtitle: {
    fontSize: 15,
    color: '#E1BEE7',
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
    color: '#4A148C',
    marginBottom: 10,
    textShadowColor: 'rgba(74, 20, 140, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  sectionImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#424242',
    textAlign: 'justify',
  },
  topSpacing: {
    marginTop: 16,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#8A2BE2',
    marginTop: 16,
  },
  footerText: {
    fontSize: 13,
    color: '#E1BEE7',
    opacity: 0.8,
    textAlign: 'center',
  },
});
