import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomiciliariosService {

  constructor(private firestore:AngularFirestore) { }

  agregarDomiciliario(domiciliario:any):Promise<any>{
    return this.firestore.collection('domiciliarios').add(domiciliario)
  }

  getDomiciliarios(): Observable<any> {
    return this.firestore.collection('domiciliarios', ref => ref.where('estado', '==', 'activo')).snapshotChanges();
  }

  getDomiciliariosOcupados(): Observable<any> {
    return this.firestore.collection('domiciliarios', ref => ref.where('estado', '==', 'Ocupado')).snapshotChanges();
  }

  eliminarDomiciliario(id: string): Promise<any> {
    return this.firestore.collection('domiciliarios').doc(id).delete();
  }

  cambiarEstadoDomiciliario(id: string) {
    return this.firestore.collection('domiciliarios').doc(id).update({ estado: "Ocupado" })
  }

  activarEstadoDomiciliario(id: string) {
    return this.firestore.collection('domiciliarios').doc(id).update({ estado: "activo" })
  }
}
