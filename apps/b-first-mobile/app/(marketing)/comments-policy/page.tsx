import Navbar from "../../components/Navbar/Navbar";

export default function CommentsPolicy() {
  return (
    <div>
      <Navbar />
      <div className="px-3">
        <h2 className="font-semibold text-xl text-center font-montserrat mt-4 mb-8">Comment Policy</h2>
        <p className="font-semibold sm:text-lg font-montserrat mb-8">
          At Bangladesh First, we value open dialogue and constructive discourse as integral components of our online
          community. Our comment section provides readers with an opportunity to engage with our content, share their
          perspectives, and contribute to meaningful discussions. To maintain a respectful and welcoming environment for
          all participants, we have established the following comment policy:
        </p>

        <ul className="list-decimal pl-6">
          <li className="font-medium text-base font-montserrat  mb-4 pl-5">
            Comments must be respectful and courteous towards others, regardless of their race, ethnicity, religion,
            gender, sexual orientation, or political beliefs. Personal attacks, insults, hate speech, or discriminatory
            language will not be tolerated.
          </li>
          <li className="font-medium text-base font-montserrat mb-4 pl-5">
            2. Comments should be relevant to the article or topic being discussed. Off-topic or spammy comments will be
            removed to ensure the conversation remains focused and productive.
          </li>
          <li className="font-medium text-base font-montserrat mb-4 pl-5">
            We request that commenters refrain from using profane language, obscenities, or vulgarities. Such language
            detracts from the quality of the discussion and may offend other readers.
          </li>
          <li className="font-medium text-base font-montserrat mb-4 pl-5">
            Comments intended to provoke, harass, or intimidate others will not be tolerated. This includes trolling,
            cyberbullying, or any form of malicious behavior directed towards individuals or groups.
          </li>
          <li className="font-medium text-base font-montserrat mb-4 pl-5">
            We encourage commenters to provide opinions supported by facts and evidence. Misinformation, conspiracy
            theories, or unsubstantiated claims may be removed to maintain the integrity of the discussion.
          </li>
          <li className="font-medium text-base font-montserrat mb-4 pl-5">
            Avoid sharing personal information about yourself or others in the comment section. Respect the privacy of
            individuals and refrain from posting sensitive or confidential information.
          </li>
          <li className="font-medium text-base font-montserrat mb-4 pl-5">
            Our moderators reserve the right to remove comments that violate our comment policy or disrupt the
            community. Repeat offenders may be subject to temporary or permanent bans from commenting on our platform.{" "}
          </li>
        </ul>
        <p className="font-medium text-xl font-montserrat mb-4 mt-8">
          By participating in the comment section, you agree to adhere to our comment policy and guidelines. We
          appreciate your cooperation in creating a respectful and constructive environment for all members of our
          online community.
        </p>
        <p className="font-medium text-lg font-montserrat mb-4">
          Thank you for your contributions and for being a valued member of Bangladesh First's digital platform.
        </p>
      </div>
    </div>
  );
}
