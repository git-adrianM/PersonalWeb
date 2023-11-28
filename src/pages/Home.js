import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const hobbies = [
  "cafe hopping around the city",
  "pretending to be busy",
  "chillin in the citie",
  "trying to get on top of another mountain",
  "searching for new spotify songs",
  "missing dynos at my local climbing gym",
  "trying to pr or er",
  "still breaking code lol",
];

const space = [
  "corner",
  "fragment",
  "sliver",
  "pocket",
  "section",
  "node",
  "slice",
  "shard",
  "bit",
  "piece",
  "string",
];

function useWordCycle(words) {
  const [currentWord, setCurrentWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  const handleClick = () => {
    const currentIndex = words.indexOf(currentWord);
    const nextIndex = (currentIndex + 1) % words.length;
    setCurrentWord(words[nextIndex]);
  };

  return [currentWord, handleClick];
}

function Home() {
  useEffect(() => {
    document.title = "Adrian's home (≧∇≦)/";
  }, []);

  const [currentHobby, handleHobbyClick] = useWordCycle(hobbies);
  const [currentSpace, handleSpaceClick] = useWordCycle(space);

  return (
    <div>
      <h2>i'm Adrian!</h2>
      <p>
        welcome to my little{" "}
        <a class="clickable" id="corner" onClick={handleSpaceClick}>
          {currentSpace}
        </a>{" "}
        of the internet!
      </p>
      <p>
        i'm a student based in Houston 🚀 where i study software
        engineering. when i'm not breaking code, i'm learning about
        ai, playing video games, and{" "}
        <a class="clickable" id="hobbies" onClick={handleHobbyClick}>
          {currentHobby}
        </a>
        .
      </p>
      <p>
        reach out to me anytime at{" "}
        <a href="mailto:Melo.Adrian2020@gmail.com" class="clickable">
          Melo.Adrian2020@gmail.com
        </a>
      </p>
      <div class="box">
        i'm looking for 2024 new grad swe positions! shoot me an{" "}
        <a href="mailto:Melo.Adrian2020@gmail.com" class="clickable">
          email
        </a>{" "}
        if you (or your friends) are hiring &lt;3{" "}
      </div>
    </div>
  );
}

export default Home;
