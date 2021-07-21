import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // [*AppBar]
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms'; // [*Form] Necessario para utilizar os Forms HTML

// [*Rest: A importacao do servico nao eh automatica]

import { HttpClientModule } from '@angular/common/http';

//  Componentes da aplicacao
import { HomeComponent } from './home/home.component';

// [*Portinari]
import { PoModule } from '@portinari/portinari-ui';

//[*Router]
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { CadastroService } from './services/cadastro.service';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    PoModule, // [*Portinari UI]
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(APP_ROUTES) // [*Router]
  ],
  providers: [CadastroService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
