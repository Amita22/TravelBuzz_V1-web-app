import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../Services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlacesService } from '../Services/places.service';
import {Product} from '../model/productModel'
import { Subscription} from 'rxjs'
import { Router } from "@angular/router";



@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {
  


  // isValidFormSubmitted: boolean = null;
	// userForm = new FormGroup({
	//    //uname: new FormControl('', Validators.required),
	//    //gender: new FormControl('', Validators.required),
	//    //married: new FormControl(false),
  //    Mountains: new FormControl('', Validators.nullValidator),
  //    Beaches: new FormControl('', Validators.nullValidator),
  //    HP: new FormControl('', Validators.nullValidator),
  //    SA: new FormControl('', Validators.nullValidator),
  //    Museum: new FormControl('', Validators.nullValidator),
  //    FA: new FormControl('', Validators.nullValidator)
  // });
  // cb1;
  // cb2;
  // cb3;
  // cb4;
  // cb5;
  // cb6;
  //myForm :FormGroup;
  places; 
  productDisplay: Product[] = [];
  private productSub : Subscription;


  constructor(public placesService:PlacesService,
    private router:Router, public loginService: LoginService) { }

  ngOnInit() {
    this.placesService.getProducts();
    this.productSub = this.placesService.getProductUpdateListener().subscribe((productDetails:Product[]) => {
      console.log("productDetails cards",productDetails);
      this.productDisplay = productDetails
    })

  //   this.myForm = new FormGroup({
  //    title: new FormControl(null,{validators:[Validators.required]
  //     })
  //  });
  }

  // SignUp(Signupform:NgForm){
  //   console.log(Signupform.value);
  //   //this.loginService.userSignUp(Signupform.value);
  // }

  // onFormSubmit(value){
  //   console.log(this.myForm.value.title);
  //   let confirmplacelist = [];
  //   this.places.forEach(id => {
  //     if(id[0]) //checked the item 
  //       confirmplacelist.push(this.myForm.value(x => x.title === id[1]));
  //   });
  //   console.log(confirmplacelist);
  // }

  onClicked(title, event){
    console.log("event  " + this.productDisplay.length);
    console.log("event  checked" + event.target.checked);
    console.log("event " + event.target.value);
    this.loginService.addPreference(event.target.value);
  }
}

