import { HCF } from "@bfirst/components-layout";
import { FeatureTagAdd } from "@bfirst/components-tags";
import { HomeIcon } from "@heroicons/react/24/solid";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

export default function TagAdd() {
  const navigate = useNavigate();
  const added = () => {
    console.log("tag created successfully");
    navigate("/tags");
  };

  const onError = (error: any) => {
    console.log("error", error);
  };

  return (
    <HCF>
      <HCF.Header>
        <div className="flex flex-row w-full justify-between">
          <Breadcrumbs>
            <Link to="/">
              <HomeIcon className="w-5 h-5" />
            </Link>
            <Link to="/tags">Tags</Link>
            <Link to="">Add New Tag</Link>
          </Breadcrumbs>
        </div>
      </HCF.Header>
      <HCF.Content>
        <FeatureTagAdd onSuccess={added} onError={onError} />
      </HCF.Content>
    </HCF>
  );
}
