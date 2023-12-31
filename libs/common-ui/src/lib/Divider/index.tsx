export const Divider = ({ className }: any) => {
  return (
    <hr
      className={`w-full border-[1px] mt-1 ${className}`}
      style={{ color: '#3A3A3A', opacity: 0.6 }}
    />
  );
};
