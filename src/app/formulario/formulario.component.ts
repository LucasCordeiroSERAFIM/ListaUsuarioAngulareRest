import { Component, OnInit } from '@angular/core';
import { PoCheckboxGroupOption, PoMultiselectOption, PoRadioGroupOption, PoSelectOption } from '@portinari/portinari-ui';
import { FormularioService } from '../services/formulario.service';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario = Array();/**variavel formulario */

  /**itens form */
   id:string;
  nome: string; 
  data: string;
  switch: string;
  selecao: string;
  fone: number;
  email: string;
  link: string;
  password: string;
  upload: string;
  radiob: number;
  Bcheckbox: Array<string>;
  _multiselect: Array<string>;
  _textarea: string;

  // Itens do select te linguagem favorita
  public readonly selectOptions: Array<PoSelectOption> = [
    { value: 'Java', label: 'Java' },
    { value: 'C', label: 'C' },
    { value: 'C++', label: 'C++' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Angular', label: 'Angular' },
  ];

   // Itens do radio buttons
   public readonly radioOptions: Array<PoRadioGroupOption> = [
    { label: 'Opção 1', value: 1 },
    { label: 'Opção 2', value: 2 },
    { label: 'Opção 3', value: 3 }
  ];

  // Itens do checkbox
  public readonly checkboxOptions: Array<PoCheckboxGroupOption> = [
    { value: '1', label: 'Opção 1' },
    { value: '2', label: 'Opção 2' },
    { value: '3', label: 'Opção 3' }
  ];

  // Item do multiselect
  public multiselectOptions: Array<PoMultiselectOption> = [
    { value: '1', label: 'vermelho' },
    { value: '2', label: 'azul' },
    { value: '3', label: 'amarelo' },
    { value: '4', label: 'verde' },
    { value: '5', label: 'laranja' },
  ];
  constructor(private service: FormularioService) { }

  ngOnInit() {
  }
  listarDados(){
    this.service.getCadastro()
    .subscribe(data => this.formulario = data);
  }

  listarDadosById(){
    this.service.getCadastrobyId(this.id)
    .subscribe(data => this.formulario = data)
  }
  validaForm(){
    return (this.nome !== '' && this.data!=='' && this.email!=='' )
  }
  
  onClickSubmit(form){
    this.service.novoCadastro({"id": this.id, "nome": this.nome,"data":this.data,"switch":this.switch,
  "selecao":this.selecao,"fone":this.fone,"email":this.email,"link":this.link,"password":this.password,"upload":this.upload,
"radiob":this.radiob,"Bcheckbox":this.Bcheckbox,"_multiselect":this._multiselect,"_textarea":this._textarea})
    .subscribe( () => {
      console.log("dados",form)
      this.listarDados() // Lista todos ao fim da inclusao
      this.limpar(form);
  } );
  }

  limpar(cadastroForm){
    cadastroForm.reset()
        this.id = this.nome = ''
  }
  
   // Deleta
   delCustomer(){
    this.service.delCadastro(this.id)
      .subscribe(data => this.formulario = data)
  }
}
