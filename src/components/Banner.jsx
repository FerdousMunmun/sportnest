import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative h-[650px] w-full overflow-hidden my-5">
      <Image
        src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600"
        alt="SportNest Banner"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <div className="max-w-2xl text-white">
          <p className="uppercase tracking-[5px] text-orange-400 font-bold mb-4">
            Welcome to SportNest
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Book Your Favorite Sports Facility
          </h1>

          <p className="mt-6 text-lg text-slate-200 leading-relaxed">
            Explore premium sports venues, check availability, and book your
            perfect facility with a smooth and simple experience.
          </p>

          <Link
            href="/facilities"
            className="inline-block mt-10 px-8 py-4 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition"
          >
            Explore Facilities
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;