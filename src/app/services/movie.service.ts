import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = "https://shopping-cart-jsonserver-five.herokuapp.com/movies";

  constructor(private http:HttpClient) { }

  validateCredentials(username:string,password:string):Boolean
  {
    if(username == 'Admin' && password == 'Admin@123')
    {
      sessionStorage.setItem('login','true');
      return true;
    }
    return false;
  }
  getMoviesfromAsset():Observable<any>
  {
    return this.http.get(this.url,
    {headers:new HttpHeaders({'Access-Control-Allow-Origin':'*'})
  })
    ;
  }
  postMovie(data:any)
  {
return this.http.post(this.url,data);
  }
  deleteMovie(id:number)
  {
    return this.http.delete(this.url + '/' + id);
  }
  updateMovie(data:any)
  {
    return this.http.put(this.url + '/' + data.id,data);
  }
}
