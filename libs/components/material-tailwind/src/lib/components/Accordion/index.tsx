/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React from "react";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { AccordionContextProvider, useAccordion } from "./AccordionContext";

// types
import type { animate, children, className, disabled, icon, open } from "../../types/components/accordion";
import {
  propTypesAnimate,
  propTypesChildren,
  propTypesClassName,
  propTypesDisabled,
  propTypesIcon,
  propTypesOpen,
} from "../../types/components/accordion";

// accordion components
import { AccordionBody, AccordionBodyProps } from "./AccordionBody";
import { AccordionHeader, AccordionHeaderProps } from "./AccordionHeader";

export interface AccordionProps extends React.ComponentProps<"div"> {
  open: open;
  icon?: icon;
  animate?: animate;
  disabled?: disabled;
  className?: className;
  children: children;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ open, icon, animate, className, disabled, children, ...rest }, ref) => {
    // 1. init
    const { accordion } = useTheme();
    const {
      defaultProps,
      styles: { base },
    } = accordion;

    // 2. set default props
    icon = icon ?? defaultProps.icon;
    animate = animate ?? defaultProps.animate;
    disabled = disabled ?? defaultProps.disabled;
    className = twMerge(defaultProps.className || "", className);

    // 3. set styles
    const accordionClasses = twMerge(
      classnames(objectsToString(base.container), { [objectsToString(base.disabled)]: disabled }),
      className
    );

    // 4. memoize context value
    const contextValue = React.useMemo(() => ({ open, icon, animate, disabled }), [open, icon, animate, disabled]);

    // 5. return
    return (
      <AccordionContextProvider value={contextValue}>
        <div {...rest} ref={ref} className={accordionClasses}>
          {children}
        </div>
      </AccordionContextProvider>
    );
  }
);

Accordion.propTypes = {
  open: propTypesOpen,
  icon: propTypesIcon,
  animate: propTypesAnimate,
  disabled: propTypesDisabled,
  className: propTypesClassName,
  children: propTypesChildren,
};

Accordion.displayName = "MaterialTailwind.Accordion";

export { Accordion, AccordionBody, AccordionHeader, useAccordion };
export type { AccordionBodyProps, AccordionHeaderProps };
export default Object.assign(Accordion, {
  Header: AccordionHeader,
  Body: AccordionBody,
});
