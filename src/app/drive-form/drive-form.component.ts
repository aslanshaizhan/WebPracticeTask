import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-drive-form',
  templateUrl: './drive-form.component.html',
  styleUrls: ['./drive-form.component.scss']
})
export class DriveFormComponent implements OnInit {

  @ViewChild('courseForm', null) courseForm: NgForm;

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

    setTimeout(() => {
      this.courseForm.setValue(this.course);
    }; )

  }

onSubmit(); {
    console.log(this.courseForm.value);
  }

function setDefaults() {

}

setDefaults(); {
    this.courseForm.setValue(this.course);
  }

changeCountry(); {
    this.courseForm.controls.course.setValue('1');
  }

patchValue(); {
    const obj = {
      firstname: 'PatchedName',
      lastname: 'PatchedSurname',
      email: 'email.new@gmail.com',
    };

    this.courseForm.control.patchValue(obj);

  }

reset(); {
    this.courseForm.reset();
  }

resetForm(); {
    this.courseForm.resetForm();
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
