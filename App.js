import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* FOTO */}
      <View style={styles.fotoContainer}>
        <Image source={require('./assets/Foto.jpg')} style={styles.foto} />
      </View>

      {/* NOME */}
      <Text style={styles.nome}>Virgínia Fernandes dos Santos</Text>

      {/* SUBTÍTULO / OBJETIVO */}
      <Text style={styles.subtitulo}>
        Estudante de ADS 
        Buscando oportunidade na área de Dados.
      </Text>

      {/* CONTATO */}
      <View style={styles.card}>
        <View style={styles.titleRow}>
          <MaterialIcons name="phone-android" size={22} color="#3b6bd4ff" />
          <Text style={styles.tituloSecao}>Contato</Text>
        </View>

        <Text style={styles.texto}>📞 (81) 99864-8847</Text>

      <TouchableOpacity onPress={() => Linking.openURL('mailto:virginiaxfernandes@gmail.com')}>
  <Text style={styles.link}>📧 virginiaxfernandes@gmail.com</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => Linking.openURL('https://br.linkedin.com/in/virgínia-fernandes-59083526b')}>
  <Text style={styles.link}>🔗 LinkedIn — virginia-fernandes</Text>
</TouchableOpacity>

      </View>

      {/* EXPERIÊNCIA */}
      <View style={styles.card}>
        <View style={styles.titleRow}>
          <FontAwesome5 name="briefcase" size={20} color="#3b6bd4ff" />
          <Text style={styles.tituloSecao}>Experiência Profissional</Text>
        </View>
        <Text>• Aux. Administrativa — Fortefibra Telecom (2021-atual)</Text>
        <Text>• Aprendiz Administrativo — Comercial Vita Norte Ltda (2020 - 2021)</Text>
      </View>

      {/* FORMAÇÃO */}
      <View style={styles.card}>
        <View style={styles.titleRow}>
          <Ionicons name="star" size={22} color="#3b6bd4ff" />
          <Text style={styles.tituloSecao}>Formação Acadêmica</Text>
        </View>
        <Text>Análise e Desenvolvimento de Sistemas — Senac PE</Text>
        <Text>2024 — 2026 (Previsão)</Text>
      </View>

      {/* PROJETOS */}
      <View style={styles.card}>
        <View style={styles.titleRow}>
          <FontAwesome5 name="star" size={20} color="#3b6bd4ff" />
          <Text style={styles.tituloSecao}>Projetos Acadêmicos</Text>
        </View>
        <Text>• Luma — Sistema de Pontos (2025)</Text>
        <Text>• Projeto Lobo — Em andamento</Text>
      </View>

      {/* HABILIDADES */}
      <View style={styles.card}>
        <View style={styles.titleRow}>
          <MaterialIcons name="bolt" size={22} color="#3b6bd4ff" />
          <Text style={styles.tituloSecao}>Habilidades</Text>
        </View>
        <Text> Python • MYSQL </Text>
        <Text> Trabalho em equipe</Text>
        <Text> Resolução de problemas</Text>
      </View>

      {/* CURSOS */}
      <View style={styles.card}>
        <View style={styles.titleRow}>
          <FontAwesome5 name="eject" size={20} color="#3b6bd4ff" />
          <Text style={styles.tituloSecao}>Cursos e Certificações</Text>
        </View>
        <Text>• Inglês para Devs — Rocketseat (Atual)</Text>
        <Text>• Metodologias ágeis (2025)</Text>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#b2daedff', 
  },
  fotoContainer: {
    borderWidth: 4,
    borderColor: '#3b6bd4ff', 
    borderRadius: 100,
    padding: 4,
    marginTop: 20,
    marginBottom: 12,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3b6bd4ff',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 14,
    color: '#3b6bd4ff',
    textAlign: 'center',
    marginBottom: 18,
  },
  card: {
    width: '95%',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 14,
    marginBottom: 18,
    elevation: 6,
    borderLeftWidth: 4,
    borderLeftColor: '#3b6bd4ff',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  tituloSecao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3b6bd4ff',
  },
  link: {
    color: '#31a5d6ff',
    textDecorationLine: 'underline',
    marginBottom: 6,
  },
  texto: {
    marginBottom: 6,
    color: '#3b6bd4ff',
  }
});