import Navbar from "../../components/Navbar/Navbar";

export default function CookieSettings() {
  return (
    <>
      <Navbar />
      <div className="px-3 py-6 font-montserrat">
        <h1 className="font-semibold text-2xl mb-2">Cookie Settings Policy</h1>
        <h2 className="font-semibold text-xl mb-4">Introduction</h2>
        <p className="text-sm mb-4">
          Bangladesh First ("we," "us," or "our") uses cookies and similar technologies to enhance your browsing
          experience on our website (the "Website"), provide personalized content and ads, and analyze our traffic. This
          Cookie Settings Policy explains what cookies are, how we use them, and how you can manage your cookie
          preferences.
        </p>
        <h2 className=" font-semibold text-xl mb-2">What are Cookies?</h2>
        <p className=" text-sm mb-4">
          Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a
          website. They help the website recognize your device and remember information about your visit, such as your
          preferences and actions.
        </p>

        <h2 className="font-semibold text-xl mb-4">Types of Cookies We Use</h2>

        <h2 className="text-xl mb-2">We use the following types of cookies on our Website:</h2>

        <ul className="list-decimal pl-4 mb-4">
          <li className=" text-base mb-2">
            <span className="font-semibold">Essential Cookies :</span> These cookies are necessary for the website to
            function properly. They enable basic features such as page navigation and access to secure areas. The
            website cannot function properly without these cookies.
          </li>
          <li className="text-base mb-2">
            <span className="font-semibold">Performance Cookies :</span> These cookies collect information about how
            visitors use the website, such as which pages are visited most often and any error messages received. This
            data helps us improve the performance of the website.
          </li>
          <li className="text-base mb-2">
            <span className="font-semibold">Functional Cookies :</span> These cookies allow the website to remember
            choices you make (such as your username, language, or region) and provide enhanced, more personalized
            features.
          </li>
          <li className="text-base mb-2">
            <span className="font-semibold">Targeting/Advertising Cookies :</span>These cookies are used to deliver
            content and advertisements that are more relevant to you and your interests. They may also be used to limit
            the number of times you see an ad and to help measure the effectiveness of advertising campaigns.
          </li>
        </ul>

        <h2 className=" font-semibold text-xl mb-4"> Third-Party Cookies</h2>

        <p className=" text-sm mb-4">
          We may also allow third-party service providers to use cookies on our Website for the same purposes identified
          above. These third parties include analytics services and advertising networks that help us understand website
          usage and improve our marketing efforts.
        </p>
        <h2 className=" font-semibold text-xl mb-4">Managing Your Cookie Preferences</h2>
        <p className="text-sm mb-4">
          You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences by
          adjusting the settings in your web browser. Most browsers allow you to:
        </p>

        <ul className="list-disc pl-4">
          <li className="text-base mb-2">
            View what cookies are installed on your device and delete them on an individual basis.
          </li>
          <li className="text-base mb-2">Block third-party cookies.</li>
          <li className="text-base mb-2">Block cookies from specific websites.</li>
          <li className="text-base mb-2">Block all cookies from being set.</li>
        </ul>
      </div>
    </>
  );
}
