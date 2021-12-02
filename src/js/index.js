import 'reset-css';
import '../style.scss';
import toggleAccordionSection from './accordion';
import hamburger from './hamburger';

hamburger('.hamburger', '.accordion');
toggleAccordionSection('.accordion');
