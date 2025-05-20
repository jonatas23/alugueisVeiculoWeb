import {Cliente} from './Cliente';
import {Veiculo} from './Veiculo';

export interface Aluguel {
  id?: number;
  cliente: Cliente;
  veiculo: Veiculo;
  dataInicio: string;
  dataFim: string;
  ativo?: boolean;
}
