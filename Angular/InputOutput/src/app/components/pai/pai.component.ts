import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {
  @Output() informacao = "nome: Felipe";
 
  constructor() { }

  ngOnInit(): void {
  }

}