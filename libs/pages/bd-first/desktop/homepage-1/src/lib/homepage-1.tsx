import { Divider } from '@bd-first/components/common/divider';
import { Card1 } from '@bd-first/components/bd-first/card1';
import { Card2 } from '@bd-first/components/bd-first/card-2';

export function Homepage1() {
  return (
    <div className={'px-24 py-2'}>
      <div className="flex gap-2">
        {/* Left Section */}
        <div className="flex flex-col w-2/3 px-2">
          <div className="flex gap-4 py-2">
            <div className="w-1/2">
              <Card1
                category="Bangladesh Election"
                title="Awami League develops, BNP burns people: Sheikh Hasina"
                summary1="She said, “Those who are burning innocent people in the name of blockade are the ones who want to disrupt the elections”"
                publishedAt="28 minutes ago"
                showImage
                imageUrl="/images/sheikh-hasina.png"
                imageAlt="sheikh-hasina"
                summary2="Picture: She said, “Those who are burning innocent people in the name of blockade are the ones who want to disrupt the elections”"
              />
            </div>
            <Divider orientation="vertical" />
            <div className="flex flex-col w-1/2 gap-4">
              <Card2
                category="BUSINESS"
                title="BKMEA's letter to buyers asking for increased price on ready-made garments"
                summary="She said, “Those who are burning innocent people in the name of blockade are the ones who want to disrupt the elections”"
                showPublishedAt
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
                showPublishedAt
                publishedAt="56 minutes ago"
                imageUrl="/images/sheikh-hasina.png"
                imageAlt="sheikh-hasina"
              />
            </div>
          </div>
          <Divider />
          <div>loading....</div>
          <Divider />
          <div className="flex gap-4">
            <Card2
              category="SAVAR"
              title="Foreign debt has increased by 39 thousand crores in one year"
              summary="She said, “Those who are burning innocent people in the name of blockade are the ones who want to disrupt the elections”. Injured Dalim was first taken to the emergency department of Munshiganj General Hospital."
              showImage
              imageUrl="/images/sheikh-hasina.png"
              imageAlt="sheikh-hasina"
              titleProps={{ size: 'sm' }}
              className={`w-2/3`}
            />
            <Divider orientation="vertical" />
            <Card2
              category="MUNSIGANJ"
              title="Supporter of AL candidate' shot dead in Munshiganj"
              summary={`A man was shot dead and another injured after "supporters of the Munshiganj-3 Awami League candidate " came under an attack in Munshikandi area of Munshiganj Sadar upazila early today.`}
              imageUrl="/images/sheikh-hasina.png"
              imageAlt="sheikh-hasina"
              titleProps={{ size: 'sm' }}
              className={`w-1/3`}
            />
          </div>
          <a
            href=""
            className="uppercase underline text-SecondaryBlack font-semibold font-Roboto text-[16px] leading-[18.5px] tracking-[-.5px]"
          >
            Read More on National
          </a>
          <Divider orientation="vertical" />
          Loading...
          <Divider color="gray" orientation="vertical" />
          <div className="flex gap-4">
            <Card2
              category="BANGLADESH CRICKET"
              title="Here, take these year-end awards and be done with it"
              summary="Won't the ICC reveal its teams of the year soon? Won't this website hand out its annual awards, so people on Instagram and Twitter (currently X) can outrage over all of it? It's way too much. Haven't the rest of us watched enough cricket in 2023 to ..."
              showImage
              imageUrl="/images/sheikh-hasina.png"
              imageAlt="sheikh-hasina"
              titleProps={{ size: 'sm' }}
              className={`w-2/3`}
            />
            <Divider orientation="vertical" />
            <Card2
              category="NEWZEALAND SERIES"
              title="Hathurusinghe wants Shanto to be considered for full-time captaincy"
              summary={`Is the Bangladesh dressing room a better place without some of the senior - even iconic - players around? At the end of what he called a "successful tour" of New Zealand.`}
              imageUrl="/images/sheikh-hasina.png"
              imageAlt="sheikh-hasina"
              titleProps={{ size: 'sm' }}
              className={`w-1/3`}
            />
          </div>
          <a
            href=""
            className="uppercase underline text-SecondaryBlack font-semibold font-Roboto text-[16px] leading-[18.5px] tracking-[-.5px]"
          >
            Read More on National
          </a>
        </div>

        {/* Largest Vertical Divider */}
        <Divider orientation="vertical" />

        {/* Right Section */}
        <div className="flex w-1/3">2nd</div>
      </div>
    </div>
  );
}

export default Homepage1;
