import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Info from './ProductInfo';
import ProductService from '../../services/ProductService';
import { useFetching } from '../../hooks/useFetching';

import styles from './Product.module.scss';
import { fetchAddToBasket } from '../../redux/thunks/fetchBasket';
import { toast } from 'react-toastify';

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const [product, setProduct] = useState('');
  const [sizesMap, setSizesMap] = useState([]);
  const [sizeMap, setSizeMap] = useState();
  const [languagesMap, setLanguagesMap] = useState([]);
  const [languageMap, setLanguageMap] = useState();
  const [fetchProduct, isLoading, error] = useFetching(async (uid) => {
    const response = await ProductService.getById(uid);
    setProduct(response);
    if (response?.sizes) setSizesMap([...response.sizes]);
    if (response?.languages) setLanguagesMap([...response.languages]);
  });

  const handleAddToBasket = () => {
    if (!user) {
      toast.warning('Авторизуйтесь на сайте');
      return;
    }
    if (!sizeMap) {
      toast.warning('Выберите размер товара');
      return;
    }
    if (!languageMap) {
      toast.warning('Выберите язык карты');
      return;
    }
    const { description, images, languages, sizes, model, ...productBasket } = product;
    productBasket.id = id;
    productBasket.amount = 1;
    productBasket.size = sizeMap;
    productBasket.language = languageMap;
    if (sizeMap && languageMap) {
      dispatch(fetchAddToBasket(productBasket, user.id));
      toast.success('Товар успешно добавлен в корзину');
      return;
    }
    toast.error('Непредвиденная ошибка');
  };

  useEffect(() => {
    fetchProduct(id);
  }, []);

  useEffect(() => {
    console.log(sizeMap);
  }, [sizeMap]);

  useEffect(() => {
    console.log(product);
  }, [product]);
  return (
    <div className={styles.Product}>
      <div className='container'>
        <div className={styles.Info}>
          <Info
            id={id}
            product={product}
            sizes={sizesMap}
            languages={languagesMap}
            setSize={setSizeMap}
            setLanguage={setLanguageMap}
            handleAddToBasket={handleAddToBasket}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
