import { Link } from "react-router-dom";
import { HCF } from "@bfirst/components-layout";
import { Breadcrumbs, Button } from "@bfirst/material-tailwind";
import { HomeIcon } from "@heroicons/react/16/solid";
import { StoriesList } from "@bfirst/components-stories";

export default function List() {
  return (
    <HCF>
      <HCF.Header>
        <div className="flex flex-row w-full justify-between">
          <Breadcrumbs>
            <Link to="/">
              <HomeIcon className="w-5 h-5" />
            </Link>
            <Link to="/stories">Stories</Link>
          </Breadcrumbs>
          <Link to="/stories/create-story">
            <Button size="sm"> Create Story</Button>
          </Link>
        </div>
      </HCF.Header>
      <HCF.Content>
        <StoriesList />
      </HCF.Content>
    </HCF>
  );
}
