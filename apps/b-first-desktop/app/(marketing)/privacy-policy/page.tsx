import Navbar from "../../components/Navbar/Navbar";

export default function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <div className="desktop-container pt-16 pb-24">
        <h2 className="font-montserrat font-semibold text-xl md:text-4xl  mb-6 text-center">Privacy Policy</h2>
        <p className="font-montserrat font-semibold text-base  mb-5">
          At Bangladesh First, we are committed to protecting the privacy and security of our readers and visitors to
          our website. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information
          when you interact with our digital platform.
        </p>
        <h3 className="font-montserrat font-bold text-lg md:text-2xl  mb-6">Information We Collect :</h3>
        <p className="font-montserrat font-medium text-base  mb-4">
          <span className="font-semibold md:font-bold text-lg md:text-xl">Personal Information :</span> When you
          subscribe to our newspaper, sign up for newsletters, or engage with our website, we may collect personal
          information such as your name, email address, mailing address, phone number, and payment details.
        </p>
        <p className=" font-montserrat font-medium text-base  mb-4">
          <span className="font-montserrat font-semibold md:font-bold text-lg md:text-xl">Usage Data :</span> We
          automatically collect information about your interactions with our website, including pages visited, articles
          read, and time spent on our site. This data helps us understand how our readers engage with our content and
          improve our website's performance and user experience.
        </p>
        <p className="font-montserrat font-medium text-base  mb-8">
          <span className="font-semibold md:font-bold text-lg md:text-xl">Cookies and Similar Technologies :</span> We
          use cookies, web beacons, and other tracking technologies to collect information about your browsing behavior
          and preferences. This information may include your IP address, browser type, device identifiers, and referral
          URLs.
        </p>
        <h3 className="font-montserrat font-bold text-lg md:text-2xl  mb-8">How We Use Your Information:</h3>
        <p className="font-medium text-base  mb-2 font-montserrat">
          <span className="font-semibold md:font-bold text-lg md:text-xl">To Provide Services :</span> We use your
          personal information to fulfill your subscriptions, deliver newsletters, process payments, and provide access
          to our content.
        </p>
        <p className="font-montserrat font-medium text-base  mb-2">
          <span className="font-semibold md:font-bold text-lg md:text-xl">To Improve User Experience :</span> We analyze
          usage data and website analytics to optimize our website's performance, identify trends, and enhance the user
          experience.
        </p>
        <p className="font-montserrat font-medium text-base  mb-2">
          <span className="font-semibold md:font-bold text-lg md:text-xl">To Communicate with You :</span> We may use
          your contact information to send important updates, announcements, marketing communications, and promotional
          offers related to our products and services.
        </p>
        <p className="font-montserrat font-medium text-base  mb-10">
          <span className="font-semibold md:font-bold text-lg md:text-xl"> For Legal and Security Purposes :</span> We
          may use your information to comply with legal obligations, resolve disputes, investigate fraud, and protect
          the security of our website and users.
        </p>
        <h3 className="font-montserrat font-bold text-lg md:text-2xl  mb-4">Information Sharing and Disclosure :</h3>
        <p className="font-montserrat font-medium text-base">
          <span className="font-semibold md:font-bold text-lg md:text-xl"> Service Providers :</span> We may share your
          information with trusted third-party service providers who assist us in delivering our services, processing
          payments, and managing our website.
        </p>
        <p className="font-montserrat font-medium text-base">
          <span className="font-semibold md:font-bold text-lg md:text-xl"> Legal Compliance :</span> We may disclose
          your information when required by law or in response to valid legal requests, such as subpoenas, court orders,
          or government investigations.
        </p>
        <h3 className="font-montserrat font-bold text-lg md:text-2xl mt-6 mb-2 ">Data Security:</h3>
        We implement appropriate technical and organizational measures to protect your personal information from
        unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the
        internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
      </div>
    </div>
  );
}
