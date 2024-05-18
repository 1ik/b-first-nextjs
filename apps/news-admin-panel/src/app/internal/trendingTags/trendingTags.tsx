import { Icon } from "@bfirst/components-icon";
import { HCF } from "@bfirst/components-layout";
import { Breadcrumbs } from "@bfirst/material-tailwind";
import { TrendingTags } from "@bfirst/components-trendingTags";
import { Link } from "react-router-dom";

export default function trendingTags() {
  return (
    <HCF>
      <HCF.Header>
        <div className="flex flex-row w-full justify-between items-center">
          <Breadcrumbs>
            <Link to="/">
              <Icon name="home" variant="text" />
            </Link>
            <Link to="/trending-tags">Trending-Topic</Link>
          </Breadcrumbs>
        </div>
      </HCF.Header>
      <HCF.Content>
        <TrendingTags />
        
      </HCF.Content>
    </HCF>
  );
}
