import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service-file/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
public productList : any;
public filterCategory : any;
searchKey:string ="";
  constructor(private api: ProductService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{ 
      this.productList = res;
    this.filterCategory = res;
    })
  }
filter(category:string){
  this.filterCategory = this.productList
  .filter((a:any)=>{
    if(a.category == category || category==''){
      return a;
    }
  })
}
}
