import { NewsCard } from '../NewsCard';
import {useEffect, useState} from "react";
import {getImageUrl} from "../image_utils";


export const HomePage = () => {
  const [featured, setFeatured] = useState([]);
  const [latestNews, setLatest] = useState([]);

  useEffect(() => {
    fetch('https://bangladeshfirst.com/api/v2/featured').then(res => res.json()).then((res) => {
      setFeatured(res);
    });
  }, []);

  useEffect(() => {
    fetch('https://bangladeshfirst.com/api/v2/latest').then(res => res.json()).then((res) => {
      setLatest(res);
    });
  }, []);

  return (
    <div className="flex flex-col w-full gap-2 px-3">
      {
        featured?.map((n: any, idx: any) => {
          if (idx === 0) {
            return <NewsCard
              key={idx}
              title={n.title}
              category={n.category?.name}
              summary={n.brief}
              image={getImageUrl(n.featured_image)}
              imageAlt={n.title}
              showImage
              showCategory
              showDivider
              showPublishedAt
              showSummary
              publishedAt="28 minutes ago"
              size="lg"
            />
          }
          return  <NewsCard
            key={idx}
            title={n.title}
            category={n.category?.name}
            showCategory
            showDivider
            showPublishedAt
            publishedAt="56 minutes ago"
            size="md"
          />
        })
      }

      {/* Featured Category's News */}
      {/*
      <div
        className="flex flex-col w-full gap-3 px-3 py-4"
        style={{ backgroundColor: '#EFEFEF' }}
      >
        <h2
          className="font-bold text-sm leading-4 tracking-[1px] uppercase"
          style={{ color: '#D00023' }}
        >
          Bangladesh Election
        </h2>
        <div className="flex flex-col gap-4">
          {featuredCategorysNews?.map((n: any, idx: any) => (
            <NewsCard
              key={idx}
              title={n?.title ?? ''}
              showPublishedAt
              publishedAt={n?.publishedAt ?? ''}
              size="md"
            />
          ))}
        </div>
        <a
          href="#"
          target="_blank"
          className="uppercase underline font-bold text-xs tracking-[-.5px]"
          style={{ color: '#030303' }}
        >
          Read More on Bangladesh Election
        </a>
      </div>
      */}
      {/* Latest News Section */}
      <div className="flex flex-col w-full gap-3 py-4">
        <h2
          className="font-bold text-xl leading-5 tracking-[.5px] uppercase"
          style={{ color: '#D00023' }}
        >
          Latest News
        </h2>
        {latestNews?.map((n: any, idx: number) => (
          <NewsCard
            key={idx}
            title={n?.title ?? ''}
            showPublishedAt
            publishedAt={n?.publishedAt ?? ''}
            size="sm"
            category={n.category?.name}
            showDivider={idx !== latestNews?.length - 1}
            gap={1}
          />
        ))}
      </div>
    </div>
  );
};
