import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Projects() {
  useEffect(() => {
    document.title = "Adrian's projects ( ´ ▽ ` )b";
  }, []);

  return (
    <div>
      <p>
        some projects, find the rest on my{" "}
        <a href="https://github.com/git-adrianm" class="clickable" target="_blank">
          github
        </a>{" "}
        <nobr>(๑•̀ㅁ•́๑)✧</nobr>
      </p>
      <hr class="dashed" />

      <p>
        <NavLink to="/" class="clickable">
          <u>
            <b>personal website</b>
          </u>
        </NavLink>{" "}
        <br />
        what you're looking at right now :)
      </p>
      <p>
        <a
          href="https://github.com/git-adrianM/OpenAi"
          class="clickable"
          target="_blank"
        >
          <b>OpenAi</b>
        </a>{" "}
        <br />
        create an interface for openai api before chatgpt
      </p>
      <p>
        <a
          href="https://github.com/git-adrianM/Word-Embedding-Pres-inauguration"
          class="clickable"
          target="_blank"
        >
          <b>NLP of presidential inauguration</b>
        </a>{" "}
        <br /> natural language program that helps you study all of them \O/
      </p>
      <p>
        <a
          href="https://github.com/git-adrianM/Crypto-BlockCHain"
          class="clickable"
          target="_blank"
        >
          <b>block chain sim</b>
        </a>{" "}
        <br />
        created an offline crypto to understand how it works
      </p>
    </div>
  );
}

export default Projects;
