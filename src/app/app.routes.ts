import {Routes} from '@angular/router';
import {VeiculosListaComponent} from './components/veiculos-lista/veiculos-lista.component';
import {ClientesListaComponent} from './components/clientes-lista/clientes-lista.component';
import {ClienteFormComponent} from './components/cliente-form/cliente-form.component';
import {VeiculoFormComponent} from './components/veiculo-form/veiculo-form.component';
import {AluguelFormComponent} from './components/aluguel-form/aluguel-form.component';
import {AlugueisListaComponent} from './components/alugueis-lista/alugueis-lista.component';

export const routes: Routes = [
  { path: 'clientes', component: ClientesListaComponent },
  { path: 'clientes/novo', component: ClienteFormComponent },

  { path: 'veiculos', component: VeiculosListaComponent },
  { path: 'veiculos/novo', component: VeiculoFormComponent },

  { path: 'alugueis', component: AlugueisListaComponent },
  { path: 'alugueis/novo', component: AluguelFormComponent },

  { path: '', redirectTo: 'clientes', pathMatch: 'full' }, // rota padrão
  { path: '**', redirectTo: 'clientes' } // fallback
];
