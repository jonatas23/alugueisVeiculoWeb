import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Menubar} from 'primeng/menubar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menubar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AluguelveiculoWeb';

  items = [
    {
      label: 'Clientes',
      items: [
        { label: 'Listar', routerLink: '/clientes' },
        { label: 'Novo', routerLink: '/clientes/novo' }
      ]
    },
    {
      label: 'Veículos',
      items: [
        { label: 'Listar', routerLink: '/veiculos' },
        { label: 'Novo', routerLink: '/veiculos/novo' }
      ]
    },
    {
      label: 'Aluguéis',
      items: [
        { label: 'Listar Ativos', routerLink: '/alugueis' },
        { label: 'Novo Aluguel', routerLink: '/alugueis/novo' }
      ]
    }
  ];

}
