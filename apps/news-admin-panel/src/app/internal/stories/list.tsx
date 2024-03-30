import { Icon } from "@bfirst/components-icon";
import { HCF } from "@bfirst/components-layout";
import { FeatureStoryList } from "@bfirst/components-stories";
import { Breadcrumbs, Button } from "@bfirst/material-tailwind";
import { Link } from "react-router-dom";

export default function List() {
  return (
    <HCF>
      <HCF.Header>
        <div className="flex flex-row w-full justify-between items-center">
          <Breadcrumbs>
            <Link to="/">
              <Icon name="home" variant="text" />
            </Link>
            <Link to="/stories">Stories</Link>
          </Breadcrumbs>
          <Link to="/stories/create-story">
            <Button size="sm"> Create Story</Button>
          </Link>
        </div>
      </HCF.Header>
      <HCF.Content>
        <FeatureStoryList />
      </HCF.Content>
    </HCF>
  );
}
