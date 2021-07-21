import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Receta } from '../domain/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor(public afs: AngularFirestore) { }

  save (receta: Receta){
    const refRecetas = this.afs.collection("recetas");

    if (receta.id == null) {
      receta.id = this.afs.createId();
      receta.activo == true;
    }

    refRecetas.doc(receta.id).set(Object.assign({}, receta));

  }

  getRecetas(): Observable <any[]>{
    return this.afs.collection("recetas",
    ref => ref.where('nombre','==', 'Lassana')).valueChanges();
    //return this.afs.collection("recetas").valueChanges();
  }

  getBusqueda(nombre: string) : Observable <any[]>{
    return this.afs.collection("recetas",
    ref => ref.where('nombre','==', nombre)).valueChanges();
  }
}

