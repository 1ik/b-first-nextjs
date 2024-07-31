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
  title?: string;
  iconSize?: number;
}

export function SocialShare({ shareLink, className, textPlacement = "top", title, iconSize = 20 }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  function copyToClipboard(url: string) {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }
  return (
    <div className={`${className}`}>
      <div className={`${textPlacement === "left" ? "flex gap-x-4 items-center" : "flex flex-col gap-2"}`}>
        {title && <h3 className="montserrat-regular md:text-lg">{title}</h3>}
        <div className="flex gap-x-3">
          <FacebookShareButton url={shareLink}>
            <div className="bg-black/90 hover:bg-black p-1.5 text-white rounded-md">
              <FaFacebookF size={iconSize} />
            </div>
          </FacebookShareButton>

          <WhatsappShareButton url={shareLink}>
            <div className="bg-black/90 hover:bg-black p-1.5 text-white rounded-md">
              <FaWhatsapp size={iconSize} />
            </div>
          </WhatsappShareButton>

          {/* <InstapaperShareButton url={shareLink}>
          <div className="bg-black/90 hover:bg-black p-1.5 text-white rounded-md">
            <FaInstagram size={iconSize} />
          </div>
        </InstapaperShareButton> */}

          <TwitterShareButton url={shareLink}>
            <div className="bg-black/90 hover:bg-black p-1.5 text-white rounded-md">
              <FaXTwitter size={iconSize} />
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
