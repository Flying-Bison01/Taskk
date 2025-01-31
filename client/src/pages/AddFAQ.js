import { useState } from "react";
import axios from "axios";
import FAQEditor from "../components/FAQEditor";

function AddFAQ() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/faqs", { question, answer });
    alert("FAQ added!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Question" required />
      <FAQEditor value={answer} setValue={setAnswer} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddFAQ;
