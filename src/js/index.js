import 'reset-css';
import '../style.scss';
import accordion from './accordion';
import hamburger from './hamburger';

hamburger({
  selectorHamburger: '.hamburger',
  selectorContent: '.accordion',
  hamburgerActiveClass: 'hamburger-active',
  contentActiveClass: 'accordion-active',
});

accordion('.accordion');
