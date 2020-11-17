
import { TransferDataService } from './../service/transfer-data.service';
import { SocialMediaAuthService } from './../service/social-media-auth.service';
import { ForgetPasswordComponent } from './../forget-password/forget-password.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, FormGroupDirective, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDialog} from '@angular/material/dialog';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialogRef} from '@angular/material/dialog';
import { UserLoginService } from '../service/user-login.service';
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";


export interface DialogData {
  email: string;
  
}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  check:boolean=false
  email:string;
  loginForm: FormGroup;
  invalidLogin = false
  loginSuccess=false;
  successMessage: string;
  errorMessage = "Invalid Credentials"
  userData;
  socialData;
  uData
  private user: SocialUser;
  private loggedIn: boolean;
  public res

  constructor(private router: Router,
    private transferDataService:TransferDataService,
   private socialMediaAuth:SocialMediaAuthService,
    public dialog: MatDialog,
    public loginService:UserLoginService,
    private authService: SocialAuthService,
) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
  matcher = new MyErrorStateMatcher()
  ngOnInit(): void {
    
  }
  /**
 * You are notified when user logs in or logs out. You receive a SocialUser object when the user logs in and a null when the user logs out. SocialUser object contains basic user information such as name, email, photo URL, etc. along with the auth_token. You can communicate the auth_token to your server to authenticate the user in server and make API calls from server.
 */
  googleSignIn(){
      this.authService.authState.subscribe((user) => {
        if(user!=null)
        {this.user = user;
        this.loggedIn = (user != null);
        this.socialMedia()
        }});
        if(!this.loggedIn){
          this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)}
  }


  /**
 * This methods calls the Social Media Authentication service to log the user into a session to acces the Proposal Improvement System Application. The credentials are checked in the Database to either Sign Up or Sign In the user.
 */
  socialMedia(){
    this.socialData={"name":this.user["name"],"email":this.user["email"]}
      console.log("after2____",this.user)
    this.socialMediaAuth.socialMedia(this.socialData).subscribe(
      (data1:any) => {
        this.res=data1
      console.log("Response----",this.res);
     this.invalidLogin = false;
          this.loginSuccess = true;
          console.log("data", data1)
          this.successMessage = 'Login Successful.';
          this.router.navigate(['/welcome']);
    }
    ,
    (error)=>{
      console.log("error------",error['error']);
      this.transferDataService.emitData(error['error'])
      this.router.navigate(['/team']);
    }
  );
  }
    /**
 * This method calls the Log In Service which checks the Submitted credentials to the database to Sign the user into the Application.
 */
  handleLogin() {
    if(this.loginForm.valid) {

      this.loginForm.get('email').value;
         this.loginService.doLogin(this.loginForm.get('email').value,this.loginForm.get('password').value).subscribe((result)=> {
          this.userData=sessionStorage.getItem('authenticatedUser')
          console.log("results",this.userData, this.userData)
          this.invalidLogin = false;
          this.loginSuccess = true;
          console.log("data", result)
          this.successMessage = 'Login Successful.';
          this.router.navigate(['/welcome']);
        }, (error) => {
          console.log(error)
          this.invalidLogin = true;
          this.loginSuccess = false;
        });

    }
  }
/**
 * This method opens the Reset Password component as Dialog Box allowing the user to Reset their Password.
 */
  openDialog(): void{
    const dialogRef = this.dialog.open(ForgetPasswordComponent, {
      width: '500px',
     
    });
  }
}
