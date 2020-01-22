import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private router: Router) {}

  contactProfile = {
    profile: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/cristiano-borges-0177b0198',
        iconUrl: './assets/icons/linkedin.svg'
      }
    ],
    work: [
      {
        name: 'GitHub',
        url: 'https://github.com/bvieira1',
        iconUrl: './assets/icons/github.svg'
      },
    ]
  };

  email = {
    name: 'Email',
    url: 'cristianovieirati@gmail.com',
    iconUrl: './assets/icons/email.svg'
  };
  ngOnInit() {}

  onBackClick() {
    this.router.navigateByUrl('/');
  }
}
