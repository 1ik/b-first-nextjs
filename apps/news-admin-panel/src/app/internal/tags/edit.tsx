import { Icon } from "@bfirst/components-icon";
import { HCF } from "@bfirst/components-layout";
import { FeatureTagEdit } from "@bfirst/components-tags";
import { Breadcrumbs } from "@bfirst/material-tailwind";
import { Link, useNavigate } from "react-router-dom";

export default function TagEdit() {
  const navigate = useNavigate();
  const updated = () => {
    navigate("/tags");
  };

  const onError = (error: unknown) => {
    console.log("error", error);
  };

  return (
    <HCF>
      <HCF.Header>
        <div className="flex flex-row w-full justify-between">
          <Breadcrumbs>
            <Link to="/">
              <Icon name="home" variant="text" />
            </Link>
            <Link to="/tags">tags</Link>
            <Link to="">Edit Tag</Link>
          </Breadcrumbs>
        </div>
      </HCF.Header>
      <HCF.Content>
        <FeatureTagEdit onSuccess={updated} onError={onError} />
      </HCF.Content>
    </HCF>
  );
}
