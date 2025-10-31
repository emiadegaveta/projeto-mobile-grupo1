import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function SaudeBemEstar() {
  const handlePress = () => {
    Alert.alert("Dica do Dia 🌞", "Beba bastante água e alongue-se a cada hora!");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🌿 Saúde e Bem-Estar 🌿</Text>
        <Text style={styles.subtitle}>
          Cuide do corpo, da mente e da alma!
        </Text>
      </View>
      <Image
        source={{ uri: 'https://www.onodera.com.br/media/cache/1/1136x410/ac7fca02c77817f9150e17969b74630a/onodera-saude-e-bem-estar.jpg' }}
        style={styles.image}
      />

      {/* Sessões */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>° Alimentação Saudável</Text>
        <Text style={styles.text}>
          Uma alimentação saudável prioriza alimentos in natura ou minimamente processados, como frutas, legumes, verduras, grãos integrais, proteínas magras e gorduras boas, ao mesmo tempo que limita o consumo de açúcar, sal e gorduras ruins. Ter uma alimentação equilibrada é a base para uma vida com mais energia e disposição. E não esqueça, beba bastante água!
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>° Atividade Física</Text>
        <Text style={styles.text}>
          A atividade física é essencial para a saúde e bem-estar, pois fortalece o corpo, previnindo doenças crônicas como diabetes e hipertensão, melhora a saúde mental ao reduzir estresse e ansiedade, aumenta a disposição, a qualidade do sono e ainda contribui para o desenvolvimento cognitivo e a socialização.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>° Saúde Mental</Text>
        <Text style={styles.text}>
          A saúde mental é um componente fundamental do bem-estar, que abrange o equilíbrio emocional, psicológico e social, permitindo lidar com o estresse, desenvolver habilidades e ter uma vida produtiva e comunitária. Ela não é a ausência de problemas, mas sim a capacidade de enfrentá-los com resiliência.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 90,
    backgroundColor: '#A5D6A7',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  subtitle: {
    fontSize: 16,
    color: '#1B5E20',
    marginTop: 5,
  },
  image: {
    width: '90%',
    height: 500,
    borderRadius: 15,
    alignSelf: 'center',
    marginVertical: 20,
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 25,
    backgroundColor: '#C8E6C9',
    padding: 15,
    borderRadius: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 5,
  },
  text: {
    fontSize: 15,
    color: '#2E7D32',
    textAlign: 'justify',
  },
  button: {
    backgroundColor: '#81C784',
    marginHorizontal: 50,
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    textAlign: 'center',
    color: '#388E3C',
    marginBottom: 20,
  },
});
