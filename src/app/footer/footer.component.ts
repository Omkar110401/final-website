import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  currentTime!:Date
  year=new Date().getFullYear();
  ngOnInit(): void {
      this.currentTime=new Date();
      interval(1000).subscribe(()=>{
        this.currentTime=new Date();
      });
  }
}
