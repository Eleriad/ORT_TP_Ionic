import { Component } from '@angular/core';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  recettes = [];

  constructor(public recetteService: RecetteService) { }

  ngOnInit() {
    this.recetteService.loadSaved().then(recettes => this.recettes = recettes);
  }

  editRecipe(recette) {
    console.log("Edit");
  }

  deleteRecipe(recette) {
    this.recetteService.delete(recette).then(recettes => this.recettes = recettes);
  }

}

