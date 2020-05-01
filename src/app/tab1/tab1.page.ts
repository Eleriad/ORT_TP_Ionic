import { Component } from '@angular/core';
import { RecetteService } from '../services/recette.service';

import { Recette } from '../model/recette.model';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  recettes: Recette[];

  constructor(public recetteService: RecetteService) { }

  ngOnInit() {
    this.recetteService.loadSaved().then(recettes => this.recettes = recettes);
  }

}
