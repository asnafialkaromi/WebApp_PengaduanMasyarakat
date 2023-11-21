import React from "react";

const Accordion = () => {
  return (
    <div className="collapse collapse-arrow bg-white">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title lg:text-xl text-base font-medium">
        Pertanyaan ?
      </div>
      <div className="collapse-content">
        <p>hello</p>
      </div>
    </div>
  );
};

export default Accordion;
