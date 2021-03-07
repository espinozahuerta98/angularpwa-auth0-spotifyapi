import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: [
  ]
})
export class ProtegidaComponent implements OnInit {
  constructor(@Inject(DOCUMENT) public document: Document,public auth: AuthService) {
   }

  ngOnInit(): void {
  }

}
