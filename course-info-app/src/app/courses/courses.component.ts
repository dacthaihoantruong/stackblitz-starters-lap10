import { Course } from '../course';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  course: Course = {
    course_id: 1,
    course_title: 'Web Development',
    semester: 'One',
    period: 'Wednesday 4-6pm6pm',
    lecturer: 'Dr Yian YuYu'
  };
  
}
