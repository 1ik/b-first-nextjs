// Layout of the site, contains Header, Footer, Nav and render site content which passed as child prop
import { Header } from '../Header';

export const NewsSiteRootLayout = ({ children }: any) => {
  return (
    <div className="px-3">
      <Header />
      {children}
    </div>
  );
};
