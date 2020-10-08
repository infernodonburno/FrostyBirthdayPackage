import { Component, OnInit, Input } from '@angular/core';
import { FrostyBirthdayPackage } from 'src/app/model/FrostyBirthdayPackage';

@Component({
  selector: 'app-frosty-birthday-person',
  templateUrl: './frosty-birthday-person.component.html',
  styleUrls: ['./frosty-birthday-person.component.css']
})
export class FrostyBirthdayPersonComponent implements OnInit {

  @Input() frostyPerson: FrostyBirthdayPackage;

  constructor() { }

  ngOnInit(): void {
  }

}
