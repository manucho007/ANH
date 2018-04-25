import { Component, OnInit } from '@angular/core';
import { InspeccionInicial } from '../../interfaces/inspeccion-inicial';

import { FirestoreService} from '../../core/firestore.service';

import { Observable} from 'rxjs/Observable';
import {AngularFireStorage,AngularFireUploadTask } from 'angularfire2/storage';
import { tap } from 'rxjs/operators';

let pathEste, pathOeste, pathNorte, pathSur;
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
  estacionMasProx:"",
  electricidad:true,
  aguaPotable:true,
  telefono:true,
  alcantarillado:true,
  observaciones:"",
  nombreRepresentante:"",
  ciRepresentante:"",
  nombreInspector:"",
  fotoEste:"",
  fotoOeste:"",
  fotoNorte:"",
  fotoSur:"",
};
// main task
task:AngularFireUploadTask;
// Progress monitoring
percentageOeste:Observable<number>;
percentageEste:Observable<number>;
percentageNorte:Observable<number>;
percentageSur:Observable<number>;

// Download URL
downloadURLOeste: Observable<string>;
downloadURLEste: Observable<string>;
downloadURLNorte: Observable<string>;
downloadURLSur: Observable<string>;

  constructor(private db:FirestoreService, private storage:AngularFireStorage) { }

  ngOnInit() {
  }

  startUploadOeste(event: FileList) {
    // The File object
    const file = event.item(0)
    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('Formato no soportado ')
      return;
    }
    // The storage path
    pathOeste = `imagenes/${new Date().getTime()}_${file.name}`;
    // Totally optional metadata
    const customMetadata = { info: 'Foto de Oeste' };
    // The main task
    this.task = this.storage.upload(pathOeste, file, { customMetadata })
    // The file's download URL
    this.downloadURLOeste = this.task.downloadURL();
    console.log(pathOeste)
    // Progress monitoring
    this.percentageOeste = this.task.percentageChanges();
  }

  startUploadEste(event: FileList) {
    // The File object
    const file = event.item(0)
    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('Formato no soportado ')
      return;
    }
    // The storage path
    pathEste = `imagenes/${new Date().getTime()}_${file.name}`;
    // Totally optional metadata
    const customMetadata = { info: 'Foto del Este' };
    // The main task
    this.task = this.storage.upload(pathEste, file, { customMetadata })
    // The file's download URL
    this.downloadURLEste = this.task.downloadURL();
    console.log(pathEste)
    // Progress monitoring
    this.percentageEste = this.task.percentageChanges();
  }

  startUploadNorte(event: FileList) {
    // The File object
    const file = event.item(0)
    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('Formato no soportado ')
      return;
    }
    // The storage path
    pathNorte = `imagenes/${new Date().getTime()}_${file.name}`;
    // Totally optional metadata
    const customMetadata = { info: 'Foto del Norte' };
    // The main task
    this.task = this.storage.upload(pathNorte, file, { customMetadata })
    // The file's download URL
    this.downloadURLNorte = this.task.downloadURL();
    console.log(pathNorte)
    // Progress monitoring
    this.percentageNorte = this.task.percentageChanges();
  }

  startUploadSur(event: FileList) {
    // The File object
    const file = event.item(0)
    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('Formato no soportado ')
      return;
    }
    // The storage path
    pathSur = `imagenes/${new Date().getTime()}_${file.name}`;
    // Totally optional metadata
    const customMetadata = { info: 'Foto del Sur' };
    // The main task
    this.task = this.storage.upload(pathSur, file, { customMetadata })
    // The file's download URL
    this.downloadURLSur = this.task.downloadURL();
    console.log(pathSur)
    // Progress monitoring
    this.percentageSur = this.task.percentageChanges();
  }
  saveInspeccion(){
    this.inspeccion.fotoOeste=pathOeste|| '';
    this.inspeccion.fotoEste=pathEste|| '';
    this.inspeccion.fotoNorte=pathNorte|| '';
    this.inspeccion.fotoSur=pathSur|| '';
    confirm("¿Desea ingresar los datos?");
    console.log(this.inspeccion);
    this.db.add('iniciales',this.inspeccion);
  }
}
