import { Link } from "react-router-dom";
import { HCF } from "@bfirst/components-layout";
import { Breadcrumbs, Button } from "@bfirst/material-tailwind";
import { StoriesList } from "@bfirst/components-stories";
import { Icon } from "@bfirst/components-icon";

export default function List() {
  return (
    <HCF>
      <HCF.Header>
        <div className="flex flex-row w-full justify-between items-center">
          <Breadcrumbs>
            <Link to="/">
            <Icon name="home" variant="text"/>
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
