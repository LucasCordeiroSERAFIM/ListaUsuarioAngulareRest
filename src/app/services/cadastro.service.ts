import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  url = 'https://localhost:44339/api/Usuarios'
  constructor(private http: HttpClient) { }

  // Lista todos
  getCadastro(){
    return this.http.get(`${this.url}`)
  }
  postCadastro(cadastro){
    debugger;
      return this.http.post<any[]>(`${this.url}`, cadastro)
    }

    // Lista cadastro por id
   getCadastroById(id: number){
    return this.http.get<any[]>(`${this.url + "/" + id}`)
  }

  //deletar
  delCadastro(id: number){
    return this.http.delete<any[]>(`${this.url + "/" + id}`)
  }
  }

