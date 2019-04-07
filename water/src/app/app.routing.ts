import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { RegisterComponent } from './register/register.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PendingRequestsComponent } from './pending-requests/pending-requests.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import { BuyCoinComponent } from './buy-coin/buy-coin.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { LastStepComponent } from './last-step/last-step.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'how-it-works', component: DemoComponent},
    { path: 'register', component:RegisterComponent},
    { path: 'home', component:UserDashComponent},
    { path: 'editprofile', component:EditProfileComponent},
    { path: 'changepassword', component: ChangePasswordComponent},
    { path:'requests', component: PendingRequestsComponent},
    { path:'transactions' , component:ViewTransactionsComponent},
    {path:'buy',component:BuyCoinComponent},
    {path:'suggestions', component:SuggestionsComponent},
    {path:'washing',component:LastStepComponent},
    {path:'pick',component:ComingSoonComponent},
    {path:'map', component:MapComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);