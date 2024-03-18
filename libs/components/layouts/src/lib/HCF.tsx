import React from "react";

/**
 * HCF -> Header Content Footer layout.
 *
 * Use Example:
 * <HCF>
 *  <HCF.Header> The Header</HCF.Header>
 *  <HCF.Content> The Header</HCF.Content>
 *  <HCF.Footer> The Header</HCF.Footer>
 * </HCF>
 */
export const HCF = ({ children }) => {
  // Extracting children components
  const header = React.Children.toArray(children).find((child) => child.type === Header);
  const content = React.Children.toArray(children).find((child) => child.type === Content);
  const footer = React.Children.toArray(children).find((child) => child.type === Footer);

  return (
    <div className="hcf w-full h-full flex flex-col">
      {header && <div className="h-12 w-full bg-blue-gray-50 flex items-center">{header}</div>}
      <>{content}</>
      {footer && <div className="h-12 w-full">{footer}</div>}
    </div>
  );
};

interface HCFHeaderProps {
  children: React.ReactNode;
  className?: string;
}

// Header component
const Header: React.FC<HCFHeaderProps> = ({ children, className }) => {
  return <div className={`header w-full ${className}`}>{children}</div>;
};

interface HCFOverflowProps {
  children: React.ReactNode;
  overflow?: string;
}

// Content component
const Content: React.FC<HCFOverflowProps> = ({ children, overflow }) => {
  if (!overflow) {
    overflow = "scroll";
  }

  return <div className={"flex-1 w-full overflow-" + overflow}>{children}</div>;
};

// Footer component
const Footer = ({ children }) => {
  return <div className="footer w-full">{children}</div>;
};

// Exporting the components
HCF.Header = Header;
HCF.Content = Content;
HCF.Footer = Footer;
