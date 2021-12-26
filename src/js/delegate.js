const delegate = ({ triggers, event, condition, cb }) => {
  triggers.forEach((el) => {
    el.addEventListener(event, (e) => {
      const target = e.target;
      if (condition(target)) {
        cb(el);
      }
    });
  });
};

export default delegate;
