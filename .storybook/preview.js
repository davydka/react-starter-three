import React, { useEffect } from "react";
import { addDecorator } from "@storybook/react";

import { gsapBlur } from 'lib/utils/gsap-blur'

import "lib/theme/global.scss";

addDecorator((story) => {
  useEffect(() => {
    gsapBlur()
  }, [])

  return <>{story()}</>
});
