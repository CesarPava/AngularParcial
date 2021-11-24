import { Injectable } from "@angular/core";
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private firestore: AngularFirestore) { }

  agregarTienda(tienda: any): Promise<any> {
    return this.firestore.collection('tiendas').add(tienda);
  }

  getTiendas(): Observable<any> {
    return this.firestore.collection('tiendas', ref => ref.where('estado', '==', 'Online')).snapshotChanges();
  }

  getTiendasOffline(): Observable<any> {
    return this.firestore.collection('tiendas', ref => ref.where('estado', '==', 'Offline')).snapshotChanges();
  }

  eliminarTienda(id: string): Promise<any> {
    return this.firestore.collection('tiendas').doc(id).delete();
  }

  getTienda(id: string): Observable<any> {
    return this.firestore.collection('tiendas').doc(id).snapshotChanges();
  }

  actualizarTienda(id: string, data: any): Promise<any> {
    return this.firestore.collection('tiendas').doc(id).update(data);
  }

  activarTienda(id: string) {
    return this.firestore.collection('tiendas').doc(id).update({ estado: "Online" })
  }

  desactivarTienda(id: string) {
    return this.firestore.collection('tiendas').doc(id).update({ estado: "Offline" })
  }
}
