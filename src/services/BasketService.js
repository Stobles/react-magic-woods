import { query, getDoc, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../configs/firebase.config';

export default class BasketService {
  static async getAllBasket(id) {
    const basketUserRef = doc(db, 'basket', id);
    const q = query(basketUserRef);
    const querySnapshot = await getDoc(q);
    const res = querySnapshot.data();
    return res.products;
  }

  static async addToBasket(product, id) {
    const basketUserRef = doc(db, 'basket', id);
    const basketQuery = query(basketUserRef);
    const basketItems = (await getDoc(basketQuery)).data().products;
    const isRepeat = basketItems.find(
      (item) => item.id === product.id && item.size === product.size,
    );
    if (isRepeat) {
      const basketItemsNew = basketItems.map((item) => {
        if (item.id === product.id && item.size === product.size) { item.amount += 1; }
        return item;
      });
      await updateDoc(basketUserRef, {
        products: [...basketItemsNew],
      });
      return;
    }
    await updateDoc(basketUserRef, {
      products: arrayUnion(product),
    });
  }

  static async clearBasket(id) {
    const basketUserRef = doc(db, 'basket', id);
    await updateDoc(basketUserRef, {
      products: [],
    });
  }
}
