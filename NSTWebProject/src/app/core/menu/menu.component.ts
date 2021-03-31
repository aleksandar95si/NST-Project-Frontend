import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor(private user: UserService, private router: Router ) { }

  ngOnInit() {
    this.items = [
        {
          label: "Početna",
          icon: "pi pi-home",
          routerLink: "/home"
        },
        {
            label: 'Dijetetski suplementi',
            icon: "pi pi-directions",
            command: (event => this.router.navigateByUrl('/products', { skipLocationChange: true }).then(() => {
              this.router.navigate(['products/Dijetetski suplementi']);
          }) )
        },
        {
            label: 'Dermokozmetika',
            icon: 'pi pi-directions',
            command: (event => this.router.navigateByUrl('/products', { skipLocationChange: true }).then(() => {
              this.router.navigate(['products/Dermokozmetika']);
           }) )
        },
        {
          label: 'Bebe i deca',
          icon: "pi pi-directions",
          command: (event => this.router.navigateByUrl('/products', { skipLocationChange: true }).then(() => {
            this.router.navigate(['products/Bebe i deca']);
         }) )
      },
      {
        label: 'Lična higijena',
        icon: "pi pi-directions",
        command: (event => this.router.navigateByUrl('/products', { skipLocationChange: true }).then(() => {
          this.router.navigate(['products/Lična higijena']);
       }) )
    },
    {
  },
  {
  },
  {
  },
  {
  },
  {
  },
  {
  },
  {
  },
  {
  },
  {
  },
  {
      label: `${localStorage.getItem('user')}`,
      icon: "pi pi-user"
  },
    {
      label: 'Logout',
      icon: 'pi pi-sign-out',
      routerLink: "/login",
      command: (event => this.logout())
  }


    ];
}
    logout() {
      localStorage.clear()
    }
}
