import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      <p>Child part</p>
      {toggle && <span>Toggle appeared in the child component</span>}
    </>
  );
});

export default Button;
