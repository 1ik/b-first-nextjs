import { FeatureAuthorAdd } from "@bfirst/components-authors";
import { Icon } from "@bfirst/components-icon";
import { HCF } from "@bfirst/components-layout";
import { Breadcrumbs } from "@bfirst/material-tailwind";
import { Link, useNavigate } from "react-router-dom";

export default function AuthorAdd() {
  const navigate = useNavigate();
  const added = () => {
    console.log("Author created successfully");
    navigate("/authors");
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
              <Icon name="home" variant="text" />
            </Link>
            <Link to="/authors">Authors</Link>
            <Link to="">Add New Author</Link>
          </Breadcrumbs>
        </div>
      </HCF.Header>
      <HCF.Content>
        <FeatureAuthorAdd onSuccess={added} onError={onError} />
      </HCF.Content>
    </HCF>
  );
}
