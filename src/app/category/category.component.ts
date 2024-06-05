import { CommonModule } from '@angular/common';
import { ICate } from './../entities/ICate';
import { Component  } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, HttpClientModule , RouterModule, RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
Cate:ICate[] = []
  

  constructor(private http: HttpClient){}

  ngOnInit(): void {
  this.GetCate()
}


GetCate(){
this.http.get<ICate[]>("http://localhost:3000/cate").subscribe(
  data =>{
    this.Cate = data
  }
)
}


}
