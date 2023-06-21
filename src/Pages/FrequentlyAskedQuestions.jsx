import React, { useState } from 'react';

function FrequentlyAskedQuestions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className=" min-h-screen">
      <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-blue font-black leading-7 md:leading-10">Frequently Asked Questions</h1>

      <div className="accordion w-90 max-w-2xl mx-auto mt-8">
        <div className="accordion-item bg-white text-black my-4 rounded-lg shadow-md">
          <div
            className="accordion-item-header  py-2.5 pr-8 pl-4 min-h-14 text-base font-semibold flex items-center cursor-pointer"
            onClick={() => toggleAccordion(0)}
          >
            What is Web Development?
          </div>
          <div
            className={`accordion-item-body ${
              activeIndex === 0 ? 'max-h-96' : 'max-h-0'
            } overflow-hidden transition-max-height duration-200`}
          >
            <div className="accordion-item-body-content px-4 py-2 border-t">
              Web Development broadly refers to the tasks associated with developing functional websites and applications for the Internet. The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks.
            </div>
          </div>
        </div>

        <div className="accordion-item bg-white text-black my-4 rounded-lg shadow-md">
          <div
            className="accordion-item-header py-2.5 pr-8 pl-4 min-h-14 text-base font-semibold flex items-center cursor-pointer"
            onClick={() => toggleAccordion(1)}
          >
            What is HTML?
          </div>
          <div
            className={`accordion-item-body ${
              activeIndex === 1 ? 'max-h-96' : 'max-h-0'
            } overflow-hidden transition-max-height duration-200`}
          >
            <div className="accordion-item-body-content px-4 py-2 border-t">
              HTML, aka HyperText Markup Language, is the dominant markup language for creating websites and anything that can be viewed in a web browser.
            </div>
          </div>
        </div>

        {/* Add more accordion items here using the same structure */}
        
        <div className="accordion-item bg-white text-black my-4 rounded-lg shadow-md">
          <div
            className="accordion-item-header py-2.5 pr-8 pl-4 min-h-14 text-base font-semibold flex items-center cursor-pointer"
            onClick={() => toggleAccordion(2)}
          >
Who is a programmer
          </div>
          <div
            className={`accordion-item-body ${
              activeIndex === 2 ? 'max-h-96' : 'max-h-0'
            } overflow-hidden transition-max-height duration-200`}
          >
            <div className="accordion-item-body-content px-4 py-2 border-t">
            A computer programmer, sometimes referred to as a software developer, a software engineer, a programmer or a coder, is a person who creates computer programs — often for larger computer software. Wikipedia            </div>
          </div>
        </div>

        <div className="accordion-item bg-white text-black my-4 rounded-lg shadow-md">
          <div
            className="accordion-item-header py-2.5 pr-8 pl-4 min-h-14 text-base font-semibold flex items-center cursor-pointer"
            onClick={() => toggleAccordion(3)}
          >
What is AI          </div>
          <div
            className={`accordion-item-body ${
              activeIndex === 3 ? 'max-h-96' : 'max-h-0'
            } overflow-hidden transition-max-height duration-200`}
          >
            <div className="accordion-item-body-content px-4 py-2 border-t">
            Artificial intelligence is intelligence—perceiving, synthesizing, and inferring information demonstrated by machines, as opposed to intelligence displayed by humans or by other animals. Wikipedia            </div>
          </div>
        </div>

        <div className="accordion-item bg-white text-black my-4 rounded-lg shadow-md">
          <div
            className="accordion-item-header py-2.5 pr-8 pl-4 min-h-14 text-base font-semibold flex items-center cursor-pointer"
            onClick={() => toggleAccordion(4)}
          >
Microsoft Power Platform   </div>
          <div
            className={`accordion-item-body ${
              activeIndex === 4 ? 'max-h-96' : 'max-h-0'
            } overflow-hidden transition-max-height duration-200`}
          >
            <div className="accordion-item-body-content px-4 py-2 border-t">
            Microsoft Power Platform is a line of business intelligence, app development, and app connectivity software applications. Microsoft developed the Power Fx low-code programming language for expressing logic across the Power Platform. It also provides integrations with GitHub and Teams. Wikipedia</div>          </div>
        </div>


        <div className="accordion-item bg-white text-black my-4 rounded-lg shadow-md">
          <div
            className="accordion-item-header py-2.5 pr-8 pl-4 min-h-14 text-base font-semibold flex items-center cursor-pointer"
            onClick={() => toggleAccordion(6)}
          >
Web 3.0          </div>
          <div
            className={`accordion-item-body ${
              activeIndex === 6 ? 'max-h-96' : 'max-h-0'
            } overflow-hidden transition-max-height duration-200`}
          >
            <div className="accordion-item-body-content px-4 py-2 border-t">
            Web 3.0, sometimes known as Web 3, is the concept of the next generation of the web, in which most users will be connected via a decentralized network and have access to their own data. This article taught us about the technologies that are anticipated to advance and change in the upcoming years.  </div>
          </div>
        </div>


        
      </div>
    </div>
  );
}

export default FrequentlyAskedQuestions;
