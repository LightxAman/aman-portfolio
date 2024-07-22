/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

export default function Cert() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // return (
  //   <div className="d-flex flex-wrap justify-content-center m-4 gap-2 col-lg-6 mx-auto">
  //     <div
  //       data-iframe-width="150"
  //       data-iframe-height="270"
  //       data-share-badge-id="af89bf3b-ed32-4ec7-9734-5d9aa7a99eed"
  //       data-share-badge-host="https://www.credly.com"></div>
  //     <div data-iframe-width="150" 
  //     data-iframe-height="270" 
  //     data-share-badge-id="ccdcaf30-04f2-46a5-a50f-66eda66e6458" 
  //     data-share-badge-host="https://www.credly.com"></div>
  //     <div data-iframe-width="150" 
  //     data-iframe-height="270" 
  //     data-share-badge-id="82f7d7ad-a56f-48aa-bfe2-92ef2e8ed53c" 
  //     data-share-badge-host="https://www.credly.com"></div>
  //     <div data-iframe-width="150" 
  //     data-iframe-height="270" 
  //     data-share-badge-id="225f979a-6267-41b5-ac73-20685ff4ecb8" 
  //     data-share-badge-host="https://www.credly.com"></div>
  //   </div>
  // );
}
