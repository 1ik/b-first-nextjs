export interface htmlSitemapProps {
  className?: string;
}
export function HtmlSitemap({ className }: htmlSitemapProps) {
  return (
    <div className={`${className}`}>
      <h1 className="font-semibold text-2xl text-accent mb-2 mt-5">
        <a className="hover:text-accent" href="/">
          Home
        </a>
      </h1>
      <ul className="pl-4 font-semibold text-base">
        <li className="mb-2">
          <a className="hover:text-accent" href="/bangladesh">
            Bangladesh
          </a>
        </li>
        <li className="mb-2">
          <a className="hover:text-accent" href="/world">
            World
          </a>
        </li>
        <li className="mb-2">
          <a className="hover:text-accent" href="/politics">
            Politis
          </a>
        </li>
        <li className="mb-2">
          <a className="hover:text-accent" href="/sports">
            Sports
          </a>
        </li>
        <li className="mb-2">
          <a className="hover:text-accent" href="/corporates">
            Corporates
          </a>
        </li>
        <li className="mb-2">
          <a className="hover:text-accent" href="/economy">
            Economy
          </a>
        </li>
        <li className="mb-2">
          <a className="hover:text-accent" href="/feature">
            Feature
          </a>
        </li>
        <li className="mb-2">
          <a className="hover:text-accent" href="/tech">
            Tech
          </a>
        </li>
        <li className="mb-2">
          <a className="hover:text-accent" href="/interview">
            Interview
          </a>
        </li>
        <li className="mb-2">
          <a className="hover:text-accent" href="/lifestyle">
            LifeStyle
          </a>
        </li>
        <li className="mb-2">
          <a className="hover:text-accent" href="/education">
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
