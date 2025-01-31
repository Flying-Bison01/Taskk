import { useEffect, useState } from "react";
import axios from "axios";

function FAQList() {
  const [faqs, setFaqs] = useState([]);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    axios.get(`http://localhost:5000/api/faqs?lang=${lang}`).then((res) => setFaqs(res.data));
  }, [lang]);

  return (
    <div>
      <select onChange={(e) => setLang(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="bn">Bengali</option>
      </select>
      {faqs.map((faq, i) => (
        <div key={i}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default FAQList;
