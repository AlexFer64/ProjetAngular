import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UneInterventionComponent } from './une-intervention/une-intervention.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ListeInterventionsComponent } from './liste-interventions/liste-interventions.component';
import { AddInterComponent } from './add-inter/add-inter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UneInterventionComponent,
    ListeInterventionsComponent,
    AddInterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
