import {
  query,
  getDoc,
  doc,
  setDoc,
} from 'firebase/firestore';
import { db } from '../configs/firebase.config';

export default class OrderService {
  static async getAll(id) {
    const basketUserRef = doc(db, 'orders', id);
    const q = query(basketUserRef);
    const querySnapshot = await getDoc(q);
    const res = querySnapshot.data();
    return res.products;
  }

  static async addOrder(order, id) {
    await setDoc(doc(db, 'orders', id), {
      orders: [],
    });
    const orderUserRef = doc(db, 'orders', id);
    const orderQuery = query(orderUserRef);
    const { orders } = (await getDoc(orderQuery)).data();
    orders.push(order);
    await setDoc(orderUserRef, {
      orders: [...orders],
    });
  }
}
