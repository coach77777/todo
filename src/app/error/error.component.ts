import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  errorMessage = 'An Error Ocurred! Contact Support ***-*** '

  constructor() { }

  ngOnInit() { }

}
