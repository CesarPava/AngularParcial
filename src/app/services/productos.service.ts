import { Injectable } from "@angular/core";
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProductosService{
  constructor(private firestore: AngularFirestore) { }

  agragarProducto(producto: any): Promise<any> {
    return this.firestore.collection('productos').add(producto);
  }

  getProductos(): Observable<any> {
    return this.firestore.collection('productos').snapshotChanges();
  }

  eliminarProducto(id: string): Promise<any> {
    return this.firestore.collection('productos').doc(id).delete();
  }

  getProducto(id: string): Observable<any> {
    return this.firestore.collection('productos').doc(id).snapshotChanges();
  }

  actualizarProducto(id: string, data: any): Promise<any> {
    return this.firestore.collection('productos').doc(id).update(data);
  } 

}