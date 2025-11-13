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
          source={require('@/assets/images/tipos.jpg')}
          style={styles.sectionImage}
        />
      </View>

      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Grupos Musculares - Superiores e Inferiores</ThemedText>

        <ThemedText style={styles.sectionTitle}>Superiores</ThemedText>
          <ThemedText type="defaultSemiBold" style={styles.topicTitle}>Peitorais: responsáveis por empurrar e mover os braços</ThemedText>
            <Image
          source={require('@/assets/images/peito.jpg')}
          style={styles.sectionImage}
          />
          {'\n'}
         
          <ThemedText type="defaultSemiBold" style={styles.topicTitle}>Dorsais (costas): ajudam em puxadas e sustentação da coluna</ThemedText>
            <Image
          source={require('@/assets/images/dorsal.jpg')}
          style={styles.sectionImage}
        />
        {'\n'}

          <ThemedText type="defaultSemiBold" style={styles.topicTitle}>Deltoides (ombros): dão amplitude e estabilidade aos ombros</ThemedText>
            <Image
          source={require('@/assets/images/del.jpg')}
          style={styles.sectionImage}
        />
        {'\n'}
        
        <ThemedText type="defaultSemiBold" style={styles.topicTitle}>Bíceps e tríceps: controlam a flexão e extensão dos braços</ThemedText>
          <Image
          source={require('@/assets/images/biceps.webp')}
          style={styles.sectionImage}
        />
        <Image
          source={require('@/assets/images/triceps.jpg')}
          style={styles.sectionImage}
        />
        
          <ThemedText style={styles.sectionTitle}>Inferiores</ThemedText>
          <ThemedText type="defaultSemiBold" style={styles.topicTitle}>Quadríceps: fundamentais para correr, agachar e saltar</ThemedText>
            <Image
          source={require('@/assets/images/quadriceps.jpg')}
          style={styles.sectionImage}
          />
          {'\n'}
         
          <ThemedText type="defaultSemiBold" style={styles.topicTitle}>Glúteos: estabilizam a pelve e ajudam na extensão dos quadris</ThemedText>
            <Image
          source={require('@/assets/images/bunda.jpg')}
          style={styles.sectionImage}
        />
        {'\n'}

          <ThemedText type="defaultSemiBold" style={styles.topicTitle}>Isquiotibiais: auxiliam na flexão dos joelhos</ThemedText>
            <Image
          source={require('@/assets/images/isquioslaoq.webp')}
          style={styles.sectionImage}
        />
        {'\n'}
        
        <ThemedText type="defaultSemiBold" style={styles.topicTitle}>Panturrilhas: controlam o impulso e movimentação dos pés</ThemedText>
          <Image
          source={require('@/assets/images/panturrilha.jpg')}
          style={styles.sectionImage}
        />
      </View>

      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Alimentação e Performance</ThemedText>
        <ThemedText style={styles.paragraph}>
          A alimentação é parte essencial da construção muscular. Uma dieta adequada fornece energia, 
          melhora a recuperação e ajuda na hipertrofia.
        </ThemedText>
        <ThemedText style={[styles.paragraph, styles.topSpacing]}>
          <ThemedText type="defaultSemiBold" style={styles.topicTitle}>Recomendações Nutricionais:{'\n'}</ThemedText>
          • Proteínas: essenciais para reconstrução muscular (frango, ovos, peixe){'\n'}
          • Carboidratos complexos: fornecem energia (arroz integral, batata-doce){'\n'}
          • Gorduras boas: equilibram hormônios (abacate, azeite, castanhas){'\n'}
          • Hidratação: beber água regularmente evita fadiga e melhora o desempenho
        </ThemedText>
      </View>

      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Dicas Práticas</ThemedText>
        <ThemedText style={styles.paragraph}>
          • Combine treinos regulares com alimentação equilibrada{'\n'}
          • Descanse o suficiente — o músculo cresce durante o repouso{'\n'}
          • Mantenha consistência: resultados vêm com o tempo{'\n'}
          • Busque acompanhamento profissional para otimizar seus treinos
        </ThemedText>
      </View>

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
    backgroundColor: '#ffb065ff',
  },

  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fd7a00ff',
    paddingVertical: 28,
    borderBottomWidth: 2,
    borderBottomColor: '#e95500ff',
  },

  headerImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#e95500ff',
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
    color: '#FFFFFF',
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
    color: '#e95500ff',
    marginBottom: 10,
    textShadowColor: 'rgba(74, 20, 140, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  
  topicTitle: {
    color: '#ffa600ff',
    fontSize: 16,
    marginTop: 12,
    fontWeight: '600',
  },

  sectionImage: {
    width: '100%',
    maxWidth: 420,
    height: undefined,
    aspectRatio: 16 / 9, 
    borderRadius: 10,
    marginVertical: 20,
    alignSelf: 'auto',
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
    backgroundColor: '#fd7a00ff',
    marginTop: 16,
  },

  footerText: {
    fontSize: 13,
    color: '#FFFFFF',
    opacity: 0.8,
    textAlign: 'center',
  },
});
