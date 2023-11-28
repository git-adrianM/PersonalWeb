import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function About() {
  useEffect(() => {
    document.title = "Adrian's life (〃 ω 〃)";
  }, []);

  return (
    <div>
      <img src="/images/croCat.jpg" alt="it's me!" width="200" height="auto" />
      <p>
        <nobr>─=≡Σ((( つ•̀ω•́)つLET’S GO!</nobr>
      </p>
      <hr class="dashed" />
      <p>
        hey hey hey! i'm someone who's a bit all over the place. i love all
        things tech, art, fashion, walkable cities, food, and so much more.
        sometimes i feel like a sponge, going around and learning as much as i
        can from the amazing people around me &#129533;.
        <br />
        <br />
        i'm a serial hobby hopper, i dabble in the arts, i stay fit, and i'm
        currently on the quest for a perfect cup of coffee. my existence in so
        many things really helped shape the learner that i am today, and the one
        i'll be tomorrow!
      </p>
      <p> </p>
      <p>
        <b>currently</b>
      </p>
      <p>
        i'm a senior at{" "}
        <a href="https://www.uhd.edu/" target="_blank" class="clickable">
           University of Houston-Downtown
        </a>
        , student Computer Science.
        <br />
        <br />
        i'm interested in games, and all creative intersections of tech
        and art 🎨.
        <br />
        <br />
      </p>
      <p> </p>
      <p>
        <b>previously</b>
      </p>
      <p>did some internships:</p>
      <ul>
        <li>
          developed a couple of client-side encrypted features for google 2023 for the 2nd time (
          <a
            href="https://workspace.google.com/intl/en_ca/"
            class="clickable"
            target="_blank"
          >
            google workspace docs, slides, sheets
          </a>
          )
        </li>
        <li>
          worked on counter abuse technology for google 2022 (
          <a
            href="https://io.google/2022/program/d7b6d22e-59a4-4e6b-a49d-3116ee57dcc3/"
            class="clickable"
            target="_blank"
          >
            CAT
          </a>
          )
        </li>
      </ul>
      <p></p>
    </div>
  );
}

export default About;
