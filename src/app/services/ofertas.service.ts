import { Injectable } from "@angular/core";
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class OfertasService {
  constructor(private firestore: AngularFirestore) { }

  agregarOferta(oferta: any): Promise<any> {
    return this.firestore.collection('ofertas').add(oferta);
  }

  getOfertas(): Observable<any> {
    return this.firestore.collection('ofertas').snapshotChanges();
  }

  eliminarOferta(id: string): Promise<any> {
    return this.firestore.collection('ofertas').doc(id).delete();
  }

  getOferta(id: string): Observable<any> {
    return this.firestore.collection('ofertas').doc(id).snapshotChanges();
  }

  actualizarOferta(id: string, data: any): Promise<any> {
    return this.firestore.collection('ofertas').doc(id).update(data);
  }

}