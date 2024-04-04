import { Icon } from "@bfirst/components-icon";
import { HCF } from "@bfirst/components-layout";
import { FeatureTagList } from "@bfirst/components-tags";
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
            <Link to="/tags">Tags</Link>
          </Breadcrumbs>
          <Link to="add">
            <div className="block md:hidden">
              <Icon size={20} name="create" variant="gradient" />
            </div>
            <div className="hidden md:block">
              <Button size="sm">Create Tag</Button>
            </div>
          </Link>
        </div>
      </HCF.Header>
      <HCF.Content>
        <FeatureTagList />
      </HCF.Content>
    </HCF>
  );
}
