import Navbar from "../../components/Navbar/Navbar";

export default function Accessibility() {
  return (
    <>
      <Navbar />
      <div className="desktop-container pt-8 font-montserrat">
        <h1 className="font-semibold text-3xl mb-8 text-center">Accessibility & Closed Captioning Policy</h1>
        <p className="text-sm mb-4">
          Bangladesh First ("we," "us," or "our") is committed to ensuring digital accessibility for all users,
          including individuals with disabilities. We strive to continually improve the user experience for everyone and
          apply relevant accessibility standards. This policy outlines our efforts to provide an accessible website and
          our approach to closed captioning (CC) for multimedia content.
        </p>

        <ul className="list-decimal pl-4 mb-4">
          <li className="text-base mb-2">
            <span className="font-semibold">Adherence to Standards :</span> We aim to adhere to the Web Content
            Accessibility Guidelines (WCAG) 2.1, Level AA, as well as other applicable accessibility standards.
          </li>

          <li className="text-base mb-2">
            <span className="font-semibold">Regular Testing :</span> We conduct regular testing of our website to
            identify and address accessibility issues. This includes both automated testing tools and manual testing by
            individuals with disabilities.
          </li>
          <li className="text-base mb-4">
            <span className="font-semibold">User Feedback :</span> We welcome feedback from our users on how to improve
            accessibility. If you encounter any accessibility barriers on our website, please let us know.
          </li>
        </ul>

        <h2 className="font-semibold text-lg mb-4">Closed Captioning (CC) Policy</h2>
        <p className="text-sm mb-4">
          We understand the importance of providing accessible content to users who are deaf or hard of hearing. Our
          closed captioning policy includes:
        </p>
        <ul className="list-decimal pl-4 mb-4">
          <li className="text-base mb-2">
            <span className="font-semibold">Captioned Videos :</span> We provide closed captions for all pre-recorded
            video content published on our website. This ensures that users can access and understand the information
            regardless of their hearing ability.
          </li>
          <li className="text-base mb-2">
            <span className="font-semibold">Real-Time Captioning :</span> For live-streamed events, we strive to provide
            real-time captioning when possible. If real-time captioning is not available, we aim to offer a transcript
            or captioned version of the event recording as soon as possible after the event.
          </li>
          <li className="text-base mb-2">
            <span className="font-semibold">Accuracy and Synchronization :</span> We ensure that captions are accurate,
            complete, and synchronized with the audio content of the videos. This includes capturing spoken dialogue and
            relevant non-speech information, such as sound effects and music.
          </li>
        </ul>

        <h2 className="font-semibold text-lg mb-4">Reporting Accessibility Issues</h2>
        <p className="text-sm mb-4">
          While we are committed to providing an accessible website, users can also take certain steps to enhance their
          experience:
        </p>

        <ul className="list-decimal pl-4 mb-4">
          <li className="text-base mb-2">
            <span className="font-semibold">Browser Settings :</span> Adjust your browser settings to improve
            readability and usability. Most browsers allow you to change text size, font, and color settings.
          </li>
          <li className="text-base mb-2">
            <span className="font-semibold">Assistive Technologies :</span> Use assistive technologies such as screen
            readers, speech recognition software, and screen magnifiers to interact with our website.
          </li>
          <li className="text-base mb-2">
            <span className="font-semibold"> Feedback :</span> Provide feedback on your experience with our website and
            closed captioning services. Your input helps us identify areas for improvement and better serve our diverse
            audience.
          </li>
        </ul>
        <h2 className="font-semibold text-lg mb-4">User Responsibilities</h2>
        <p className="text-sm mb-4">
          If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
        </p>
        <ul className="list-disc pl-4 mb-4">
          <li className="text-base mb-2">
            <span className="font-semibold">Email : </span>editor@bangladeshfirst.com
          </li>
          <li className="text-base mb-2">
            <span className="font-semibold">Phone : </span>+880 961 332 2782
          </li>
          <li className="text-base mb-2">
            <span className="font-semibold">Address : </span>115 Kazi Nazrul Islam Avenue, Level 12, Bangla Motor, Dhaka 1000,
            Bangladesh
          </li>
        </ul>
        <p className="text-sm mb-4">
          We aim to respond to accessibility feedback within 10 business days and to provide a resolution within 20
          business days
        </p>
        <h2 className="font-semibold text-lg mb-4">Policy Updates</h2>
        <p className="text-sm mb-4">
          We may update this Accessibility & Closed Captioning Policy from time to time to reflect changes in our
          practices or for other operational, legal, or regulatory reasons. We will notify users of any significant
          changes by posting the updated policy on our website with an updated effective date.
        </p>
        <p className="text-sm mb-4">Effective Date : May 25, 2024</p>
      </div>
    </>
  );
}
