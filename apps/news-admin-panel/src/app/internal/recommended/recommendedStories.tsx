import { Icon } from "@bfirst/components-icon";
import { HCF } from "@bfirst/components-layout";
import { RecommendedStories } from "@bfirst/components-recommended-stories";
import { Breadcrumbs } from "@bfirst/material-tailwind";
import { Link } from "react-router-dom";

export default function Recommended() {
  return (
    <HCF>
      <HCF.Header>
        <div className="flex flex-row w-full justify-between items-center">
          <Breadcrumbs>
            <Link to="/">
              <Icon name="home" variant="text" />
            </Link>
            <Link to="/recommended-stories">Recommended Stories</Link>
          </Breadcrumbs>
        </div>
      </HCF.Header>
      <HCF.Content>
        <RecommendedStories />
      </HCF.Content>
    </HCF>
  );
}
