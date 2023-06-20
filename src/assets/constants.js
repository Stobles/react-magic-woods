import { FaFacebookF, FaInstagram, FaTwitter, FaVk } from 'react-icons/fa';
import { applePay, extra, googlePay, mastercard, multiLayer, singleLayer, visa } from '.';

export const navLinksMain = [
  { name: 'Главная', to: '/' },
  { name: 'О нас', to: '/about' },
  { name: 'Контакты', to: '/contacts' },
  { name: 'Каталог', to: '/store' },
];

export const navLinksSecondary = [
  { name: 'Доставка', to: '/delivery' },
  { name: 'FAQ', to: '/faq' },
];

export const socialLinks = [
  { Icon: FaFacebookF, to: 'https://facebook.com/' },
  { Icon: FaInstagram, to: 'https://instagram.com/' },
  { Icon: FaTwitter, to: 'https://twitter.com/' },
  { Icon: FaVk, to: 'https://vk.com/' },
];

export const shortSocialLinks = [
  { Icon: FaFacebookF, to: 'https://facebook.com/' },
  { Icon: FaInstagram, to: 'https://instagram.com/' },
  { Icon: FaTwitter, to: 'https://twitter.com/' },
];

export const homeSlides = [
  {
    id: '123',
    title: 'Уникальное ТЗ',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Duis eget dui at ante egestas porta. Sed sed arcu vitae risus ullamcorper 
    sollicitudin. Nulla tristique, turpis non ornare porttitor, diam nisi malesuada magna, 
    id laoreet odio orci ut nisi.`,
    image: '',
  },
  { id: '1234', title: 'Ешеду', description: 'вуак', image: '' },
  { id: '1235', title: 'Ешеду', description: 'вуак', image: '' },
  { id: '1236', title: 'Ешеду', description: 'вуак', image: '' },
];

export const categoriesHome = [
  { to: 'store/single_layer', title: 'Однослойные карты', img: singleLayer },
  { to: 'store/multi_layer', title: 'Многослойные карты', img: multiLayer },
  { to: 'store/extra', title: 'Дополнительно', img: extra },
  { to: 'store/multi_layer', title: 'Разное', img: multiLayer },
];

export const payments = [
  { image: mastercard },
  { image: visa },
  { image: googlePay },
  { image: applePay },
];

export const footerContacts = [
  {
    subtitle: 'Отдел продаж',
    contacts: { phone: '+38 (094) 570 43 21', email: 'info@mail.ru' },
  },
  {
    subtitle: 'Отдел бубаж',
    contacts: { phone: '+38 (094) 570 43 21', email: 'info@mail.ru' },
  },
];

export const footerHelp = [
  { name: 'Оферта', to: '/offer' },
  { name: 'Доставка', to: '/delivery' },
  { name: 'FAQ', to: '/FAQ' },
];
