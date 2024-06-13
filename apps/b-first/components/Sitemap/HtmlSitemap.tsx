import React from "react";

function HtmlSitemap() {
  return (
    <section className="pt-16 pb-10">
      <div className="md-container xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <h1 className="font-semibold text-2xl text-black/80 cursor-pointer  text-[#4b97c9] mb-2">
          <a href="/">Home</a>
        </h1>
        <ul className="pl-8">
          <li className="font-semibold text-lg text-black/80 cursor-pointer mb-2 hover:text-teal-500">
            <a href="/bangladesh">Bangladesh</a>
          </li>
          <li className="font-semibold text-lg text-black/80 cursor-pointer mb-2 hover:text-teal-500">
            <a href="/world">World</a>
          </li>
          <li className="font-semibold text-lg text-black/80 cursor-pointer mb-2 hover:text-teal-500">
            <a href="/politics">Politis</a>
          </li>
          <li className="font-semibold text-lg text-black/80 cursor-pointer mb-2 hover:text-teal-500">
            <a href="/sports">Sports</a>
          </li>
          <li className="font-semibold text-lg text-black/80 cursor-pointer mb-2 hover:text-teal-500">
            <a href="#">Corporates</a>
          </li>
          <li className="font-semibold text-lg text-black/80 cursor-pointer mb-2 hover:text-teal-500">
            <a href="/teach">Teach</a>
          </li>
          <li className="font-semibold text-lg text-black/80 cursor-pointer mb-2 hover:text-teal-500">
            <a href="/opinion">Opinion</a>
          </li>
          <li className="font-semibold text-lg text-black/80 cursor-pointer mb-2 hover:text-teal-500">
            <a href="/lifestyle">LifeStyle</a>
          </li>
          <li className="font-semibold text-lg text-black/80 cursor-pointer mb-2 hover:text-teal-500">
            <a href="/education">Education</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HtmlSitemap;
