import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  @Input() sessionData = {
    logged: false,
    name: "User",
    img: "",
    token: "",
    id: "0"
  };

  @Input() title = "";

  selected: boolean = false;
  openProfileMenu() {
    this.selected = !this.selected;
  }

  redirectDashboard(){
    this.selected = false;
    this.router.navigate(['/dashboard']);
  }

  redirectPerfil(){
    this.selected = false;
    this.router.navigate(['/perfil']);
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.selected = false;
    }
  }

  logout(){
    this.selected = false;
    localStorage.removeItem("token");
    this.sessionData.logged = false;
    this.router.navigate(['/']);
  }

  constructor(private eRef: ElementRef, private router: Router) { }

  ngOnInit(): void {
  }

}
