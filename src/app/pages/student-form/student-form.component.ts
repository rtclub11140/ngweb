import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Student } from '../../share/model/student';
import { StudentService } from '../../share/service/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentFormComponent implements OnInit, AfterViewChecked {

  student = new Student();
  mode = 'ADD';
  _id = '0';

  constructor(
    private studentService: StudentService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {

    this.activateRouter.params.subscribe((param) => {
        if ( param.id !== '0' ) {
          this.mode = 'UPDATE';
          this.studentService.readStudent(param.id).subscribe( (resp) => {
            this.student = resp[0];
          });
        }
    });
   }

  ngOnInit() {
  }

  onSave() {
    this.studentService.add(this.student).subscribe((resp) => {
        Materialize.toast('Save Complete', 4000);
    });
  }

  onUpdate() {
    this.studentService.update(this.student).subscribe((resp) => {
      Materialize.toast('Update Complete', 4000);
    });
  }

  onBack() {
    this.router.navigate(['admin', 'student']);
  }

  ngAfterViewChecked() {
    try {
      Materialize.updateTextFields();
    } catch (e) {}
  }



}
