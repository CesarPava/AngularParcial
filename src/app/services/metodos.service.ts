import { Injectable } from "@angular/core";
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class MetodosService {
  constructor(private firestore: AngularFirestore) { }

  agregarMetodo(metodo: any): Promise<any> {
    return this.firestore.collection('metodos').add(metodo);
  }

  getMetodos(): Observable<any> {
    return this.firestore.collection('metodos').snapshotChanges();
  }

  eliminarMetodo(id: string): Promise<any> {
    return this.firestore.collection('metodos').doc(id).delete();
  }

  getMetodo(id: string): Observable<any> {
    return this.firestore.collection('metodos').doc(id).snapshotChanges();
  }

  actualizarMetodo(id: string, data: any): Promise<any> {
    return this.firestore.collection('metodos').doc(id).update(data);
  }

}