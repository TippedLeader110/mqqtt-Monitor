import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// MATERIAL
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from './page/template/sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';

// Component
import { ContentComponent } from './page/template/content/content.component';
import { OverviewComponent } from './page/content/overview/overview.component';
import { DoorlogComponent } from './page/content/doorlog/doorlog.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    OverviewComponent,
    DoorlogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
