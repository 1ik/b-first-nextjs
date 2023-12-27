// Header of Site
export const Header = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <button>
        <img
          className="h-13 w-42.5"
          src="/icons/bangladesh-first-logo.png"
          alt="bangladesh-first-site-icon"
        />
      </button>
      <img
        className="h-5 w-5"
        src="/icons/hamburger-icon.png"
        alt="bangladesh-first-site-icon"
      />
    </div>
  );
};
