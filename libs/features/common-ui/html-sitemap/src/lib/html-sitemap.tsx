export interface htmlSitemapProps {
  className?: string;
}
export function HtmlSitemap({ className }: htmlSitemapProps) {
  return (
    <div className={`desktop-container ${className}`}>
      <h2 className="font-semibold text-2xl text-accent mb-2 mt-5">
        <a className="hover:text-accent" href="/">
          Home
        </a>
      </h2>
      <ul className="pl-4 font-semibold text-base">
        <li className="mb-2">
          <a className="hover:text-accent" href="/Bangladesh">
            Bangladesh
          </a>
        </li>
        <li className="mb-2">
          <a className="hover:text-accent" href="/World">
            World
          </a>
        </li>
        <li className="mb-2">
          <a className="hover:text-accent" href="/Politics">
            Politis
          </a>
        </li>
        <li className="mb-2">
          <a className="hover:text-accent" href="/Sports">
            Sports
          </a>
        </li>
        <li className="mb-2">
          <a className="hover:text-accent" href="/corporates">
            Corporates
          </a>
        </li>
        <li className="mb-2">
          <a className="hover:text-accent" href="/Teach">
            Teach
          </a>
        </li>
        <li className="mb-2">
          <a className="hover:text-accent" href="/Lifestyle">
            LifeStyle
          </a>
        </li>
        <li className="mb-2">
          <a className="hover:text-accent" href="/Education">
            Education
          </a>
        </li>
        <li className="mb-2">
          <a className="hover:text-accent" href="/latest">
            Latest
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HtmlSitemap;
