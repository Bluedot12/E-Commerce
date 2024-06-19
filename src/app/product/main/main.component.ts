import { Component } from '@angular/core';
import { MyServiceService, product } from 'src/app/my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  prod: product[] =[];

  constructor(private dataService:MyServiceService,private router:Router){}

  ngOnInit(){
    this.loadData();
  }

  loadData(){
    this.dataService.getData().subscribe((data)=>{
      this.prod=data;
      console.log(this.prod);
      
    })
  }

  navigateToDetail(){
    this.router.navigate([])
  }

  navigateToCart(){
    this.router.navigate([])
  }
}
