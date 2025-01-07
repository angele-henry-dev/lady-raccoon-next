import IsometricCity from "@/components/animations/IsometricCity";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-row justify-center gap-20 text-center">
      <div className="flex flex-col justify-center items-center mt-5">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-4">Oops! Page not found.</p>
        <Link
          href="/"
          className="button font-semibold py-2 px-4 rounded"
        >
          Go back home
        </Link>
      </div>
      <IsometricCity />
    </div>
  );
}

export const metadata = {
  title: "Lady Raccoon - 404 not found",
  description: "Looking for a senior developer to boost your project?",
};
  