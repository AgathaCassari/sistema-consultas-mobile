import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Consulta } from "../interfaces/consulta";

type ConsultaCardProps = {
  consulta: Consulta;          // Obrigatória
  onConfirmar?: () => void;    // Opcional
  onCancelar?: () => void;     // Opcional
};

export default function ConsultaCard({
  consulta,
  onConfirmar,
  onCancelar,
}: ConsultaCardProps) {

  function formatarValor(valor: number): string {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

// Formata uma string ISO do backend no padrão brasileiro (25/03/2026 às 09:00)
function formatarData(dataHora: string): string {
 const data = new Date(dataHora);
 const dia = data.toLocaleDateString("pt-BR");
 const hora = data.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
 return `${dia} às ${hora}`;
}
// ...
<Text>{formatarData(consulta.dataHora)}</Text>

  return (
    <View style={styles.card}>
      <Text>{consulta.paciente.nome}</Text>
      <Text>{formatarData(consulta.dataHora)}</Text>
      <Text>{formatarValor(consulta.valor)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
  },
});