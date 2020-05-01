import { Component } from '@angular/core';
import { RecetteService } from '../services/recette.service';

import { Recette } from '../model/recette.model';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  recettes: Recette[];

  constructor(public recetteService: RecetteService) { }

  ngOnInit() {
    this.recetteService.loadSaved().then(recettes => this.recettes = recettes);
  }

  editRecipe() {
    console.log("Edit");
  }

  deleteRecipe(recette: Recette) {
    this.recetteService.delete(recette).then(recettes => this.recettes = recettes);
  }

}
