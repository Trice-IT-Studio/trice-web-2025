import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ReviewCard from "./ReviewCard";

const TWEEN_FACTOR_BASE = 0.52;
const AUTOPLAY_DELAY = 4000; // 4 detik

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const ReviewCarousel = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);
  const autoplayInterval = useRef(null);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi
      .slideNodes()
      .map((slideNode) => slideNode.querySelector(".embla__slide__number"));
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();
            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);
              if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
              if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = numberWithinRange(tweenValue, 0, 1).toString();
        const tweenNode = tweenNodes.current[slideIndex];
        if (tweenNode) tweenNode.style.transform = `scale(${scale})`;
      });
    });
  }, []);

  const setupAutoplay = useCallback(() => {
    if (!emblaApi) return;
    clearInterval(autoplayInterval.current);
    autoplayInterval.current = setInterval(() => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
    }, AUTOPLAY_DELAY);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
    };

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);
    onInit();
    onSelect();
    setupAutoplay();

    emblaApi
      .on("reInit", () => {
        setTweenNodes(emblaApi);
        setTweenFactor(emblaApi);
        tweenScale(emblaApi);
        onInit();
        onSelect();
        setupAutoplay();
      })
      .on("scroll", (e) => tweenScale(e, "scroll"))
      .on("slideFocus", (e) => tweenScale(e, "slideFocus"))
      .on("select", onSelect);

    return () => clearInterval(autoplayInterval.current);
  }, [emblaApi, tweenScale, setTweenNodes, setTweenFactor, setupAutoplay]);

  return (
    <div className="embla w-full">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex px-2 sm:px-0">
          {slides.map((slide, index) => (
            <div
              className="embla__slide px-1 sm:px-2 flex-[0_0_100%] sm:flex-[0_0_60%] lg:flex-[0_0_33.3333%]"
              key={index}
            >
              <div className="embla__slide__number transition-transform duration-100 ease-in-out origin-center">
                <ReviewCard {...slide} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === selectedIndex ? "bg-primary scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
