import React from "react";
import SocialShares from "./SocialShares";

export default function Footer() {
  return (
    <div className="footer">
      <SocialShares />
      <p className="footer__sourceCodeLink">
        Source code for this site can be found on {" "}
        <a
          target="blank"
          href="https://github.com/syneva-runyan/onto-real-life"
        >
          github
        </a>.
      </p>
    </div>
  );
}
