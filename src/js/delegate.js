const delegate = ({ trigger, event, condition, delegate }) => {
  trigger.addEventListener(event, e => {
    const target = e.target;
    if (condition(target)) {
      delegate(target);
    }
  });
};

export default delegate;
