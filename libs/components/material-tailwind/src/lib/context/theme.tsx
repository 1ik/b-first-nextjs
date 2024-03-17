//ts-ignore
import merge from 'deepmerge';
import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';
import theme from '../theme/index';
import combineMerge from '../utils/combineMerge';

const MaterialTailwindTheme = createContext<any>(theme);

MaterialTailwindTheme.displayName = 'MaterialTailwindThemeProvider';

interface Props {
  value: any;
  children: any;
  // any other props that come into the component, you don't have to explicitly define children.
}

const ThemeProvider: React.FC<Props> = ({ children, ...props }) => {
  const value = props.value || theme;
  const mergedValue = merge(theme, value, { arrayMerge: combineMerge });

  return (
    <MaterialTailwindTheme.Provider value={mergedValue}>
      {children}
    </MaterialTailwindTheme.Provider>
  );
};

const useTheme = () => useContext(MaterialTailwindTheme);

ThemeProvider.propTypes = {
  value: PropTypes.instanceOf(Object),
  children: PropTypes.node.isRequired,
};

export { MaterialTailwindTheme, ThemeProvider, useTheme };
