import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homedb',
  templateUrl: './homedb.component.html',
  styleUrls: ['./homedb.component.css']
})
export class HomedbComponent implements OnInit {
  
  camiseta : String = 'Camiseta Negra';

  constructor() { }

  ngOnInit(): void {
  }

}
