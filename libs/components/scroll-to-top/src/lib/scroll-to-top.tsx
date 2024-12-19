import { LuArrowBigUp } from "react-icons/lu";
import ScrollUp from "react-scroll-up";

/* eslint-disable-next-line */
export interface ScrollToTopProps {}

export function ScrollToTop(props: ScrollToTopProps) {
  return (
    <ScrollUp showUnder={500} duration={1000} easing="easeInQuint">
      <button className="p-2 text-3xl bg-[#333535] text-white rounded duration-300 hover:-translate-y-1">
        <LuArrowBigUp />
      </button>
    </ScrollUp>
  );
}

export default ScrollToTop;
