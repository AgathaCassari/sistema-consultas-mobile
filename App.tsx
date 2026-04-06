import { Especialidade } from "./src/types/especialidade";
import { Paciente } from "./src/types/paciente";
import { Medico } from "./src/interfaces/medico";
import { Consulta } from "./src/interfaces/consulta";import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
export default function App() {
const [consulta, setConsulta] = useState<Consulta>({
  id: 1,
  paciente: {
    id: 1,
    nome: "Carlos Andrade",
    cpf: "123.456.789-00",
    email: "carlos@email.com",
    telefone: "11999999999",
  },
  medico: {
    id: 1,
    nome: "Dr. Roberto Silva",
    crm: "123456",
    especialidade: {
      id: 1,
      nome: "Cardiologia",
      descricao: "Especialista em coração",
    },
    ativo: true,
  },
  data: new Date(),
  status: "agendada",
});
  function confirmarConsulta() {
    setConsulta({
      ...consulta,
      status: "confirmada",
    });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sistema de Consultas</Text>
      <View style={styles.card}>
        <Text>Paciente: {consulta.paciente.nome}</Text>
        <Text>Médico: {consulta.medico.nome}</Text>
        <Text>Especialidade: {consulta.medico.especialidade.nome}</Text>
        <Text>Data: {consulta.data.toLocaleDateString()}</Text>
        <Text>Status: {consulta.status}</Text>
        {consulta.status === "agendada" && (
          <Button title="Confirmar Consulta" onPress={confirmarConsulta} />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    width: "80%",
    padding: 20,
    borderWidth: 1,
    borderRadius: 8,
  },
});