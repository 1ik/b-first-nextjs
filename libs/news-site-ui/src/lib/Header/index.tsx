// Header of Site

export const Header = () => {
  return (
    <div className="flex items-center justify-between py-4">
      <button>
        <img
          className="h-13 w-42.5"
          src="/icons/bangladesh-first-logo.png"
          alt="bangladesh-first-site-icon"
        />
      </button>
      <img
        className="w-5 h-5"
        src="/icons/hamburger-icon.png"
        alt="bangladesh-first-site-icon"
      />
    </div>
  );
};
