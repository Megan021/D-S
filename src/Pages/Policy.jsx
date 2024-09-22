import React, { useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

const Policy = () => {
     const [selectedSection, setSelectedSection] = useState("privacy");

       // Animation variants for content appearance
  const contentVariants = {
     hidden: { opacity: 0, y: 20 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
   }; 

  return (
    <>
    <div className='container mt-14 md:flex gap-10 px-4 md:px-0'>

    <div className='md:w-[20%] mb-8'>
    <div className='sticky top-5'>
    <button className={`p-2 w-full rounded flex items-center gap-1 duration-300 ${
              selectedSection === "privacy" ? "bg-gray-300" : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setSelectedSection("privacy")}
          >
            <MdKeyboardArrowRight /> Privacy Policy
          </button>
          <br />
          <button
            className={`p-2 w-full rounded flex items-center gap-1 duration-300 -mt-3 ${
              selectedSection === "terms" ? "bg-gray-300" : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setSelectedSection("terms")}
          >
            <MdKeyboardArrowRight /> Terms & Conditions
          </button>
    </div>
     </div>

     <motion.div
          className="md:w-[80%] border border-gray-300 shadow rounded"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          key={selectedSection} 
        >
          {selectedSection === "privacy" && (
            <div>
              <h2 className="text-2xl font-semibold my-6 text-center">
                Privacy Policy
              </h2>
              <div className="p-8">
                <h2 className="font-medium mb-3">
                  WELCOME TO SHELLA’S PRIVACY POLICY
                </h2>
                <ul className="list-disc ml-4 leading-7 text-sm">
                  <li>
                    Complimentary ground shipping within 1 to 7 business days
                  </li>
                  <li>
                    In-store collection available within 1 to 7 business days
                  </li>
                  <li>
                    Next-day and Express delivery options also available
                  </li>
                  <li>
                    Purchases are delivered in an orange box tied with a Bolduc
                    ribbon, with the exception of certain items
                  </li>
                  <li>
                    See the delivery FAQs for details on shipping methods, costs
                    and delivery times
                  </li>
                </ul>

                <h2 className="font-medium mb-3 mt-10">
                  THE TYPE OF PERSONAL INFORMATION WE COLLECT
                </h2>
                <ul className="list-disc ml-4 leading-7 text-sm">
                  <li>
                    Credit Card: Visa, MasterCard, Discover, American Express,
                    JCB, Visa Electron. The total will be charged to your card
                    when the order is shipped.
                  </li>
                  <li>
                    Shella features a Fast Checkout option, allowing you to
                    securely save your credit card details so that you don't
                    have to re-enter them for future purchases.
                  </li>
                  <li>
                    PayPal: Shop easily online without having to enter your
                    credit card details on the website.Your account will be
                    charged once the order is completed. To register for a
                    PayPal account, visit the website paypal.com.
                  </li>
                </ul>

                <h2 className="font-medium mb-3 mt-10">
                  HOW WE COLLECT PERSONAL INFORMATION
                </h2>
                <p>
                  Items returned within 14 days of their original shipment date
                  in same as new condition will be eligible for a full refund or
                  store credit. Refunds will be charged back to the original
                  form of payment used for purchase. Customer is responsible for
                  shipping charges when making returns and shipping/handling
                  fees of original purchase is non-refundable.
                </p>
              </div>
            </div>
          )}

          {selectedSection === "terms" && (
            <div>
              <h2 className="text-2xl font-semibold my-6 text-center">
                Terms & Conditions
              </h2>
              <div className="p-8">
                <h2 className="font-medium mb-3">
                  TERMS AND CONDITIONS OVERVIEW
                </h2>
                <p>
                  This website is operated by Shella. Throughout the site, the
                  terms “we”, “us” and “our” refer to Shella. Shella offers this
                  website, including all information, tools and services
                  available from this site to you, the user, conditioned upon
                  your acceptance of all terms, conditions, policies and notices
                  stated here.
                </p>

                <h2 className="font-medium mb-3 mt-10">
                  ONLINE STORE TERMS
                </h2>
                <ul className="list-disc ml-4 leading-7 text-sm">
                  <li>
                    By agreeing to these Terms of Service, you represent that
                    you are at least the age of majority in your state or
                    province of residence, or that you are the age of majority
                    in your state or province of residence and you have given us
                    your consent to allow any of your minor dependents to use
                    this site.
                  </li>
                  <li>
                    You may not use our products for any illegal or unauthorized
                    purpose nor may you, in the use of the Service, violate any
                    laws in your jurisdiction (including but not limited to
                    copyright laws).
                  </li>
                  <li>
                    You must not transmit any worms or viruses or any code of a
                    destructive nature.
                  </li>
                </ul>

                <h2 className="font-medium mb-3 mt-10">
                  GENERAL CONDITIONS
                </h2>
                <p>
                  We reserve the right to refuse service to anyone for any
                  reason at any time.
                </p>
                <p>
                  You understand that your content (not including credit card
                  information), may be transferred unencrypted and involve (a)
                  transmissions over various networks; and (b) changes to
                  conform and adapt to technical requirements of connecting
                  networks or devices. Credit card information is always
                  encrypted during transfer over networks.
                </p>
              </div>
            </div>
          )}
        </motion.div>
    </div>
    </>
  )
}

export default Policy