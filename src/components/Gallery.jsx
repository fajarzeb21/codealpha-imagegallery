import { useState } from "react";

import cleanser1 from "../assets/cleanser1.jpg";
import cleanser2 from "../assets/cleanser2.jpg";
import serum1 from "../assets/serum1.jpg";
import serum2 from "../assets/serum2.jpg";
import moisturizer1 from "../assets/moisturizer1.jpg";
import moisturizer2 from "../assets/moisturizer2.jpg";
import sunscreen1 from "../assets/sunscreen1.jpg";
import sunscreen2 from "../assets/sunscreen2.jpg";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    {
      src: cleanser1,
      title: "Gentle Cleanser",
      category: "Cleansers",
    },
    {
      src: cleanser2,
      title: "Daily Cleanser",
      category: "Cleansers",
    },
    {
      src: serum1,
      title: "Glow Serum",
      category: "Serums",
    },
    {
      src: serum2,
      title: "Hydrating Serum",
      category: "Serums",
    },
    {
      src: moisturizer1,
      title: "Daily Moisturizer",
      category: "Moisturizers",
    },
    {
      src: moisturizer2,
      title: "Hydrating Moisturizer",
      category: "Moisturizers",
    },
    {
      src: sunscreen1,
      title: "Daily Sunscreen",
      category: "Sunscreens",
    },
    {
      src: sunscreen2,
      title: "Glow Sunscreen",
      category: "Sunscreens",
    },
  ];

  const categories = [
    "All",
    "Cleansers",
    "Serums",
    "Moisturizers",
    "Sunscreens",
  ];

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter(
          (image) => image.category === activeCategory
        );

  // Open selected image
  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  // Previous image
  const previousImage = () => {
    setSelectedIndex((current) =>
      current === 0
        ? filteredImages.length - 1
        : current - 1
    );
  };

  // Next image
  const nextImage = () => {
    setSelectedIndex((current) =>
      current === filteredImages.length - 1
        ? 0
        : current + 1
    );
  };

  return (
    <>
      {/* =========================
          GALLERY
      ========================= */}

      <section className="gallery-section" id="gallery">

        <div className="gallery-heading">

          <div className="section-pill">
            <span className="pill-dot"></span>
            OUR COLLECTION
          </div>

          <h2>
            Skincare that makes
            <span> you glow.</span>
          </h2>

          <p className="gallery-description">
            Explore our carefully selected skincare collection
            for your everyday routine and natural glow.
          </p>

        </div>


        {/* =========================
            FILTER BUTTONS
        ========================= */}

        <div className="filter-buttons">

          {categories.map((category) => (

            <button
              key={category}
              className={
                activeCategory === category
                  ? "filter active"
                  : "filter"
              }
              onClick={() => {
                setActiveCategory(category);
                setSelectedIndex(null);
              }}
            >
              {category}
            </button>

          ))}

        </div>


        {/* =========================
            GALLERY GRID
        ========================= */}

        <div className="gallery-grid">

          {filteredImages.map((image, index) => (

            <div
              className="gallery-card"
              key={image.title}
            >

              <div
                className="image-container"
                onClick={() => openLightbox(index)}
              >

                <img
                  src={image.src}
                  alt={image.title}
                />

                <div className="image-overlay">
                  <span>View Image</span>
                </div>

              </div>


              <div className="image-info">

                <h3>{image.title}</h3>

                <p>{image.category}</p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          LIGHTBOX
      ========================= */}

      {selectedIndex !== null && (

        <div
          className="lightbox"
          onClick={closeLightbox}
        >

          {/* CLOSE BUTTON */}

          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close image"
          >
            ×
          </button>


          {/* PREVIOUS BUTTON */}

          <button
            className="lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            aria-label="Previous image"
          >
            ←
          </button>


          {/* IMAGE */}

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src={filteredImages[selectedIndex].src}
              alt={filteredImages[selectedIndex].title}
            />

            <div className="lightbox-info">

              <h3>
                {filteredImages[selectedIndex].title}
              </h3>

              <p>
                {filteredImages[selectedIndex].category}
              </p>

            </div>

          </div>


          {/* NEXT BUTTON */}

          <button
            className="lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            →
          </button>

        </div>

      )}

    </>
  );
}

export default Gallery;