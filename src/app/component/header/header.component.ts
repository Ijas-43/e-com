import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public searchItem : string ='';
  constructor() { }

  ngOnInit(): void {
  }
search(event:any){
  this.searchItem = (event.target as HTMLInputElement).value;
  console.log(this.searchItem);
}
}
