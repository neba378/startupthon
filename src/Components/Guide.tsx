import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Guide = () => {
  return (
    <div id="guide-section" className=" m-10 p-10 flex justify-center text-white">
      <div className="relative flex flex-col items-center w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            Found an idea that matches your skills?
          </h2>
          <p className="mt-2 text-lg italic">
            Here's a simple guide on how the Startupathon process works once you
            find a project idea that suits your skills.
          </p>
        </div>

        {/* Timeline */}
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#2E7D32", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #2E7D32" }}
            date="Step 1"
            iconStyle={{ background: "#4CAF50", color: "#fff" }}
          >
            <h3 className="text-lg font-bold">
              Dive into the Challenge Details Video
            </h3>
            <p>
              It all starts here! Receive an exciting task—your startup idea—
              with a detailed video to spark creativity and clarify our vision.
            </p>
            <p className="mt-2 font-semibold">
              💡 Pro Tip: Pay attention—it's more than just instructions. It's
              your roadmap to success!
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1E88E5", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #1E88E5" }}
            date="Step 2"
            iconStyle={{ background: "#2196F3", color: "#fff" }}
          >
            <h3 className="text-lg font-bold">Build, Submit & Shine</h3>
            <p>
              Create a prototype that showcases your approach, then submit your
              work with a Loom video presentation (no GitHub repo or complex
              code required). Your creative solution is what matters most.
            </p>
            <p className="mt-2 font-semibold">
              💡 Stay ahead: Submit on time or early to show your dedication!
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#D84315", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #D84315" }}
            date="Step 3"
            iconStyle={{ background: "#E64A19", color: "#fff" }}
          >
            <h3 className="text-lg font-bold">Get Feedback, Level Up!</h3>
            <p>
              Three days after submission, we review your work. If it stands
              out, you're in! If not, we'll share feedback on how to improve.
              The cycle continues until we find the perfect fit.
            </p>
            <p className="mt-2 font-semibold">
              💡 Pro Tip: This feedback is gold. Use it to sharpen your
              submission or learn what it takes to win!
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#6A1B9A", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #6A1B9A" }}
            date="Step 4"
            iconStyle={{ background: "#8E24AA", color: "#fff" }}
          >
            <h3 className="text-lg font-bold">Claim Your Crown</h3>
            <p>Ace the challenge to become the project leader.</p>
            <p className="mt-2 font-semibold">
              Lead the Project. Ace the challenge, and take charge as BOSS.
              Enjoy ownership, 20% equity, and a competitive salary. Turn vision
              into impact with top-tier talent!
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <h1 className="text-3xl font-bold mt-10">
          Work Smart, Win Big: Pro Tips from Swapnil Sharma, CTO of Ovadrive (A
          Startupathon Success)
        </h1>
        <div className="mt-10 w-full flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pn_HoowYNTQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="border-2 border-purple-500"
          ></iframe>
        </div>

        <h1 className="text-3xl font-bold mt-10">
          Our Hiring Process: Shared Through Candidate Stories
        </h1>
        <div className="mt-10 w-full flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.loom.com/embed/0847b9257f144fd0830a8536dfbc8e81?sid=3dfc7311-9892-45a2-a231-a940dba1bf88"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="border-2 border-purple-500"
          ></iframe>
        </div>

        <div className="w-full mt-10 bg-purple-900/80 text-white p-6 rounded-xl border border-purple-500 shadow-lg flex flex-col items-center justify-center text-center relative">
          <h2 className="text-2xl font-bold">Got an idea of your own?</h2>
          <p className="mt-2 text-sm max-w-lg">
            We are always on the lookout for visionaries with great startup
            ideas, ready to become successful founders. If that’s you, apply
            below for our Fellowship program.
          </p>
          <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg transition">
            Apply For Fellowship
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guide;
