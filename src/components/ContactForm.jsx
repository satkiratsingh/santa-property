import React, { useState } from "react";

const ContactForm = () => {
  const [contact, setContact] = useState("");
  const [question, setQuestion] = useState("");

  return (
    <div className="flex flex-col items-center max-sm:p-4 justify-center gap-6 p-12 bg-[#ffffffc3] rounded-lg h-[80%] w-full">
      <h1 className="text-[#00985B] max-sm:text-[28px] font-semibold text-[40px] mb-2">
        Any Questions?
      </h1>
      <input
        className="w-full h-16 max-sm:h-12 px-5 border border-[#00985B] rounded-lg"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Enter your Contact Number"
      />
      <input
        className="w-full h-16 max-sm:h-12 px-5 border border-[#00985B] rounded-lg"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Your question"
      />

      <a
        href={`mailto:ashokbagga18@gmail.com?subject=Property Inquiry&body=${
          question + "%0D%0AContact No. : " + contact
        }`}
        className="w-full flex items-center justify-center text-[24px] font-semibold h-16 max-sm:h-12 bg-[#00985B] text-white rounded-lg"
      >
        Submit
      </a>
    </div>
  );
};

export default ContactForm;
