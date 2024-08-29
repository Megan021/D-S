import React from "react";
import { CiPhone, CiMail, CiLocationArrow1 } from "react-icons/ci";

const Contact = () => {
  return (
    <>
        <div className="w-full h-[32rem] pb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.162207336234!2d85.32924847507972!3d27.68138107619754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c757b96f8f%3A0x3e02763a2f6ff4e6!2sSysQube%20Technology%20Pvt.Ltd.!5e0!3m2!1sen!2snp!4v1724838619249!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0, outline: "none", filter: "grayscale(1) contrast(1) opacity(2)" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="container md:flex mt-12 py-4 md:py-14 gap-12 w-[90%] md:w-[80%]">
          <div className="md:flex-1">
               <h1 className="text-4xl font-bold">Our Locations</h1>
               <p className="py-5 mb-1 md:mb-0">Lorem proin gravida nibh enean s mauris enean sollicitudin, lom himenaeos conita summ vero lorem proin gravida nibh.</p>
               <div className="md:flex gap-14">
                    <ul className="leading-8 mb-6 md:mb-0">
                         <h2 className="font-semibold text-2xl pb-3">Kathmandu</h2>
                         <li className="flex items-center gap-2"><CiPhone />9801234567</li>
                         <li className="flex items-center gap-2"><CiMail />info@example.com</li>
                         <li className="flex items-center gap-2"><CiLocationArrow1 />Boudha, Kathmandu</li>
                    </ul>
                    <ul className="leading-8 mb-14 md:mb-0">
                         <h2 className="font-semibold text-2xl pb-3">Pokhara</h2>
                         <li className="flex items-center gap-2"><CiPhone />9801234567</li>
                         <li className="flex items-center gap-2"><CiMail />info@example.com</li>
                         <li className="flex items-center gap-2"><CiLocationArrow1 />NewRoad, Pokhara</li>
                    </ul>
               </div>
          </div>

          <div className="md:flex-1">
               <input type="text" placeholder="EMAIL" className="w-full border-b border-gray-400 mb-6 placeholder:text-sm focus:outline-none pb-1" />
               <input type="text" placeholder="SUBJECT" className="w-full border-b border-gray-400 mb-8 placeholder:text-sm focus:outline-none pb-1" />
               <textarea type="text" placeholder="MESSAGE" className="w-full bg-[#F6F6F6] p-5 mb-5 placeholder:text-sm focus:outline-none pb-1 resize-y h-24" />
               <button className="p-2 w-full bg-black text-white rounded-b">Send us a Message</button>
          </div>
        </div>
    </>
  );
};

export default Contact;
