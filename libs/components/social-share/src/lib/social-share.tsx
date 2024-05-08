"use client";

import { WhatsappShareButton, FacebookShareButton, TwitterShareButton, InstapaperShareButton } from "react-share";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

export interface SocialShareProps {
  facebookShareUrl: string;
  whahtsappShareUrl: string;
  twitterShareUrl: string;
  instagramShareUrl: string;
}

export function SocialShare({
  facebookShareUrl,
  whahtsappShareUrl,
  twitterShareUrl,
  instagramShareUrl,
}: SocialShareProps) {
  return (
    <div>
      <h3 className="mb-3 font-montserrat text-lg">Share News</h3>
      <div className="flex gap-x-2">
        <FacebookShareButton url={facebookShareUrl}>
          <div className="bg-black/90 hover:bg-black p-1.5 text-white rounded-md">
            <FaFacebookF size={20} />
          </div>
        </FacebookShareButton>

        <WhatsappShareButton url={whahtsappShareUrl} className="">
          <div className="bg-black/90 hover:bg-black p-1.5 text-white rounded-md">
            <FaWhatsapp size={20} />
          </div>
        </WhatsappShareButton>

        <InstapaperShareButton url={instagramShareUrl}>
          <div className="bg-black/90 hover:bg-black p-1.5 text-white rounded-md">
            <FaInstagram size={20} />
          </div>
        </InstapaperShareButton>

        <TwitterShareButton url={twitterShareUrl}>
          <div className="bg-black/90 hover:bg-black p-1.5 text-white rounded-md">
            <FaXTwitter size={20} />
          </div>
        </TwitterShareButton>
        <div className="bg-black/90 hover:bg-black p-1.5 flex items-center cursor-pointer rounded-md text-white ">
          <MdContentCopy  />
        </div>
      </div>
    </div>
  );
}
