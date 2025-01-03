/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React from "react";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { TabsContextProvider, useTabs } from "./TabsContext";

// tabs components
import { Tab, TabProps } from "./Tab";
import { TabPanel, TabPanelProps } from "./TabPanel";
import { TabsBody, TabsBodyProps } from "./TabsBody";
import { TabsHeader, TabsHeaderProps } from "./TabsHeader";

// types
import type { children, className, orientation, value } from "../../types/components/tabs";
import {
  propTypesChildren,
  propTypesClassName,
  propTypesId,
  propTypesOrientation,
  propTypesValue,
} from "../../types/components/tabs";

export interface TabsProps extends React.ComponentProps<"div" | any> {
  value: value;
  orientation?: orientation;
  className?: className;
  children: children;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ value, className, orientation, children, ...rest }, ref) => {
    // 1. init
    const { tabs } = useTheme();
    const { defaultProps, styles } = tabs;
    const tabsId = React.useId();

    // 2. set default props
    orientation = orientation ?? defaultProps.orientation;
    className = twMerge(defaultProps.className || "", className);

    // 3. set styles
    const tabsClasses = twMerge(
      classnames(objectsToString(styles.base), {
        [styles[orientation] && objectsToString(styles[orientation])]: orientation,
      }),
      className
    );

    // 4. return
    return (
      <TabsContextProvider id={tabsId} value={value} orientation={orientation}>
        <div {...rest} ref={ref} className={tabsClasses}>
          {children}
        </div>
      </TabsContextProvider>
    );
  }
);

Tabs.propTypes = {
  id: propTypesId,
  value: propTypesValue,
  className: propTypesClassName,
  orientation: propTypesOrientation,
  children: propTypesChildren,
};

Tabs.displayName = "MaterialTailwind.Tabs";

export { Tab, TabPanel, Tabs, TabsBody, TabsHeader, useTabs };
export type { TabPanelProps, TabProps, TabsBodyProps, TabsHeaderProps };
export default Object.assign(Tabs, { Tab, Body: TabsBody, Header: TabsHeader, Panel: TabPanel });
