import { Component, OnInit } from '@angular/core';
import {FormLogin} from 'src/app/modeles/formLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulaire = new FormLogin("","");

  constructor() { }

  ngOnInit(): void {
  }

}
