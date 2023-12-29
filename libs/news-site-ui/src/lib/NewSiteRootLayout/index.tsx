// Layout of the site, contains Header, Footer, Nav and render site content which passed as child prop
import { Header } from '../Header';
import { CategoryNav } from '../CategoryNav';

export const NewsSiteRootLayout = ({ children }: any) => {
  return (
    <div className="py-4">
      <div className="px-3">
        <Header />
        <CategoryNav />
      </div>
      <hr
        className="w-full border-[1px] mt-0 mb-3"
        style={{ color: '#3A3A3A', opacity: 0.6 }}
      />
      <div className="">{children}</div>
    </div>
  );
};
