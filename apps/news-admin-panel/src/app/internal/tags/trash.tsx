import { Icon } from "@bfirst/components-icon";
import { HCF } from "@bfirst/components-layout";
import { FeatureTrashTagList } from "@bfirst/components-tags";
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
            <Link to="/trash-tags">Trash Tags</Link>
          </Breadcrumbs>
        </div>
      </HCF.Header>
      <HCF.Content>
        <FeatureTrashTagList />
      </HCF.Content>
    </HCF>
  );
}
