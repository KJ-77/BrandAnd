import riverboat from "@/assets/riverboat.webp";

export function BrandSoul() {
  return (
    <section className="py-16 lg:py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-normal leading-tight tracking-tight mb-6">
              We build brands with soul
            </h2>
            <p className="text-base lg:text-lg leading-relaxed text-gray-700">
              At Brandt&, we see brands as living, breathing entities shaped by
              purpose, emotion, and connection. Just like people, they have values,
              personalities, and dreams to tell. Our role is to uncover what makes
              each brand feel alive and real and then craft stories and experiences
              that resonate. Through smart strategy and design, we humanize brands
              so they can inspire trust, spark emotion, and build genuine
              relationships that last beyond trends.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={riverboat}
              alt="Colorful garden illustration with riverboats"
              className="w-full max-w-lg h-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
