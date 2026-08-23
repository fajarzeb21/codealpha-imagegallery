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
  const [selectedImage, setSelectedImage] = useState(null);

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
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}

        </div>


        {/* =========================
            GALLERY GRID
        ========================= */}

        <div className="gallery-grid">

          {filteredImages.map((image) => (
            <div
              className="gallery-card"
              key={image.title}
            >

              <div
                className="image-container"
                onClick={() => setSelectedImage(image)}
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

      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>


          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src={selectedImage.src}
              alt={selectedImage.title}
            />

            <div className="lightbox-info">

              <h3>{selectedImage.title}</h3>

              <p>{selectedImage.category}</p>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default Gallery;