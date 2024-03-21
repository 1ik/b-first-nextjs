import { FeatureAuthorList } from "@bfirst/components-authors";
import { HCF } from "@bfirst/components-layout";
import { Breadcrumbs, Button } from "@bfirst/material-tailwind";
import { HomeIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

export default function List() {
  return (
    <HCF>
      <HCF.Header>
        <div className="flex flex-row w-full justify-between">
          <Breadcrumbs>
            <Link to="/">
              <HomeIcon className="w-5 h-5" />
            </Link>
            <Link to="/categories">Authors</Link>
          </Breadcrumbs>
          <Link to="add">
            <Button size="sm">Add</Button>
          </Link>
        </div>
      </HCF.Header>
      <HCF.Content>
        <FeatureAuthorList />
      </HCF.Content>
    </HCF>
  );
}
