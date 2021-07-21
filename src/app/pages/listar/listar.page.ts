import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receta } from 'src/app/domain/receta';
import { RecetasService } from '../../services/recetas.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  nombre:string;

  constructor(private route: Router,
    private recetaService: RecetasService ) { }

  recetas: any;

  receta: Receta = new Receta();


  ngOnInit() {
    this.recetas = this.recetaService.getRecetas();
    

  }

  busqueda( ){
    console.log(this.nombre);
    this.recetas = this.recetaService.getBusqueda(this.nombre);
  }

}
