import { Toggler } from './toggler';

export default function hamburger({
  selectorHamburger,
  selectorContent,
  hamburgerActiveClass,
  contentActiveClass,
}) {
  return new Toggler({
    trigger: {
      selector: selectorHamburger,
      activeClass: hamburgerActiveClass,
    },
    content: {
      selector: selectorContent,
      activeClass: contentActiveClass,
    },
  });
}
