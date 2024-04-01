import { Icon } from "@bfirst/components-icon";
import { HCF } from "@bfirst/components-layout";
import { FeatureTrashStories } from "@bfirst/components-stories";
import { Breadcrumbs } from "@bfirst/material-tailwind";
import { Link } from "react-router-dom";

export default function Trash() {
  return (
    <HCF>
      <HCF.Header>
        <div className="flex flex-row w-full justify-between items-center">
          <Breadcrumbs>
            <Link to="/">
              <Icon name="home" variant="text" />
            </Link>
            <Link to="/trash">Trash Stories</Link>
          </Breadcrumbs>
        </div>
      </HCF.Header>
      <HCF.Content>
        <FeatureTrashStories />
      </HCF.Content>
    </HCF>
  );
}
