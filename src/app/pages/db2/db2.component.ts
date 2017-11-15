import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-db2',
  templateUrl: './db2.component.html',
  styleUrls: ['./db2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Db2Component implements OnInit {
  code: string;
  items: Observable<any[]>;
  constructor(
    private db: AngularFireDatabase
  ) {
    // this.items = db.object('items').valueChanges();
    this.items = db.list('items').valueChanges();
  }

  ngOnInit() {
  }

  onAdd() {
    // this.db.object('items').set({ //set แบบ object
    //   code: this.code
    // });

    this.db.list('items').push({ // set แบบ data list
      code: this.code
    });
  }

}
