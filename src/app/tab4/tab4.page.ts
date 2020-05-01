import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../services/recette.service';

import { Recette } from '../model/recette.model';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  recettes: Recette[] = [];
  search: string = "";

  constructor(public recetteService: RecetteService) { }

  ngOnInit() {
  }

  recipeSearch() {
    // console.log(this.search);
    this.recetteService.filterRecipe(this.search).then(recettes => this.recettes = recettes);
    console.log(this.recettes);
  }

}
