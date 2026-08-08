import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ScreenshotSlider({ project }) {
  const [current, setCurrent] = useState(0);

  const screenshots = project.screenshots;

  if (!screenshots || screenshots.length === 0) {
    return (
      <section className="project-screenshots">
        <h3>Project Screenshots</h3>
        <p>Add screenshots inside projects.js</p>
      </section>
    );
  }

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  };

  return (
    <section className="project-screenshots">

      <div className="section-header">

        <span className="section-tag">
          PROJECT SCREENSHOTS
        </span>

      </div>

      <div className="slider-wrapper">

        <button
          className="slider-btn left"
          onClick={prevSlide}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <div className="slider-window">

          <AnimatePresence mode="wait">

            <motion.img
              key={current}
              src={screenshots[current].image}
              alt={screenshots[current].title}
              className="slider-image"
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -70 }}
              transition={{ duration: .35 }}
            />

          </AnimatePresence>

          <h4>{screenshots[current].title}</h4>

        </div>

        <button
          className="slider-btn right"
          onClick={nextSlide}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>

      </div>

      <div className="slider-dots">

        {screenshots.map((_, index) => (

          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          />

        ))}

      </div>

    </section>
  );
}

export default ScreenshotSlider;