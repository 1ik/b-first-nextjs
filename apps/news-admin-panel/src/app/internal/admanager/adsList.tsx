import { Breadcrumbs, Button } from "@bfirst/material-tailwind";
import { Icon } from "@bfirst/components-icon";
import { HCF } from "@bfirst/components-layout";
import { Link } from "react-router-dom";
import {AdList} from "@bfirst/components-ad-manager"
import CreateAd from "./createAd";
export default function AdsList() {
  return (
    <HCF>
      <HCF.Header>
        <div className="flex flex-row w-full justify-between items-center">
          <Breadcrumbs>
            <Link to="/">
              <Icon name="home" variant="text" />
            </Link>
            <Link to="/stories">Ads List</Link>
          </Breadcrumbs>
          <div className="flex items-center gap-x-4">
            <Link to="/ads-list/create-ad">
              <div className="block md:hidden">
                <Icon size={20} name="create" variant="gradient" />
              </div>
              <div className="hidden md:block">
                <Button size="sm">Create ADS</Button>
              </div>
            </Link>
          </div>
        </div>
      </HCF.Header>
      <HCF.Content>
        <CreateAd/>
        <AdList />
      </HCF.Content>
    </HCF>
  );
}
