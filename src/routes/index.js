import {
  Home,
  About,
  Blog,
  Contacts,
  Categories,
  Store,
  Product,
  FAQ,
  Delivery,
  User,
  Basket,
} from '../pages';

const HOME_ROUTE = '/';
const ABOUT_ROUTE = '/about';
const BLOG_ROUTE = '/blog';
const CONTACTS_ROUTE = '/contacts';
const CATEGORIES_ROUTE = '/store';
const STORE_ROUTE = '/store/:category';
const PRODUCT_ROUTE = '/store/:category/:id';
const FAQ_ROUTE = '/faq';
const DELIVERY_ROUTE = '/delivery';
const USER_ROUTE = '/user';
const BASKET_ROUTE = '/basket';

// для авторизованного: корзина, страница пользователя.
export const routesMainLayout = [
  { path: HOME_ROUTE, Component: Home },
  { path: STORE_ROUTE, Component: Store },
  { path: PRODUCT_ROUTE, Component: Product },
];

export const authRoutesMainLayout = [
  { path: USER_ROUTE, Component: User },
];

export const routesTitleLayout = [
  { path: ABOUT_ROUTE, name: 'О нас', Component: About },
  { path: CONTACTS_ROUTE, name: 'Связь с нами', Component: Contacts },
  { path: CATEGORIES_ROUTE, name: 'Категории', Component: Categories },
  { path: FAQ_ROUTE, name: 'FAQ', Component: FAQ },
  { path: DELIVERY_ROUTE, name: 'Доставка', Component: Delivery },
  { path: BASKET_ROUTE, name: 'Корзина', Component: Basket },
];

export const authRoutesTitleLayout = [
];
