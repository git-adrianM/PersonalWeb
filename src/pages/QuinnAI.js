import { useState, useEffect } from "react";
const { Configuration, OpenAIApi } = require("openai");

const MAX_CLICKS = 5;

export default function QuinnAI() {
  const [input, setInput] = useState("");
  const [copyInput, setCopyInput] = useState("");
  const [result, setResult] = useState();
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(
    parseInt(localStorage.getItem("clicks")) || 0
  );

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  useEffect(() => {
    document.title = "quinn's ai ⚈皿⚈";
  }, []);

  function textInput(e) {
    setCount(e.target.value.length);
    setInput(e.target.value);
  }

  async function onSubmit(event) {
    if (clicks >= 5) {
      return;
    }

    setCopyInput(input);
    event.preventDefault();
    try {
      const response = await openai.createCompletion({
        model: "curie:ft-personal:400-questions-2023-03-05-22-44-00",
        prompt: input.concat("[PEND]"),
        temperature: 0.7,
        max_tokens: 20,
        top_p: 1,
        frequency_penalty: 0.23,
        presence_penalty: 0,
        stop: ["[CEND]"],
      });

      const data = response.data.choices[0].text;
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.concat(" :)"));
      setInput("");
      setClicks((prevClicks) => {
        const newClicks = prevClicks + 1;
        localStorage.setItem("clicks", newClicks);
        return newClicks;
      });
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <h1>ask quinn ai a question!</h1>
      <form onSubmit={onSubmit}>
        <textarea
          type="text"
          name="prompt"
          placeholder="what do you want to ask quinn ai?"
          value={input}
          onChange={(e) => textInput(e)}
          maxLength="100"
        />
        <div class="flex-box" id="form">
          <input
            type="submit"
            value={`ask! (${MAX_CLICKS - clicks}/${MAX_CLICKS})`}
            disabled={clicks >= 5}
          />
          <p class="count"> {100 - count}/100</p>
        </div>
      </form>
      <p class="disclaimer">
        <i>
          *note that responses are generated by an ai model, and may not be
          accurate. for best responses, use proper grammar (capitalization and
          punctuation), and end prompts with a "?"
        </i>
      </p>
      <hr class="dashed" />
      <p>question: {copyInput}</p>
      <p>quinn ai answer: {result}</p>
    </div>
  );
}
