import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BoardComponent } from './components/board/board.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    BoardComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
