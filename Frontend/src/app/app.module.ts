import { GetTeamService } from './service/get-team.service';
import { UserRegisterService } from './service/user-register.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import {CreateProposalComponent} from './landing-page/create-proposal/create-proposal.component'
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RegisterComponent } from './register/register.component';
import { from } from 'rxjs';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PasswordSpecsComponent } from './password-specs/password-specs.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiResponseComponent } from './api-response/api-response.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FilterComponent } from './landing-page/filter/filter.component';
import { FeedComponent } from './landing-page/feed/feed.component';
import {PostProposalService} from './post-proposal.service';
import {GetProposalsService} from './get-proposals.service';
import {MatDividerModule} from '@angular/material/divider';
import {ProposalService} from './landing-page/proposal.service';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommentComponent } from './landing-page/feed/comment/comment.component';
import { ShareProposalComponent } from './landing-page/feed/share-proposal/share-proposal.component';
import { TeamComponent } from './team/team.component';
import { ForgetPasswordComponent} from './forget-password/forget-password.component';
import { MatSelectFilterModule } from 'mat-select-filter';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    ErrorComponent,
    RegisterComponent,
    PasswordSpecsComponent,
    ApiResponseComponent,
    LandingPageComponent,
    FilterComponent,
    FeedComponent,
    CreateProposalComponent,
    CommentComponent,
    ShareProposalComponent,
    TeamComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    HttpClientModule,
    InfiniteScrollModule,
    MatDividerModule,
    MatExpansionModule,
    MatSelectModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatSelectFilterModule
  ],
  providers: [
    UserRegisterService,
    GetTeamService,
    ProposalService,
    PostProposalService,
    GetProposalsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
