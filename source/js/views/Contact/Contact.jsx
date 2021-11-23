import React from "react";
import { ContactMsg } from "../../components/Contact";

export default function Contact() {
  return (
    <div className="contactMsg">
      <h1>Contact Me</h1>
      <p>
        Start a conversation with me below or send an email to{" "}
        <strong>syneva@gmail.com</strong>
      </p>
      <p>Contact form temporarily unavailable. You can find and message me on <a href="https://www.linkedin.com/in/syneva-runyan/" rel="noopener noreferrer" target="_blank" >linkedin</a> instead.</p>
      {/* <ContactMsg /> */}
    </div>
  );
}
