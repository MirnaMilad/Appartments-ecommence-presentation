import { Routes } from '@angular/router';
import { PropertyListComponent } from './property/property-list/property-list.component';

export const routes: Routes = [
    {path: '', redirectTo: 'properties', pathMatch: 'full'},
    {path: "rent-property", loadComponent: () => import('./property/property-list/property-list.component').then(m => m.PropertyListComponent)},
    {path: "", loadComponent: () => import('./property/property-list/property-list.component').then(m => m.PropertyListComponent)},
    {path: "add-property", loadComponent: () => import('./property/add-property/add-property.component').then(m => m.AddPropertyComponent)},
    {path: "property-details/:id", loadComponent: () => import('./property/property-details/property-details.component').then(m => m.PropertyDetailsComponent)},
    {path: "user/login", loadComponent: () => import('./user/user-login/user-login.component').then(m => m.UserLoginComponent)},
    {path: "user/register", loadComponent: () => import('./user/user-register/user-register.component').then(m => m.UserRegisterComponent)},
    {path: "**", redirectTo: 'properties', pathMatch: 'full'},
];

