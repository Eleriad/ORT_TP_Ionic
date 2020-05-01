import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

import { Recette } from '../model/recette.model';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  public recettes: Recette[] = [];
  private ITEM_STORAGE: string = "recettes";

  constructor() { }

  public async addNewRecipeToList(recette: Recette) {
    this.recettes.push(recette);

    Storage.set({
      key: this.ITEM_STORAGE,
      value: JSON.stringify(this.recettes)
    })
  }

  public async loadSaved() {
    const recettes = await Storage.get({ key: this.ITEM_STORAGE });
    this.recettes = JSON.parse(recettes.value) || [];

    return this.recettes;
  }

  public async delete(recette: Recette) {
    this.recettes = this.recettes.filter(h => h !== recette);

    Storage.set({
      key: this.ITEM_STORAGE,
      value: JSON.stringify(this.recettes)
    })

    return this.recettes;
  }

  public async filterRecipe(requete) {
    // console.log(requete);
    return this.recettes.filter(function (el) {
      return el.titre.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
    });
  }

}
