import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movies:any;

  constructor(private service:MovieService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.movies)
  }
deleteMovie(id:number){
this.service.deleteMovie(id).subscribe(res=>{
alert('Movie deleted successfully')
window.location.reload();
},err=>{
alert('Couldnt delete movie')
})
}
editMovie(data:any)
{
localStorage.setItem('data',JSON.stringify(data));
this.router.navigate(['/home/edit/']);
}}
