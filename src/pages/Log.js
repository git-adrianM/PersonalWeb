import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import BlogNavBar from "../components/blog_navbar";
import ImageHoverCard from "../components/image_hover_card";
import { Helmet } from "react-helmet";

function Log() {
  useEffect(() => {
    document.title = "Adrian's log (/ω＼)";
    document.metaDescription = "test";
  }, []);

  return (
    <div>
      <Helmet>
        <meta name="description" content="Adrian's logbook" />
      </Helmet>
      <div class="flex-container" id="blog_header_card">
        <h1 id="blog_header">logbook</h1>
        <BlogNavBar></BlogNavBar>
      </div>

      <p>
        collections of events and adventures, find all blogs{" "}
        <NavLink to="/blogs" class="clickable">
          <u>here</u>
        </NavLink>{" "}
      </p>
      <hr class="dashed"></hr>
      <p>
        <b>Aug 2023</b>
        <br />-{" "}
        <NavLink to="/blogs/nyc" class="clickable">
          <u>[blog]</u>
        </NavLink>{" "}
        a nyc summer
        <br />-{" "}
        <NavLink to="/blogs/google" class="clickable">
          <u>[blog]</u>
        </NavLink>{" "}
        a summer with google
        <br />- friend went viral on{" "}
        <a
          href="https://twitter.com/qvinnh/status/1688944756422836224?s=20"
          class="clickable"
          target="_blank"
        >
          twitter(my photo)
        </a>
      </p>
      <p>
        <b>July 2023</b>
        <br />- broke staging lol
        <br />- saw a baseball game in ny :)
      </p>
      <p>
        <b>June 2023</b>
        <br />- survived new york{" "}
        <ImageHoverCard text="smog" imageSrc={"/images/smog.png"} />{" "}
        <nobr>(ºΔº)</nobr>
      </p>
      <p>
        <b>May 2023</b>
        <br />- started working at google on their editors cse team
        <nobr>ヽ(・∀・)ﾉ</nobr>
        <br />- moved to nyc for the summer
      </p>
      <p>
        <b>Mar 2023</b>
        <br />- signed an offer with google for the summer in new york! <br /> -{" "}
      </p>
      <p>
        <b>May 2022</b>
        <br />- signed an offer with google for the summer in bay area!
      </p>
      <p>
        <b>Nov 2021</b>
        <br />- survived astroworld
      </p>
      <p>
        <b>Sept 2020</b>
        <br />- started studying at uhd
      </p>
      <p />
    </div>
  );
}

export default Log;
