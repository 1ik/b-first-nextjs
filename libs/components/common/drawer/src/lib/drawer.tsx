/* eslint-disable @typescript-eslint/no-explicit-any */
import { Divider } from '@bd-first/common-ui';

interface IProps {
  headContent: React.ReactNode;
  bodyContent?: React.ReactNode;
  onClose?: any;
  width?: string | number;
}

export const Drawer = ({
  headContent,
  bodyContent,
  onClose,
  width,
}: IProps) => (
  <div
    style={{ minWidth: width ?? '347px' }}
    className="absolute top-0 z-50 min-h-screen overflow-hidden shadow-xl bg-PrimaryWhite"
  >
    <div className="flex items-center justify-between px-3 mt-1">
      {headContent}
      <button onClick={onClose}>
        <img src="/icons/close.png" alt="close" className="w-5 h-5" />
      </button>
    </div>
    <Divider className="mt-0 mb-2" />
    {bodyContent}
  </div>
);
