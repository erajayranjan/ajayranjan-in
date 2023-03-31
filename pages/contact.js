import React from "react";
import ContactForm from "../components/ContactForm";
import Divider from "@mui/material/Divider";
import { EmailRounded, LocationOnRounded, PhoneAndroidRounded, PublicOutlined, WebStories } from "@mui/icons-material";
import Requests from "./requests";


const contact = () => {
  return (
    <div className=" flex justify-center w-full ">

      <div className="sm:flex flex-wrap sm:w-4/5 shadow-xl bg-gray-100">
        <div className="p-2 sm:w-1/2  bg-blue-500 text-gray-200">
          <div className="flex my-4">
            <label className=" "> 
              <span> 
                <LocationOnRounded className="bg-blue-500 rounded-full text-blue-100 p-2 m-1 text-3xl" />
              </span>
              Address: 
              <address className="px-2 ml-8">
                <span>
                313, Bhartiya Nagar Ward No. 26
                </span>
                <br></br>
                <span>
                Saharsa, Bihar - 852201 India
                </span>
              </address>
            </label>
            <p></p>
          </div>
          <div className="flex my-4 ">
            <label className=" "> 
              <span> 
                <PhoneAndroidRounded className="bg-blue-500 rounded-full text-blue-100 p-2 m-1 text-3xl" />
              </span>
              Phone:
            <a href="tel:+91-9873107342"> +91-9873 1073 42</a>
            </label>
          </div>
          <div className="flex my-4 ">
            <label className=" "> 
              <span> 
                <EmailRounded className="bg-blue-500 rounded-full text-blue-100 p-2 m-1 text-3xl" />
              </span>
              Email:
            <a href="mailto:ajayranjan@live.com" className="hover:text-blue-800"> ajayranjan@live.com</a>
            </label>
          </div>
          <div className="flex my-4 ">
            <label className=" "> 
              <span> 
                <PublicOutlined className="bg-blue-500 rounded-full text-blue-100 p-2 m-1 text-3xl" />
              </span>
              Website:
            <a href="https://ajayranjan.in" className="hover:text-blue-800"> https://ajayranjan.in</a>
            </label>

          </div>
        </div>
        <div className="p-2 sm:w-1/2">
          <ContactForm />
        </div>
        {/* <Requests /> */}
      </div>

    </div>
  );
};

export default contact;
