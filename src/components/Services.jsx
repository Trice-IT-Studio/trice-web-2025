import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../index.css";

const slides = [
  {
    title: "Website",
    desc: "We offer a wide range of web development services, from landing pages to complex web applications, tailored to your needs.",
  },
  {
    title: "UI/UX Design",
    desc: "Modern, user-friendly, and responsive design for your digital products.",
  },
  {
    title: "SEO Optimization",
    desc: "Improve your website ranking and visibility on search engines.",
  },
];

const ServicesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, idx) => (
            <div key={idx} className="min-w-0 flex-[0_0_100%] px-4">
              <div>
                <h3 className="text-primary font-bold text-2xl mb-2">
                  {slide.title}
                </h3>
                <p className="text-base dark:text-gray-300">{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              selectedIndex === idx ? "bg-primary scale-125" : "bg-secondary"
            }`}
            onClick={() => emblaApi?.scrollTo(idx)}
          />
        ))}
      </div>
    </>
  );
};

export default ServicesCarousel;