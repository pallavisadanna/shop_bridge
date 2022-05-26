import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:any;
  password:any;

  constructor(private service:MovieService,private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('login') && sessionStorage.getItem('login') == 'true')
{
  this.router.navigate(['/home'])
}
  }
submit(){
  console.log(this.username,this.password)
  if(!this.username)
  {
alert('Username cannot be empty')
  }
  else if(!this.password)
  {
    alert('Password cannot be empty')
  }
  else if(this.username && this.password)
  {
    let res = this.service.validateCredentials(this.username,this.password);
    if(res == true)
    {
      alert('Login successful')
      this.router.navigate(['/home']);
    }
    else{
alert('Invalid credentials');
    }
  }
}
}
