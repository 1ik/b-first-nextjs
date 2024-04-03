import { FeatureTrashCategoryList } from "@bfirst/components-categories";
import { Icon } from "@bfirst/components-icon";
import { HCF } from "@bfirst/components-layout";
import { Breadcrumbs } from "@bfirst/material-tailwind";
import { Link } from "react-router-dom";

export default function TrashList() {
  return (
    <HCF>
      <HCF.Header>
        <div className="flex flex-row w-full justify-between items-center">
          <Breadcrumbs>
            <Link to="/">
              <Icon name="home" variant="text" />
            </Link>
            <Link to="/trash-categories">Trash Categories</Link>
          </Breadcrumbs>
        </div>
      </HCF.Header>
      <HCF.Content>
        <FeatureTrashCategoryList />
      </HCF.Content>
    </HCF>
  );
}
