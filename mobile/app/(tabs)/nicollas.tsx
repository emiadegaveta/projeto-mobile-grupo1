import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzwBTzlTYbCUn1gWdzAxEEh2jjv8ptH_3OQA&s' }}
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
          Praticar exercícios melhora o humor, fortalece o corpo e ajuda a manter a mente saudável.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>° Saúde Mental</Text>
        <Text style={styles.text}>
          Reserve um tempo para relaxar, meditar e conversar com quem você gosta.
          Cuidar das emoções também é cuidar da saúde!
        </Text>
      </View>

      {/* Botão */}
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Receber Dica do Dia 🌞</Text>
      </TouchableOpacity>
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
    paddingVertical: 20,
    backgroundColor: '#A5D6A7',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
    height: 200,
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
