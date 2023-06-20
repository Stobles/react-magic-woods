import {
  query,
  getDocs,
  limit,
  getDoc,
  getCountFromServer,
  doc,
  startAfter,
  orderBy,
  endBefore,
  where,
  limitToLast,
  or,
} from 'firebase/firestore';
import { productsRef, db } from '../configs/firebase.config';

export default class ProductService {
  static async getAll(lim, filters = null) {
    const products = [];
    let q = query(productsRef, limit(lim), orderBy('category', 'asc'));

    if (filters.category) {
      filters.category.forEach((element) => {
        q = query(q, where('category', '==', element));
      });
    }

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      products.push({ id: document.id, ...document.data() });
    });

    let qCount = query(productsRef);

    if (filters.category) {
      filters.category.forEach((element) => {
        qCount = query(q, where('category', '==', element));
      });
    }

    const productsCount = await getCountFromServer(qCount);
    return { products, count: productsCount.data().count };
  }

  static async getNext(lim, item, filters = null) {
    const products = [];
    let q = query(
      productsRef,
      limit(lim),
      orderBy('name', 'asc'),
      startAfter(item.name),
    );

    if (filters.category) {
      filters.category.forEach((element) => {
        q = query(q, where('category', '==', element));
      });
    }

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      products.push({ id: document.id, ...document.data() });
    });
    console.log(products);
    return products;
  }

  static async getPrev(lim, item, filters = null) {
    const products = [];
    let q = query(
      productsRef,
      limitToLast(lim),
      orderBy('name', 'asc'),
      endBefore(item.name),
    );

    if (filters.category) {
      filters.category.forEach((element) => {
        q = query(q, where('category', '==', element));
      });
    }

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      products.push({ id: document.id, ...document.data() });
    });
    return products;
  }

  static async getById(id) {
    const productIdRef = doc(db, 'products', id);
    const productSnap = await getDoc(productIdRef);
    return productSnap.data();
  }
}
