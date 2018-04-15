import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;

  constructor(private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    /* '+' operator is to turn the variable into a number if it's possible*/
    let id = +this.route.snapshot.params['id'];
    this.dish = this.dishService.getDish(id);
  }

  /* Navigate back to the menu*/
  goBack(): void {
    this.location.back();
  }

}
