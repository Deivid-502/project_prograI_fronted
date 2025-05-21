import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './products/product-list.component';
import { AuthGuard } from './auth.guard';
import { ProductFormComponent } from './products/product-form.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'inventory',
        component: ProductListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'inventory/new',
        component: ProductFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'inventory/edit/:id',
        component: ProductFormComponent,
        canActivate: [AuthGuard]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
