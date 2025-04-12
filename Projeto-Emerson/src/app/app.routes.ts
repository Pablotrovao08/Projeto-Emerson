import { Routes } from '@angular/router';
import path from 'node:path';
import { LoginComponent } from './login/login.component';
import { RegistrosComponent } from './registros/registros.component';
import { ResetSenhaComponent } from './reset-senha/reset-senha.component';

export const routes: Routes = [
    {path: "registro", component: RegistrosComponent},
    {path: "resetSenha", component: ResetSenhaComponent},
    {path: "**", component: LoginComponent}
];
