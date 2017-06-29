import React from "react";
import { ContactMsg } from "../../components/Contact";

export default function Contact() {
  return (
    <div className="contactMsg">
      <h1>Contact Me</h1>
      <p>
        Start a conversation with me below or send an email to{" "}
        <bold>syneva@gmail.com</bold>
      </p>
      <ContactMsg />
    </div>
  );
}
