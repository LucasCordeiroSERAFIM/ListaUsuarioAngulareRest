import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

usuario:any=[];
  constructor() { }

  ngOnInit() {
    this.listarDados();
  }
  
  listarDados(){
    this.usuario =[
      {id:0,nome:'Lucas',cargo:'Analista de Sistemas',email:'lucas.cordeiro@totvs.br'},
      {id:1,nome:'Joabe',cargo:'Engenjeiro',email:'joabe.queiroz@totvs.br'},
      {id:2,nome:'Rafael',cargo:'Gerente',email:'rafaelmoreno@bol.br'}
    ]
  }

  novo(id){
    console.log("novo",id);
  }
  editar(id){
    console.log("editar",id);
  }
  excluir(id){
    console.log("excluir",id);
  }

}
