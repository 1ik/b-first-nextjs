import Navbar from "../../components/Navbar/Navbar";

export default function Terms() {
  return (
    <>
      <Navbar />
      <div className="desktop-container pt-16 pb-24 font-montserrat">
        <h1 className="font-semibold text-3xl mb-6 text-center">Terms of Use</h1>
        <ul className="list-decimal pl-4 text-base">
          <li className="mb-2">
            <span className="font-semibold text-lg">Acceptance of Terms</span> <br /> By accessing and using the Bangladesh
            First website BangladeshFirst.com, you agree to comply with and be bound by these Terms of Use "Terms". If
            you do not agree to these Terms, please do not use the Website.
          </li>
          <li className="mb-2">
            <span className="font-semibold text-lg">Changes to Terms</span> <br />
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting.
            Your continued use of the Website after changes are posted constitutes your acceptance of the modified
            Terms.
          </li>
          <li className="mb-2">
            <span className="font-semibold text-lg">Use of Content</span> <br />
            All content provided on the Website, including articles, videos, images, and other materials "Content", is
            for informational purposes only. You may not reproduce, distribute, modify, or otherwise use the Content
            without prior written permission from Bangladesh First.
          </li>
          <li className="mb-2">
            <span className="font-semibold text-lg">User Conduct</span>
          </li>
          <h3 className="my-4 font-medium">You agree not to:</h3>
          <ul className="list-disc mb-2 pl-6">
            <li className="mb-2">Use the Website for any unlawful purpose.</li>
            <li className="mb-2">
              Post or transmit any material that is defamatory, obscene, fraudulent, or otherwise objectionable.
            </li>
            <li className="mb-2">
              Violate the rights of any third party, including intellectual property rights and privacy rights.
            </li>
          </ul>
          <li className="mb-2">
            <span className="font-semibold text-lg">User-Generated Content</span> <br />
            Users may submit comments, articles, and other content "User-Generated Content". By submitting
            User-Generated Content, you grant News Portal Name a non-exclusive, royalty-free, perpetual, and worldwide
            license to use, reproduce, and distribute your content in any media. You represent that you
          </li>
        </ul>
      </div>
    </>
  );
}
