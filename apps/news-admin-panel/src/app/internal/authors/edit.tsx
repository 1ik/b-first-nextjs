import { FeatureAuthorEdit } from "@bfirst/components-authors";
import { Icon } from "@bfirst/components-icon";
import { HCF } from "@bfirst/components-layout";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

export default function AuthorEdit() {
  const navigate = useNavigate();
  const updated = () => {
    navigate("/authors");
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
            <Link to="/authors">Authors</Link>
            <Link to="">Edit Author</Link>
          </Breadcrumbs>
        </div>
      </HCF.Header>
      <HCF.Content>
        <FeatureAuthorEdit onSuccess={updated} onError={onError} />
      </HCF.Content>
    </HCF>
  );
}
