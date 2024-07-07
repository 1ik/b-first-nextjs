import { Icon } from "@bfirst/components-icon";
import { HCF } from "@bfirst/components-layout";
import { Breadcrumbs } from "@bfirst/material-tailwind";
import { Link } from "react-router-dom";
import { AdCreate } from "@bfirst/components-ad-manager";
export default function CreateAd() {
  return (
    <HCF>
      <HCF.Header>
        <div className="flex flex-row w-full justify-between">
          <Breadcrumbs>
            <Link to="/">
              <Icon name="home" variant="text" />
            </Link>
            <Link to="/ads-list">Ads List</Link>
            <Link to="">Create Ads</Link>
          </Breadcrumbs>
        </div>
      </HCF.Header>
      <HCF.Content>
        <AdCreate />
      </HCF.Content>
    </HCF>
  );
}
