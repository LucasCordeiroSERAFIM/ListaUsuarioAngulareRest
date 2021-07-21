import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  customerUrl = 'url banco'

  constructor(private http: HttpClient) { }

  

  // Novo
  novoCadastro(customer){
    return this.http.post<any[]>(`${this.customerUrl}`, customer)
  }

  // Lista todos
  getCadastro(){
    return this.http.get<any[]>(`${this.customerUrl}`)
  }

  // Lista um cliente
  getCadastrobyId(id: string){
    return this.http.get<any[]>(`${this.customerUrl + "/" + id}`)
  }

  // Deleta
  delCadastro(id: string){
    return this.http.delete<any[]>(`${this.customerUrl + "/" + id}`)
  }
}
