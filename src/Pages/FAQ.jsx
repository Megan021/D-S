import React from "react";
import Faq from "react-faq-component";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import FAQBanner from "../Components/ForFAQ/FAQBanner";
import { Link } from "react-router-dom";

const FAQ = () => {
  const data = {
    rows: [
      {
        title: "Are the Consolidated arts ?",
        content: `A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country almost unorthographic life.`,
      },
      {
        title: "What is the fee for your service ?",
        content:
          "Ad vivamus nullam scelerisque a neque suspendisse consectetur fringilla a suspendisse proin senectus lobortis lacinia sem parturient dapibus ad aliquet maecenas dis neque.",
      },
      {
        title: "What are Your payments terms ?",
        content: `A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted part A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country almost unorthographic life.`,
      },
      {
        title: "Where can I view my sales receipt?",
        content: `Torquent posuere vel id sagittis urna placerat ridiculus odio vestibulum donec tristique a nisl eros conubia condimentum nunc quisque nibh adipiscing habitasse parturient suspendisse proin a pharetra commodo leo tincidunt lobortis lacinia sem parturient dapibus.`,
      },
    ],
  };

  return (
    <>
    <FAQBanner />
      <div className="container mt-14 flex md:flex-row flex-col-reverse gap-14 items-center px-4 md:px-0">
        <div className="md:w-[60%]">
          <h2 className="font-medium text-4xl">Question's</h2>
        <Faq data={data} />
        </div>

        <div className="md:w-[40%]">
          <div className="border border-gray-300 shadow rounded p-10 pb-12">
          <h2 className="text-2xl font-medium">Have a question</h2>
          <p className="py-5">If you have an issue or question that requires immediate assistance, you can click the button below to chat live with a Customer Service representative.</p>
          <p className="pb-8">Please allow 06 - 12 business days from the time your package arrives back to us for a refund to be issued.</p>
          <Link to="/contact">
          <button className="p-2 px-4 bg-black text-white rounded flex items-center gap-2">Contact us<HiOutlineArrowUpRight className="text-sm" /></button>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
