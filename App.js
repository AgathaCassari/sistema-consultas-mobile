"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
const jsx_runtime_1 = require("react/jsx-runtime");
const especialidade_1 = require("./src/types/especialidade");
const paciente_1 = require("./src/types/paciente");
const medico_1 = require("./src/interfaces/medico");
const consulta_1 = require("./src/interfaces/consulta");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
function App() {
    const [consulta, setConsulta] = (0, react_1.useState)({
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
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: styles.container, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.titulo, children: "Sistema de Consultas" }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: styles.card, children: [(0, jsx_runtime_1.jsxs)(react_native_1.Text, { children: ["Paciente: ", consulta.paciente.nome] }), (0, jsx_runtime_1.jsxs)(react_native_1.Text, { children: ["M\u00E9dico: ", consulta.medico.nome] }), (0, jsx_runtime_1.jsxs)(react_native_1.Text, { children: ["Especialidade: ", consulta.medico.especialidade.nome] }), (0, jsx_runtime_1.jsxs)(react_native_1.Text, { children: ["Data: ", consulta.data.toLocaleDateString()] }), (0, jsx_runtime_1.jsxs)(react_native_1.Text, { children: ["Status: ", consulta.status] }), consulta.status === "agendada" && ((0, jsx_runtime_1.jsx)(react_native_1.Button, { title: "Confirmar Consulta", onPress: confirmarConsulta }))] })] }));
}
const styles = react_native_1.StyleSheet.create({
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
//# sourceMappingURL=App.js.map