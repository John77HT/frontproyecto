import { Routes } from '@angular/router';
//import {UsersComponent} from './components/users/users.component' ;
import { RegistrosComponent } from './components/registros/registros.component';
import { NuevousuarioComponent } from './components/nuevousuario/nuevousuario.component';
import { NuevaciudadComponent } from './components/nuevaciudad/nuevaciudad.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';




export const routes: Routes = [
    { path: 'registros', component: RegistrosComponent },
    { path: 'nuevousuario', component: NuevousuarioComponent },
    { path: 'nuevaciudad', component: NuevaciudadComponent },
    //{ path: '', redirectTo: '/registros', pathMatch: 'full' },

    { path: 'ciudad', component: CiudadComponent },
    
    //{ path: '', redirectTo: '/ciudad', pathMatch: 'full' },


    


];

