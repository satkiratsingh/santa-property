import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  return (
    <div className="flex flex-col items-center max-sm:p-4 justify-center gap-6 p-12 bg-[#ffffffc3] rounded-lg h-[80%] w-full">
      <h1 className="text-[#00985B] max-sm:text-[28px] font-semibold text-[40px] mb-2">
        Any Questions?
      </h1>
      <input
        className="w-full h-16 max-sm:h-12 px-5 border border-[#00985B] rounded-lg"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <input
        className="w-full h-16 max-sm:h-12 px-5 border border-[#00985B] rounded-lg"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Your question"
      />

      <button className="w-full text-[24px] font-semibold h-16 max-sm:h-12 bg-[#00985B] text-white rounded-lg">
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
