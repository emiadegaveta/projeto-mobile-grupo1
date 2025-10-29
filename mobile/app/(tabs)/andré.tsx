import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#8A2BE2', dark: '#4B0082' }}
      headerImage={
        <View style={styles.headerImageWrapper}>
          <IconSymbol
            size={280}
            color="#B59DFF"
            name="chevron.left.forwardslash.chevron.right"
            style={styles.headerImage}
          />
          <ThemedText type="title" style={styles.headerTitle}>
            Musculação & Alimentação
          </ThemedText>
        </View>
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Musculação e Alimentação</ThemedText>
      </ThemedView>

      <ThemedText type="subtitle" style={{ textAlign: 'justify' }}>
        A musculação e a alimentação saudável são pilares fundamentais para o bem-estar físico e mental. 
        Praticar exercícios regularmente e manter uma dieta equilibrada ajudam a fortalecer o corpo, prevenir doenças e melhorar a qualidade de vida.
      </ThemedText>

      {/* ----- IMAGEM GERAL DO CORPO ----- */}
      <Collapsible title="Imagem do Corpo">
        <Image 
          source={require('@/assets/images/imagem.corpoo.jpg')}
          style={{ width: 450, height: 235, borderRadius: 10, marginBottom: 16 }}
        />
      </Collapsible>

      {/* ----- MÚSCULOS ----- */}
      <Collapsible title="Músculos">
        <ThemedView style={styles.card}>
          <ThemedText style={styles.cardText}>
            Os músculos são tecidos especializados responsáveis pelos movimentos do corpo humano.
            Existem cerca de 600 músculos no corpo, e eles trabalham junto com ossos e articulações
            para permitir desde gestos simples até movimentos complexos.
          </ThemedText>
          <ThemedText style={styles.cardText}>
            {"\n"}👉 Tipos de músculos:
            {"\n"}- **Músculos esqueléticos**: controlados voluntariamente (usados em exercícios).
            {"\n"}- **Músculos lisos**: involuntários, encontrados em órgãos internos.
            {"\n"}- **Músculo cardíaco**: exclusivo do coração, trabalha de forma contínua.
          </ThemedText>

          <Image
            source={require('@/assets/images/musculo.webp')}
            style={{ width: 400, height: 350, borderRadius: 10, marginTop: 16 }}
          />
        </ThemedView>
      </Collapsible>

      {/* ----- MÚSCULOS SUPERIORES ----- */}
      <Collapsible title="Músculos Superiores">
        <ThemedView style={styles.card}>
          <ThemedText style={styles.cardText}>
            Os músculos da parte superior do corpo são responsáveis por força, estabilidade e postura.  
            {"\n"}Principais grupos musculares:
            {"\n"}- **Peitorais**: responsáveis por empurrar e mover os braços.  
            {"\n"}- **Dorsais (costas)**: ajudam em puxadas e sustentação da coluna.  
            {"\n"}- **Deltoides (ombros)**: dão amplitude e estabilidade aos ombros.  
            {"\n"}- **Bíceps e tríceps**: controlam a flexão e extensão dos braços.
          </ThemedText>
        </ThemedView>
      </Collapsible>

      {/* ----- MÚSCULOS INFERIORES ----- */}
      <Collapsible title="Músculos Inferiores">
        <ThemedView style={styles.card}>
          <ThemedText style={styles.cardText}>
            Os músculos inferiores sustentam o corpo, mantêm o equilíbrio e permitem locomoção.  
            {"\n"}Principais grupos:
            {"\n"}- **Quadríceps**: fundamentais para correr, agachar e saltar.  
            {"\n"}- **Glúteos**: estabilizam a pelve e ajudam na extensão dos quadris.  
            {"\n"}- **Isquiotibiais**: auxiliam na flexão dos joelhos.  
            {"\n"}- **Panturrilhas**: controlam o impulso e movimentação dos pés.
          </ThemedText>
        </ThemedView>
      </Collapsible>

      {/* ----- ALIMENTAÇÃO ----- */}
      <Collapsible title="Alimentação e Performance">
        <ThemedView style={styles.card}>
          <ThemedText style={styles.cardText}>
            A alimentação é parte essencial da construção muscular. Uma dieta adequada fornece energia, melhora a recuperação e ajuda na hipertrofia.
            {"\n\n"}⚡ Recomendações:
            {"\n"}- **Proteínas**: essenciais para reconstrução muscular (frango, ovos, peixe).  
            {"\n"}- **Carboidratos complexos**: fornecem energia (arroz integral, batata-doce).  
            {"\n"}- **Gorduras boas**: equilibram hormônios (abacate, azeite, castanhas).  
            {"\n"}- **Hidratação**: beber água regularmente evita fadiga e melhora o desempenho.
          </ThemedText>
        </ThemedView>
      </Collapsible>

      {/* ----- DICAS ----- */}
      <Collapsible title="Dicas Práticas">
        <ThemedView style={styles.card}>
          <ThemedText style={styles.cardText}>
            ✔️ Combine treinos regulares com alimentação equilibrada.  
            {"\n"}✔️ Descanse o suficiente — o músculo cresce durante o repouso.  
            {"\n"}✔️ Mantenha consistência: resultados vêm com o tempo.  
            {"\n"}✔️ Busque acompanhamento profissional para otimizar seus treinos.
          </ThemedText>
        </ThemedView>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImageWrapper: {
    position: 'relative',
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    position: 'absolute',
    opacity: 0.15,
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 28,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
    zIndex: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginVertical: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  cardText: {
    color: '#333',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'justify',
  },
});
