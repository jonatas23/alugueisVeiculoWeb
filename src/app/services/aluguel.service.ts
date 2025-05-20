import {Injectable} from '@angular/core';
import {Aluguel} from '../model/Aluguel';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AluguelService {
  private apiUrl = 'http://localhost:8080/api/alugueis';

  constructor(private http: HttpClient) {
  }

  alugar(dto: Aluguel): Observable<any> {
    return this.http.post(`${this.apiUrl}`, dto);
  }

  listarAtivos(): Observable<Aluguel[]> {
    return this.http.get<Aluguel[]>(`${this.apiUrl}/ativos`);
  }

  devolver(id?: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/devolver`, {});
  }

  listar(ativo?: boolean | null): Observable<Aluguel[]> {
    const params = ativo !== null && ativo !== undefined ? `?ativo=${ativo}` : '';
    return this.http.get<Aluguel[]>(`${this.apiUrl}${params}`);
  }

}
