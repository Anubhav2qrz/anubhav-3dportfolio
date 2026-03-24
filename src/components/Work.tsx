import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              title: "Study Tracker",
              category: "Web Development",
              tools: "Javascript, TypeScript, React, Threejs",
              image: "https://image2url.com/r2/default/images/1774363495764-615cf069-8a46-4849-ba5a-a909c0496bd1.png",
              link: "https://trackmystudy.netlify.app/"
            },
            {
              title: "NexAgency Web Build",
              category: "Web Development",
              tools: "Javascript, TypeScript, React, Threejs",
              image: "https://image2url.com/r2/default/images/1774363705957-12f022b8-63aa-4913-8bf6-1a911ee423a7.png",
              link: "https://nexagency.netlify.app/"
            },
            {
              title: "The Brew Haven Cafe",
              category: "Web Development",
              tools: "Javascript, TypeScript, React, Threejs",
              image: "https://image2url.com/r2/default/images/1774364018310-1863987b-8969-4967-868e-794db0de5fce.avif",
              link: "https://thebrewhavencafe.netlify.app/"
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
