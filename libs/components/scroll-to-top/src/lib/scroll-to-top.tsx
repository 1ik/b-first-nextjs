import { LuArrowBigUp } from "react-icons/lu";
import ScrollUp from "react-scroll-up";

/* eslint-disable-next-line */
export interface ScrollToTopProps {}

export function ScrollToTop(props: ScrollToTopProps) {
  return (
    <ScrollUp showUnder={500} duration={1000}>
      <button className="p-2 text-3xl bg-slate-800 text-white rounded">
        <LuArrowBigUp />
      </button>
    </ScrollUp>
  );
}

export default ScrollToTop;
