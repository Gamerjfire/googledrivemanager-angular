import { Routes } from '@angular/router';
import { GoogleSignInComponent } from './google-sign-in/google-sign-in.component';
import { GoogleDriveDocumentComponent } from './google-drive-document/google-drive-document.component';

export const routes: Routes = [
    {path:'', redirectTo: '/login', pathMatch:'full'},
    {path:'login', component:GoogleSignInComponent},
    {path:'manager', component:GoogleDriveDocumentComponent},
];
