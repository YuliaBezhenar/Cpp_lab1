import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3-table',
  templateUrl: './tab3-table.component.html',
  template: `
    <ion-item>
        <ion-grid>
          <ion-row *ngFor="let i of a">
            <ion-col *ngFor="let j of i" [style.background-color]="getColor(j)"
              >{{j}}</ion-col
            >
          </ion-row>
        </ion-grid>
      </ion-item>
  `,
  styleUrls: ['./tab3-table.component.scss'],
})
export class Tab3TableComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
