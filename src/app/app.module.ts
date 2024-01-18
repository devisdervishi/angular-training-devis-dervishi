import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './body/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ContactFilterPipe } from './contact-filter.pipe';
import { AddContactComponent } from './add-contact/add-contact.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';

const appRoutes: Routes = [
  { path: 'add', component: AddContactComponent },
  { path: '', component: MainComponent },
  {path: 'update/:contactId', component: UpdateContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ContactComponent,
    ContactFilterPipe,
    AddContactComponent,
    MainComponent,
    UpdateContactComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
