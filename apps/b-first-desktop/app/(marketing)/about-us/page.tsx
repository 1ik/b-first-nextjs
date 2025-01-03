import Navbar from "../../components/Navbar/Navbar";

export const metadata = {
  title: "About Us | Bangladesh First",
};

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="desktop-container font-montserrat pt-16">
        <h1 className="font-semibold text-3xl mb-8 text-center">About Us</h1>
        <p className="text-sm mb-4">Welcome to Bangladesh First!</p>
        <p className="text-sm mb-4">
          We are dedicated to providing our readers with the most accurate, timely, and engaging news content. Our
          mission is to keep you informed about the world around you, covering a wide range of topics that matter to
          you—from breaking news and in-depth investigations to insightful analysis and human-interest stories.
        </p>

        <h2 className="font-semibold text-lg mb-2">Who We Are</h2>
        <p className="text-sm mb-4">
          Founded in 2024, Bangladesh First has grown into a trusted source of news and information for a diverse
          audience. Our team of experienced journalists, editors, and contributors are passionate about delivering
          high-quality journalism that adheres to the highest standards of accuracy, fairness, and integrity.
        </p>

        <h2 className="font-semibold text-lg mb-2">Our Values</h2>
        <p className="text-sm mb-4">
          At the core of our operation are the values of truth, transparency, and trust. We believe in the power of
          journalism to inform, educate, and inspire. We are committed to:
        </p>

        <ul className="list-decimal pl-4 mb-4">
          <li className="text-base mb-2">
            <span className="font-semibold mr-2">Accuracy : </span>Ensuring all our reports are well-researched and
            fact-checked.
          </li>
          <li className="text-base mb-2">
            <span className="font-semibold mr-2">Fairness :</span> Presenting news in an unbiased manner, giving voice
            to multiple perspectives.
          </li>
          <li className="text-base mb-2">
            <span className="font-semibold mr-2">Integrity :</span> Upholding ethical standards in all our journalistic
            endeavors.
          </li>
        </ul>

        <h2 className="font-semibold text-lg mb-4">Community Engagement</h2>
        <p className="text-sm mb-4">
          We believe in the importance of engaging with our readers and fostering a sense of community. Your feedback is
          invaluable to us, and we encourage you to share your thoughts and insights on our articles. We are also active
          on social media platforms, where you can follow us for real-time updates and join the conversation.
        </p>
        <h2 className="font-semibold text-lg mb-4">Contact Us</h2>
        <p className="text-sm mb-4">
          We are here to serve you and welcome any questions, comments, or suggestions you may have. Feel free to reach
          out to us:
        </p>

        <h2 className="font-semibold text-lg mb-4">Reporting Accessibility Issues</h2>
        <p className="text-sm mb-4">
          While we are committed to providing an accessible website, users can also take certain steps to enhance their
          experience:
        </p>

        <ul className="list-disc pl-4 mb-4">
          <li className="text-base mb-2">
            <span className="font-semibold">Email : </span>editor@bangladeshfirst.com
          </li>
          <li className="text-base mb-2">
            <span className="font-semibold">Phone : </span>+880 961 332 2782
          </li>
          <li className="text-base mb-2">
            <span className="font-semibold">Address : </span>115 Kazi Nazrul Islam Avenue, Level 12, Bangla Motor, Dhaka
            1000, Bangladesh
          </li>
        </ul>

        <p className="text-sm mb-4">
          Thank you for choosing Bangladesh First as your source of news. We are honored to have you as a reader and
          look forward to keeping you informed and engaged with the world around you.
        </p>
      </div>
    </>
  );
}
