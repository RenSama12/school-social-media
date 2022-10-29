import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigateByUrl(path);
  }

  ngOnInit() {
  }
  
  toggleTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark')
    } else {
      document.body.setAttribute('color-theme','light')
    }
  }

}
