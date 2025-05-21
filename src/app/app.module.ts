import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NbThemeModule, NbLayoutModule, NbCardModule, NbInputModule,
    NbButtonModule, NbListModule, NbActionsModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFormComponent } from './products/product-form.component';
import { AuthService } from './auth.service';
import { ApiService } from './api.service';
import { AuthGuard } from './auth.guard';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ProductListComponent,
        ProductFormComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule,
        NbThemeModule.forRoot({ name: 'cosmic' }),
        NbLayoutModule,
        NbEvaIconsModule,
        NbIconModule,
        NbCardModule,
        NbInputModule,
        NbButtonModule,
        NbListModule,
        NbActionsModule,
    ],
    providers: [AuthService, ApiService, AuthGuard],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }