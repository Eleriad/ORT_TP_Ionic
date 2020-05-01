import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecetteService } from '../services/recette.service';

import { Recette } from '../model/recette.model';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  recette: Recette = {
    titre: "",
    texte: "",
  };

  constructor(
    public recetteService: RecetteService,
    private router: Router
  ) { }

  RecipeForm() {
    this.recetteService.addNewRecipeToList(this.recette);
    this.recette = { titre: null, texte: null };
    this.router.navigate(['/']);
  }

}
