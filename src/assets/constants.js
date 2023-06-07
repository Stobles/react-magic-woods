import { FaFacebookF, FaInstagram, FaTwitter, FaVk } from 'react-icons/fa';
import { extra, multiLayer, singleLayer } from '.';

export const navLinksMain = [
  { name: 'Главная', to: '/' },
  { name: 'О нас', to: '/about' },
  { name: 'Контакты', to: '/contacts' },
  { name: 'Блог', to: '/blog' },
  { name: 'Каталог', to: '/catalog' },
];

export const navLinksSecondary = [
  { name: 'Оферта', to: '/offer' },
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
    description: `Різні види карт з натурального дерева та додатківдля 
    них щоб відповідати потребам наших клієнтів. 
    Для того, щоб наш декор був найкращим, ми співпрацюємо 
    з кращими виробниками сировини та фарб у галузі`,
    image: '',
  },
  { id: '1234', title: 'Ешеду', description: 'вуак', image: '' },
  { id: '1235', title: 'Ешеду', description: 'вуак', image: '' },
  { id: '1236', title: 'Ешеду', description: 'вуак', image: '' },
];

export const categories = [
  { to: 'store/single_layer', title: 'Однослойные карты', img: singleLayer },
  { to: 'store/multi_layer', title: 'Многослойные карты', img: multiLayer },
  { to: 'store/extra', title: 'Дополнительно', img: extra },
  { to: 'store/multi_layer', title: 'Разное', img: multiLayer },
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
