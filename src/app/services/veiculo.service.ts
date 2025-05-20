import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Veiculo} from '../model/Veiculo';

@Injectable({ providedIn: 'root' })
export class VeiculoService {
  private apiUrl = 'http://localhost:8080/api/veiculos';

  constructor(private http: HttpClient) {}

  getVeiculos(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.apiUrl);
  }

  getVeiculosDisponiveis(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(`${this.apiUrl}/disponiveis`);
  }

  salvar(veiculo: Veiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(this.apiUrl, veiculo);
  }

}
