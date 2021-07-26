import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoCheckboxGroupOption, PoComboOption, PoModalAction, PoModalComponent, PoNotificationService } from '@portinari/portinari-ui';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  @ViewChild('cadastroForm', { static: true }) form: NgForm;//criando o formulario
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent//criando o modal
/**loding */
isHideLoading = true;

 

  /*items do formulario do modal*/
  sobremesa: string = '';
  frutas: Array<string>;
  observacao: string = '';
  id:number = 0;
  nome:string = '';
  cargo:string ='';
   email:string='';
  /**fexar modal */

  close: PoModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Cancelar',
    danger: true
  };

  /**confirmar */

  confirm: PoModalAction = {
    action: () => {
      /**verifica se está válida as informações do modal */
      this.verificaModalConteudo();
    },
    label: 'Confirmar'
  };

usuario:any=[];
  constructor(
    public service:CadastroService,
    private poNotification: PoNotificationService) {
    
     }
    closeModal() {
      this.poModal.close();
    }
  
    Abrirmodal1() {
      this.poModal.open();
    }
   
  ngOnInit() {
    this.listarDados();
  
  }
  
  listarDados(){
    this.isHideLoading = false;
   //Lista cadastros 
   const message='Dados Carregados';
   this.service.getCadastro().subscribe((data: any) => {
     this.usuario = data;
     setTimeout(() => {  this.isHideLoading = true;
      this.poNotification.success(message);
    }, 450);
     console.log("Dados",data);
     
   });
  }
  private verificaModalConteudo() {
    if (this.form.invalid) {
      const orderInvalidMessage = 'Erro.';
      this.poNotification.warning(orderInvalidMessage);
    } else {
      this.confirm.loading = true;

      setTimeout(() => {

        /*service salvar*/
        this.poNotification.success(`usuário ${this.nome}, Cadastrado com sucesso.`);
        this.closeModal();
      }, 700);
    }
  }

  delCadastro(id){
    this.service.delCadastro(id).subscribe((data: any) => {
      this.listarDados();
    });
  }

  editar(){
    this.poModal.open();
  }
}
