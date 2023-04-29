import { Component, OnInit } from '@angular/core';
import {
  faLocationDot, faPhone, faEnvelope
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  icon1 = faLocationDot;
  icon2 = faPhone;
  icon3 = faEnvelope;
  // icon4 = faGraduationCap;
  // icon5 = faLayerGroup;
  // icon6 = faCreditCard;
  // icon7 = faSmile;
  // icon8 = faBlog;
  // icon9 = faAddressBook;
  constructor() { }

  ngOnInit(): void {
  }

}
