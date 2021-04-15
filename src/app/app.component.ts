import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'PracticeForms';

  courseList: course[] = [
    new course('1', 'IELTS'),
    new course('2', 'TOEFL'),
    new course('3', 'General')
  ];

  course: course | undefined;

  ngOnInit() {

    this.course = {
      firstname: 'Name',
      lastname: 'Surname',
      email: 'email@gmail.com',
      courseID: '2'
    };

  }

  onSubmit(courseForm: NgForm) {
    console.log(this.course);
  }

  setDefaults() {
    this.course = {
      firstname: 'Name',
      lastname: 'Surname',
      email: 'email@gmail.com',
      courseID: '2'
    };
  }

  changeCourse() {
    this.course?.courseID = '1';
  }

  reset(courseForm: NgForm) {
    courseForm.resetForm();
  }

}

export class course {
  firstname: string;
  lastname: string;
  email: string;
  courseID: string;
}


export class course {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
