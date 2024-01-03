// Layout of the site, contains Header, Footer, Nav and render site content which passed as child prop
import { Header } from '../Header';
import { CategoryNav } from '../CategoryNav';
import { Footer } from '../Footer';

export const NewsSiteRootLayout = ({ children, categories }: any) => {
  return (
    <div className="pt-4">
      <nav className="sticky top-0 z-40" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="px-3">
          <Header />
          <CategoryNav categories={categories} />
        </div>
      </nav>
      <hr
        className="w-full border-[1px]"
        style={{ color: '#3A3A3A', opacity: 0.6 }}
      />
      <div className="py-3">{children}</div>
      <Footer />
    </div>
  );
};
