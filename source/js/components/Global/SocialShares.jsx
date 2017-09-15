import React from "react";

export default function SocialShares() {
  const shareAddress = encodeURIComponent(document.location.href);
  return (
    <ul className="socialShares">
      <li className="socialShares__icon socialShares__icon--facebook">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareAddress}`}
          title="Share on Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>share</span>
        </a>
      </li>
      <li className="socialShares__icon socialShares__icon--twitter">
        <a
          href={`https://twitter.com/home?status=${shareAddress}`}
          title="Share on Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>share</span>
        </a>
      </li>
      <li className="socialShares__icon socialShares__icon--instagram">
        <a
          href="https://www.instagram.com/synevarunyan/"
          target="_blank"
          title="Follow on Instagram"
          rel="noopener noreferrer"
        >
          <span>follow</span>
        </a>
      </li>
    </ul>
  );
}

//          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(document.location.href)}&t${encodeURIComponent(document.location.href)}`}

// <img alt="Share on Facebook" src="images/social_flat_rounded_rects_svg/Facebook.svg" /></a></li>
//   <li><a href="https://twitter.com/intent/tweet?source=&text=:%20" target="_blank" title="Tweet" onclick="window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.title) + ':%20'  + encodeURIComponent(document.URL)); return false;"><img alt="Tweet" src="images/social_flat_rounded_rects_svg/Twitter.svg" /></a></li>
//   <li><a href="http://pinterest.com/pin/create/button/?url=&description=" target="_blank" title="Pin it" onclick="window.open('http://pinterest.com/pin/create/button/?url=' + encodeURIComponent(document.URL) + '&description=' +  encodeURIComponent(document.title)); return false;"><img alt="Pin it" src="images/social_flat_rounded_rects_svg/Pinterest.svg" /></a></li>
//   <li><a href="http://www.linkedin.com/shareArticle?mini=true&url=&title=&summary=&source=" target="_blank" title="Share on LinkedIn" onclick="window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(document.URL) + '&title=' +  encodeURIComponent(document.title)); return false;"><img alt="Share on LinkedIn" src="images/social_flat_rounded_rects_svg/LinkedIn.svg" /></a></li>
//   <li><a href="http://wordpress.com/press-this.php?u=&t=&s=" target="_blank" title="Publish on WordPress" onclick="window.open('http://wordpress.com/press-this.php?u=' + encodeURIComponent(document.URL) + '&t=' +  encodeURIComponent(document.title)); return false;"><img alt="Publish on WordPress" src="images/social_flat_rounded_rects_svg/Wordpress.svg" /></a></li>
//   <li><a href="mailto:?subject=&body=:%20" target="_blank" title="Send email" onclick="window.open('mailto:?subject=' + encodeURIComponent(document.title) + '&body=' +  encodeURIComponent(document.URL)); return false;"><img alt="Send email" src="images/social_flat_rounded_rects_svg/Email.svg" /></a></li>
// </ul>
