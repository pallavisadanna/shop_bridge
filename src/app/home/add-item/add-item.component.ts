import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  itemForm :any;
  EditData:any;


  constructor(private service:MovieService,private router:Router) { 
    if(localStorage.getItem('data'))
    {
      this.EditData =  JSON.parse(localStorage.getItem('data') || '{}')
      this.itemForm = new FormGroup({
        title: new FormControl(this.EditData.title, Validators.required),
        photo: new FormControl(this.EditData.photo, Validators.required),
        votes: new FormControl(this.EditData.votes, Validators.required),
        popularity: new FormControl(this.EditData.popularity, Validators.required),
        ratings: new FormControl(this.EditData.ratings, [Validators.required,Validators.min(0),Validators.max(5)]),
        date: new FormControl(this.EditData.date, Validators.required),
        price: new FormControl( this.EditData.price,Validators.required),
        id: new FormControl(this.EditData.id)
      });

    }
    else{
      this.itemForm = new FormGroup({
        title: new FormControl('', Validators.required),
        photo: new FormControl('', Validators.required),
        votes: new FormControl('', Validators.required),
        popularity: new FormControl('', Validators.required),
        ratings: new FormControl('', [Validators.required,Validators.min(0),Validators.max(5)]),
        date: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        id: new FormControl(0)
      });
    }
  }

  ngOnInit(): void {
  }
  submit() {
    this.itemForm.patchValue({'title':this.capitalizeFirstLetter(this.itemForm.get('title')?.value)});
    console.log(this.itemForm.value,this.itemForm.valid)
    if(this.EditData)
    {
      this.editItem();
      return;
    }
    this.service.postMovie(this.itemForm.value).subscribe(res=>{
      alert('Movie added successfully');
      localStorage.clear();
      this.router.navigate(['/home']);
    },err=>{
      alert('Couldnt add movie');
    })
    
  }
   capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
editItem()
{
  this.service.updateMovie(this.itemForm.value).subscribe(res=>{
alert('Movie update successfully');
localStorage.clear();
this.router.navigate(['/home']);
  },
  err=>{
alert('Couldnt add movie');
  })
}
}
