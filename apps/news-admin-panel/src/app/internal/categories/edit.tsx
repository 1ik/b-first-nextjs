import { FeatureCategoryEdit } from "@bfirst/components-categories";
import { HCF } from "@bfirst/components-layout";
import { HomeIcon } from "@heroicons/react/24/solid";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

export default function CategoryEdit() {
  const navigate = useNavigate();
  const updated = () => {
    navigate("/categories");
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
            <Link to="/categories">Categories</Link>
            <Link to="">Edit Category</Link>
          </Breadcrumbs>
        </div>
      </HCF.Header>
      <HCF.Content>
        <FeatureCategoryEdit onSuccess={updated} onError={onError} />
      </HCF.Content>
    </HCF>
  );
}
