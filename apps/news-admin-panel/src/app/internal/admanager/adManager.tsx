import { AdsList } from "@bfirst/components-ad-manager";
import { HCF } from "@bfirst/components-layout";

function AdManager() {
  return (
    <HCF>
      <HCF.Content>
        <AdsList />
      </HCF.Content>
    </HCF>
  );
}

export default AdManager;
