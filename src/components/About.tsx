import FeatureCard from "./FeatureCard";

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <h2 className="mt-20 text-center text-2xl md:text-3xl font-bold">
        Why ZapLink?
      </h2>
      <p className="mx-auto mt-2 max-w-3xl text-center text-sm md:text-base text-white/70">
        We've built a platform that's not just powerful, but a pleasure to use.
        Discover the difference.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <FeatureCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          }
          title="Blazing Fast"
          desc="Our redirects are instant, ensuring the best user experience for your audience."
        />
        <FeatureCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3v18h18"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 13l3 3 7-7"
              />
            </svg>
          }
          title="Deep Analytics"
          desc="Go beyond clicks. Understand your audience with detailed stats on every link."
        />
        <FeatureCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2"
              />
              <circle cx="12" cy="12" r="10" />
            </svg>
          }
          title="Fully Customizable"
          desc="Create branded, custom short links that build trust and recognition."
        />
      </div>
    </section>
  );
}
