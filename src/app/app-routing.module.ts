import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component';
import { PrivatezoneComponent } from './pages/privatezone/privatezone.component';
import { PubliczoneComponent } from './pages/publiczone/publiczone.component';
import { LoginComponent } from './pages/login/login.component';
import { StudentComponent } from './pages/student/student.component';
import { StudentFormComponent } from './pages/student-form/student-form.component';
import { AdminGuard } from './share/guard/admin.guard';
import { Db1Component } from './pages/db1/db1.component';
import { Db2Component } from './pages/db2/db2.component';

const routes: Routes = [
  // {
  //   path: '', component: HomeComponent /*path ว่างๆ = http://localhost:4200/ */
  // }, {
  //   path: 'home', component: HomeComponent /*http://localhost:4200/home */
  // }, {
  //   path: 'test', component: TestComponent /*http://localhost:4200/test */
  // }, {
  //   path: 'testparam/:id/:code', component: TestComponent /*เป็นการรับ parameter เข้ามา http://localhost:4200/testparam/233/reer */
  // }
  {
    path: '',
    component: PubliczoneComponent,
    children : [
        {
            path: '', component: HomeComponent
        }, {
            path: 'home', component: HomeComponent
        }, {
          path: 'test', component: TestComponent
        }, {
          path: 'testparam/:id/:code', component: TestComponent /*เป็นการรับ parameter เข้ามา http://localhost:4200/testparam/233/reer */
        }, {
          path: 'login', component: LoginComponent
        }, {
          path: 'db1', component: Db1Component
        }, {
          path: 'db2', component: Db2Component
        }
    ]
  }, {
    path: 'admin',
    component: PrivatezoneComponent,
    canActivate: [AdminGuard], /* block ในการเข้าหน้าจอ ถ้า block ตั้งแต่ส่วนแม่ ลุกโดนหมด่ */
    children : [
      {
        path: '', component: StudentComponent
      }, {
        path: 'student', component: StudentComponent
      }, {
        path: 'student-form/:id', component: StudentFormComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
