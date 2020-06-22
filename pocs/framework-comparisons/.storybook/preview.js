import React, { useEffect } from "react";
import { addDecorator } from "@storybook/react";
import gsap from 'gsap'

import { gsapBlur } from 'lib/utils/gsap-blur'

import "lib/theme/global.scss";

addDecorator((story) => {
  useEffect(() => {
    gsapBlur()
    gsap.config({
      force3D: true,
    })
  }, [])

  return <>{story()}</>
});
