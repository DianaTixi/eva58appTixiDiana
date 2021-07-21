import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetasService } from 'src/app/services/recetas.service';
import { Receta } from '../../domain/receta';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  receta: Receta = new Receta();

  constructor(private route: ActivatedRoute,
    private recetaService: RecetasService) { 

      route.queryParams.subscribe(params=>{
      console.log(params);


      })
    }

    
  ngOnInit() {
  }

  guardar(){
    console.log(this.receta);
    this.recetaService.save(this.receta)

  }

}
