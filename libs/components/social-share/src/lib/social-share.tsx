"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaCheck, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";

export interface SocialShareProps {
  shareLink: string;
  className?: string;
  textPlacement?: "top" | "left";
  title: string;
}

export function SocialShare({ shareLink, className, textPlacement = "top", title }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  function copyToClipboard(url: string) {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }
  return (
    <div className={`${className}`}>
      <div className={`${textPlacement === "left" ? "flex gap-x-4 items-center" : "flex flex-col gap-2"}`}>
        <h3 className="font-montserrat md:text-lg">{title}</h3>
        <div className="flex gap-x-2">
          <FacebookShareButton url={shareLink}>
            <div className="bg-black/90 hover:bg-black p-1.5 text-white rounded-md">
              <FaFacebookF size={20} />
            </div>
          </FacebookShareButton>

          <WhatsappShareButton url={shareLink}>
            <div className="bg-black/90 hover:bg-black p-1.5 text-white rounded-md">
              <FaWhatsapp size={20} />
            </div>
          </WhatsappShareButton>

          {/* <InstapaperShareButton url={shareLink}>
          <div className="bg-black/90 hover:bg-black p-1.5 text-white rounded-md">
            <FaInstagram size={20} />
          </div>
        </InstapaperShareButton> */}

          <TwitterShareButton url={shareLink}>
            <div className="bg-black/90 hover:bg-black p-1.5 text-white rounded-md">
              <FaXTwitter size={20} />
            </div>
          </TwitterShareButton>

          {copied ? (
            <div className={`bg-black/90 hover:bg-black p-1.5 flex items-center cursor-pointer rounded-md text-white `}>
              <FaCheck />
            </div>
          ) : (
            <div
              onClick={() => copyToClipboard(shareLink)}
              className={`bg-black/90 hover:bg-black p-1.5 flex items-center cursor-pointer rounded-md text-white `}
            >
              <MdContentCopy />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
