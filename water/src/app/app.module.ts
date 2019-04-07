import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { FooterComponent } from './footer/footer.component';
import { DemoComponent } from './demo/demo.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDashComponent } from './user-dash/user-dash.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LookoutComponent } from './lookout/lookout.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ViewMatchesComponent } from './view-matches/view-matches.component';
import { PendingRequestsComponent } from './pending-requests/pending-requests.component';
import { WashingComponent } from './washing/washing.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import {DataTableModule} from "angular-6-datatable";
import { DropComponent } from './drop/drop.component';
import { BuyCoinComponent } from './buy-coin/buy-coin.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { LastStepComponent } from './last-step/last-step.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { MapComponent } from './map/map.component';
import { HereMapsModule } from 'ng2-heremaps';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNavComponent,
    FooterComponent,
    DemoComponent,
    RegisterComponent,
    LoginComponent,
    UserDashComponent,
    UserNavComponent,
    EditProfileComponent,
    LookoutComponent,
    ChangePasswordComponent,
    ViewMatchesComponent,
    PendingRequestsComponent,
    WashingComponent,
    ViewTransactionsComponent,
    DropComponent,
    BuyCoinComponent,
    SuggestionsComponent,
    LastStepComponent,
    ComingSoonComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    HttpClientModule,
    DataTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
