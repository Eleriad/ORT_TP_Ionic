import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

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
}
