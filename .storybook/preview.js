import React from "react";
import { addDecorator } from "@storybook/react";

import "lib/theme/global.scss";

addDecorator((story) => <>{story()}</>);
