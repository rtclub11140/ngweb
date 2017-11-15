import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
// import * as dateformat from 'dateformat';
import {Router, ActivatedRoute} from '@angular/router';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TestComponent implements OnInit {
  /* property นี้สามารถรับค่ามาจากด้านนอกได้ */
  /*@Input()*/
  /*title = 'this is a title';*/
  xTitle = 'this is a new title';
  @Output() titleChange = new EventEmitter();

  @Input()
  get title(){
    return this.xTitle;
  }

  set title(value){
    this.xTitle = value;
    this.titleChange.emit(this.xTitle);
  }


  showItem = false;
  items = [1, 2 , 3 , 4];
  conditionExpression = 'A';
  case1Exp = 'A';
  price = 12300.5;
  currentDate = new Date();

  constructor( /*การทำ injection ถ้าไม่ใส่ private จะต้องเขียนภายใน {} ถ้ามีสามารถเขียนเป็น function ได้*/
    private rouer: Router,
    private activeRouter: ActivatedRoute /*ตัวสีฟ้าคือ ตัวแปร */
  ) {
    activeRouter.params.subscribe((param) => {
        console.log(param);
    });
   }

  ngOnInit() {
    // dateformat(new Date(), 'dd/mm/yyyy');
    // console.log(dateformat(new Date(), 'dd/mm/yyyy'));
  }

  greeting() {
    // this.title = 'Greet from button';

    /*show / hide text */
    this.showItem = !this.showItem;

    /*add container*/
    this.items.push(this.items.length);
  }

  gotoHome() {
    this.rouer.navigate(['home']);
  }

}
