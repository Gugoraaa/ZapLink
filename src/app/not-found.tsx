import Link from "next/link";
import Navbar from "@/components/Navbar";
export default function NotFound() {
  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen  text-white px-4">
      <h1 className="text-9xl font-extrabold tracking-widest text-white drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]">
        404
      </h1>

      <div className="bg-[#111827] mt-8 p-8 rounded-xl shadow-lg text-center max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-400 mb-6">
          The link you followed may be broken, or the page may have been removed.
        </p>

        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md shadow-md transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
    </>
  );
}
