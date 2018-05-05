import { Component, OnInit } from '@angular/core';
import { InspeccionInicial } from '../../interfaces/inspeccion-inicial';

import { Observable} from 'rxjs/Observable';
import { FirestoreService} from '../../core/firestore.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'planilla-inspeccion-ini',
  templateUrl: './planilla-inspeccion-ini.component.html',
  styleUrls: ['./planilla-inspeccion-ini.component.css']
})
export class PlanillaInspeccionIniComponent implements OnInit {
inicialCol:Observable<InspeccionInicial[]>;
razonSocial="";
  constructor(private route:ActivatedRoute, private db:FirestoreService) { }

  ngOnInit() {
    this.razonSocial=this.route.snapshot.params.razonSocial;
    this.inicialCol = this.db.colWithIds$('iniciales', ref=>ref.where('razonSocial','==',`${this.razonSocial}`).orderBy("createdAt","desc").limit(1))
  }

}
