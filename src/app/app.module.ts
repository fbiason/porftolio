import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { WebDeveloperComponent } from './componentes/web-developer/web-developer.component';
import { CommunityManagerComponent } from './componentes/community-manager/community-manager.component';
import { ManagementComponent } from './componentes/management/management.component';
import { AboutMeComponent } from './componentes/about-me/about-me.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, WebDeveloperComponent, CommunityManagerComponent, ManagementComponent, AboutMeComponent, ContactoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
