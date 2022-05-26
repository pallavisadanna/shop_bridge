import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

@Input()  searchValue:any
@Output() emitValue = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }
sendData()
{
  this.emitValue.emit(this.searchValue);
}
}
