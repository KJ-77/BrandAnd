import riverboat from "@/assets/riverboat.webp";

export function BrandSoul() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full h-full flex items-center px-8 lg:px-16 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start w-full">
          {/* Left Column - Text Content */}
          <div className="w-full flex flex-col justify-start">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-tight mb-24 lg:mb-32">
              We build brands with soul
            </h2>
            <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-700">
              At Brand&, we see brands as living, breathing entities shaped by
              purpose, emotion, and connection. Just like people, they have
              values, personalities, and stories to tell. Our role is to uncover
              what makes each brand feel alive to give it a voice, a rhythm, and
              a soul that others can relate to. Through strategy and design, we
              humanize brands so they can inspire trust, spark emotion, and
              build genuine relationships that last beyond trends..
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end items-start">
            <img
              src={riverboat}
              alt="Colorful garden illustration with riverboats"
              className="w-full h-[100vh] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
