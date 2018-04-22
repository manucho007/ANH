import { Component, OnInit } from '@angular/core';
import { FirestoreService} from '../../core/firestore.service';
import { InspeccionInicial } from '../../interfaces/inspeccion-inicial';
@Component({
  selector: 'app-inspeccion-inicial',
  templateUrl: './inspeccion-inicial.component.html',
  styleUrls: ['./inspeccion-inicial.component.css']
})
export class InspeccionInicialComponent implements OnInit {
inspeccion:InspeccionInicial={
  codigo:"",
  razonSocial:"",
  representanteLegal:"",
  tipoDeEstacion:"",
  direccion:"",
  municipio:"",
  telefonoNum:"",
  departamento:"",
  fechaInspeccion:"",
  inclinacion:"",
  ubicacion:"",
  ubicacionLote:"",
  areaTerreno:"",
  colindancias:"",
  distanciaCentrosAglo:"",
  calzada:"",
  flujoVehicular:"",
  distanciaEstacionProx:"",
  electricidad:true,
  aguaPotable:true,
  telefono:true,
  alcantarillado:true,
  observaciones:"",
  nombreRepresentante:"",
  ci:"",
  nombreInspector:""
};
  constructor(private db:FirestoreService) { }

  ngOnInit() {
  }
  saveInspeccion(){
    this.inspeccion.ubicacion;
    this.inspeccion.ubicacionLote;
    console.log(this.inspeccion);
    this.db.add('iniciales',this.inspeccion);
  }
}
