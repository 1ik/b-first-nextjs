import { Divider } from '@bd-first/components/common/divider';
import { Card1 } from '@bd-first/components/bd-first/card1';
import { Card2 } from '@bd-first/components/bd-first/card-2';

export function Homepage1() {
  return (
    <div className={'px-24 py-2'}>
      <div className="flex gap-2">
        <div className="flex flex-col w-2/3 px-2">
          <div className="flex gap-4 py-2">
            <div className="w-1/2">
              <Card1 category="Bangladesh Election" />
            </div>
            <Divider orientation="vertical" />
            <div className="flex flex-col w-1/2 gap-4">
              <Card2
                category="BUSINESS"
                title="BKMEA's letter to buyers asking for increased price on ready-made garments"
                summary="She said, “Those who are burning innocent people in the name of blockade are the ones who want to disrupt the elections”"
                publishedAt="56 minutes ago"
                showImage
                imageUrl="/images/sheikh-hasina.png"
                imageAlt="sheikh-hasina"
              />
              <Divider />
              <Card2
                category="BUSINESS"
                title="BKMEA's letter to buyers asking for increased price on ready-made garments"
                summary="She said, “Those who are burning innocent people in the name of blockade are the ones who want to disrupt the elections”"
                publishedAt="56 minutes ago"
                imageUrl="/images/sheikh-hasina.png"
                imageAlt="sheikh-hasina"
              />
            </div>
          </div>
          <Divider />
          <div></div>
        </div>
        <Divider orientation="vertical" />
        <div className="flex w-1/3">2nd</div>
      </div>
    </div>
  );
}

export default Homepage1;
