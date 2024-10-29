"use client";
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "Contact - next.js",
// };

const Contact = () => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
    // router.replace("/"); // * clears history
    // router.back(); // * previous page
    // router.forward(); // * next page
  };
  return (
    <div className="container">
      <div className="pt-32">
        <h1 className="text-3xl font-bold mb-5">Contact</h1>
        <button
          onClick={goHome}
          className="px-3 py-2 bg-red-500 rounded-md text-white"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Contact;
