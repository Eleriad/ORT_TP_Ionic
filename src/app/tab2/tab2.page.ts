import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  recette = {};

  constructor(
    public recetteService: RecetteService,
    private router: Router
  ) { }

  RecipeForm() {
    this.recetteService.addNewRecipeToList(this.recette);
    this.recette = {};
    this.router.navigate(['/']);
  }

}
