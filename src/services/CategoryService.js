import {
  query,
  getDocs,
  orderBy,
} from 'firebase/firestore';
import { categoriesRef } from '../configs/firebase.config';

export default class CategoryService {
  static async getAll() {
    const categories = [];
    const q = query(categoriesRef, orderBy('name', 'asc'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      categories.push({ id: document.id, ...document.data() });
    });
    return { categories };
  }
}
