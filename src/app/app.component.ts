import { Component, OnInit } from '@angular/core';
import { Form } from './form.model';
import { DataService } from './data.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title="Ooredoo"

  forms$: Form[];
  nameInput = new FormControl('');
  idInput = new FormControl('');
  dobInput = new FormControl('');
  contactInput = new FormControl('');
  phoneInput = new FormControl('');
  emailInput = new FormControl('');
  expInput = new FormControl('');
  intrInput = new FormControl('');
  investInput = new FormControl('');
  geoInput = new FormControl('');
  notesInput = new FormControl('');

  constructor(private dataService: DataService){

  }


  ngOnInit(){
    this.dataService.getData()
    .subscribe(data => this.forms$ = data);
  }

  postReq(){
     var post = new Form();
     post.firstName = this.nameInput.value;
     post.userId = this.idInput.value;
     post.dob = this.dobInput.value;
     post.address = this.contactInput.value;
     post.phone  = this.phoneInput.value;
     post.email = this.emailInput.value;
     post.exp = this.expInput.value;
     post.interest = this.intrInput.value;
     post.invest  = this.investInput.value;
     post.location = this.geoInput.value;
     post.notes = this.notesInput.value;
     this.dataService.submitFrom(post)
     .subscribe(data => this.forms$ = data);
  }
}
