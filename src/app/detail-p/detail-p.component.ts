import { IProducts } from './../entities/Iproduct';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-p',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './detail-p.component.html',
  styleUrls: ['./detail-p.component.css']
})
export class DetailPComponent {
  product: IProducts | undefined;
  // product: IProducts | undefined; 

  constructor(private route: ActivatedRoute,private http: HttpClient) {};

  // ngOnInit(): void {
  //   this.fetchProducts().then(() => {
  //     const id = +this.route.snapshot.params['id'];
  //     this.product = this.Products.find(p => p.id === id);
  //   });
  // }

  ngOnInit(): void {
      this.Getdetailpr()

  }

  Getdetailpr(){
    const id = this.route.snapshot.params['id'];
    this.http.get<IProducts[]>(`http://localhost:3000/sp/${id}`).subscribe(data=>{
      this.product = data[0]

      
    })
  }

  // fetchProducts(): Promise<void> {
  //   return fetch("http://localhost:3000/spnew")
  //     .then(res => res.json())
  //     .then(data => {
  //       this.Products = data as IProducts[];
  //     });
  // }




}