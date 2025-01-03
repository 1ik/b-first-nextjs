import { FeatureCategoryList } from "@bfirst/components-categories";
import { Icon } from "@bfirst/components-icon";
import { HCF } from "@bfirst/components-layout";
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
            <Link to="/categories">Categories</Link>
          </Breadcrumbs>
          <Link to="add">
            <div className="block md:hidden">
              <Icon size={20} name="create" variant="gradient" />
            </div>
            <div className="md:block hidden">
             <Button size="sm">Create Category</Button>
            </div>
          </Link>
        </div>
      </HCF.Header>
      <HCF.Content>
        <FeatureCategoryList />
      </HCF.Content>
    </HCF>
  );
}
