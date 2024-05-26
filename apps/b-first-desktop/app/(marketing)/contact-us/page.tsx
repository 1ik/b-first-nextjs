import Navbar from "../../components/Navbar/Navbar";

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="desktop-container pt-16 pb-24 font-montserrat">
        <h1 className="font-semibold text-3xl mb-2">Contact Us</h1>

        <p className="text-sm mb-4">
          We are here to serve you and welcome any questions, comments, or suggestions you may have. Feel free to reach
          out to us:
        </p>

        <ul className="list-disc pl-4 mb-4">
          <li className="text-base mb-2">
            <span className="font-semibold mr-2">Email :</span>editor@bangladeshfirst.com
          </li>
          <li className="text-base mb-2">
            <span className="font-semibold mr-2">Phone :</span>+880 961 332 2782
          </li>
          <li className="text-base mb-2">
            <span className="font-semibold mr-2">Mail :</span>115 Kazi Nazrul Islam Avenue, Level 12, Bangla Motor,
            Dhaka 1000, Bangladesh
          </li>
        </ul>
      </div>
    </>
  );
}
