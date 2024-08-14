import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import "./contactUs.css";

const Button = ({ isBtn, text, icon, type }) => {
  return (
    <button
      type={type}
      className={
        isBtn ? `odinary_btn bg-orange-500` : `primary_btn bg-orange-500`
      }
    >
      {icon}
      <div className="btn_text">{text}</div>
    </button>
  );
};

const ContactUs = () => {
  return (
    <div className="main">
      <div className="content">
        <h1 className="text-orange-500">CONTACT US</h1>
        <p>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.{" "}
        </p>
      </div>
      <section className="form_container">
        <div className="form_right">
          <div className="top_btn">
            <Button
              text="VIA SUPPORT CHAT"
              icon={<BiMessageDetail fontSize={"20px"} />}
            />
            <div className="bottom_btn">
              <Button text="VIA CALL" icon={<IoIosCall fontSize={"20px"} />} />
            </div>
          </div>
          <Button
            isBtn={true}
            text="VIA CALL"
            icon={<GrMail fontSize={"20px"} />}
          />
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form_inputs">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className="form_inputs">
              <label htmlFor="email">E-Mail</label>
              <input type="email" name="email" />
            </div>
            <div className="form_inputs">
              <label htmlFor="text">Text</label>
              <textarea rows={8} name="text" />
            </div>
            <div className="submit_btn">
              <Button text={"Submit"} type={"button "} />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
