import { useState, useEffect } from "react";

function Resume() {
  useEffect(() => {
    document.title = "Adrian's resume (๑•̀ㅁ•́๑)✧";
  }, []);

  return (
    <div>
      <p>here's my resume（˶′◡‵˶）</p>
      <hr class="dashed" />

      <iframe
        src="https://drive.google.com/file/d/1t-05DUSDNRT2sy04f5aTVwt84Ozf5rY2/preview"
        width="640"
        height="825"
        allow="autoplay"
      ></iframe>

      <a
        href="/Adrian_Melo_Resume.pdf"
        download="Adrian_Melo_Resume.pdf"
        class="clickable"
      >
        download
      </a>
    </div>
  );
}

export default Resume;
