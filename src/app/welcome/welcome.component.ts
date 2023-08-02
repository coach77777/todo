import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})

//public class SpringBootFirstWebApp
export class WelcomeComponent implements OnInit {
  message = 'Some Message'
  //  welcomeMessageFromService: string --failed to compile
  welcomeMessageFromService: any
  name = ' ';

  //ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {

  }


  ngOnInit() {
    // console.log(this.message);
    // console.log (this.route.snapshot.params['name'])

    this.name = this.route.snapshot.params['name'];
  }
  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
      //response =>  this.handleSuccessfulResponse(response)
      (response) => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
      )
    console.log('last line of getWelcomeMessage');

    //console.log('get welcome');
  }


  getHelloWorldBeanServiceWithParameter() {
    //console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      //response =>  this.handleSuccessfulResponse(response)
      (response) => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
      )


    console.log('last line of getWelcomeMessage');

    //console.log('get welcome');
  }


  handleSuccessfulResponse(response:any) {
    this.welcomeMessageFromService = response.message;
    //console.log(response);
    //console.log(response.message);
  }


    handleErrorResponse(error: any) {
      //console.log(error);
      //console.log(error.error);
      //console.log(error.error.message);
      this.welcomeMessageFromService = error.error.message
    }
}
