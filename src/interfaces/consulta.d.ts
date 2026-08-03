import { Medico } from "./medico";
import { Paciente } from "../types/paciente";
import { StatusConsulta } from "../types/StatusConsulta";
export interface Consulta {
    id: number;
    medico: Medico;
    paciente: Paciente;
    data: Date;
    valor?: number;
    status: StatusConsulta;
    observacoes?: string;
}
//# sourceMappingURL=consulta.d.ts.map