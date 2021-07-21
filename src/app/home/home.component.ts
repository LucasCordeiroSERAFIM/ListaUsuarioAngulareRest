import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formulario = Array();/**variavel formulario */

  /**itens form */
   id:string;
  nome: string; 
  cargo: string;
  email:string;

usuario:any=[];
  constructor(public service:CadastroService) { }

  ngOnInit() {
    this.listarDados();
  }
  
  listarDados(){
   /**Lista cadastros */
   this.service.getCadastro().subscribe((data: any) => {
     this.usuario = data;
     console.log("Dados",data);
     debugger;
   });
  }

  validaForm(){
    return (this.nome !== '' && this.cargo!=='' && this.email!=='' )
  }

  Salvar(form){
    console.log("Dados Form",form.value)
  }
  editar(id){
    console.log("editar",id);
  }
  excluir(id){
    console.log("excluir",id);
  }

}
