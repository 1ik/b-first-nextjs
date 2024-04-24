import { Icon } from "@bfirst/components-icon";
import { HCF } from "@bfirst/components-layout";
import { FeatureStoryUpdate } from "@bfirst/components-stories";
import { Breadcrumbs } from "@bfirst/material-tailwind";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function StoryAdd() {
  const navigate = useNavigate();
  const added = () => {
    navigate("/stories");
  };

  const onError = (error: any) => {
    console.log("error", error);
  };

  const { storyId } = useParams();

  return (
    <HCF>
      <HCF.Header>
        <div className="flex flex-row w-full justify-between">
          <Breadcrumbs>
            <Link to="/">
              <Icon name="home" variant="text" />
            </Link>
            <Link to="/stories">Stories</Link>
            <Link to="">Update Story</Link>
          </Breadcrumbs>
        </div>
      </HCF.Header>
      <HCF.Content>
        <FeatureStoryUpdate storyId={storyId} onSuccess={added} onError={onError} />
      </HCF.Content>
    </HCF>
  );
}
