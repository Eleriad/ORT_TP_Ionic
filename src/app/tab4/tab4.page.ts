import { Component, OnInit } from '@angular/core';
// import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  // recettes: any = [];
  recettes: any = [];

  constructor() { }

  ngOnInit() {
    this.recettes = [];
    // this.setFilteredItems();
    // this.recetteService.loadSaved().then(recettes => this.recettes = recettes);
  }

  recipeSearch(recette) {
    console.log(recette);
  }

  selectRecipe(recette: any) {
    console.log(recette);
  }

  // setFilteredItems() {
  // this.recettes = this.recetteService.filterRecipe(this.searchRecipe);
  // }

}
