import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { HttpParams } from '@angular/common/http';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  private recettes: string[] = [];
  private ITEM_STORAGE: string = "recettes";

  constructor() { }

  public async addNewRecipeToList(recette) {
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

  public async delete(recette) {
    this.recettes = this.recettes.filter(h => h !== recette);

    Storage.set({
      key: this.ITEM_STORAGE,
      value: JSON.stringify(this.recettes)
    })

    return this.recettes;
  }

  public async filterRecipe(recette) {
    const filter = `{"where":{"titre":{"like":"%${recette}%"}}}`;
    const params = new HttpParams().set('filter', filter);
    // this.recettes.get(this.recette, filter);
  }
}
