import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SistemiGestioniAngular';
  dtOptions: DataTables.Settings = {};
  posts;
  
  constructor(private http: HttpClient) { }
  
  // ngOnInit(): void {
  //   this.dtOptions = {
  //     pagingType: 'full_numbers',
  //     pageLength: 5,
  //     processing: true
  //   };
  
  //   this.http.get('http://jsonplaceholder.typicode.com/posts')
  //     .subscribe(posts => {
  //       this.posts = posts;
  //   });
  
  // }
}
