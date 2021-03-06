import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { WelcomeModule } from './welcome/welcome.module';
import { TransactionsModule } from './transactions/transactions.module';

import { AppComponent } from './app.component';
import { LogoutComponent } from './auth/components';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { NavItemComponent } from './core/components';


@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    NavItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    CoreModule.forRoot(),
    AuthModule.forRoot(),
    TransactionsModule.forRoot(),
    WelcomeModule.forRoot(),

    AppRoutingModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
