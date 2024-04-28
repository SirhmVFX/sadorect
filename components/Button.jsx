"use client";

import { useRouter } from "next/navigation";

function Button({ title, onclick }) {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => {
          router.push(onclick);
        }}
        className="bg-primarycolor p-3 md:text-base text-[11px] md:p-4 rounded-lg font-bold transition-transform duration-300 transform hover:scale-110"
      >
        {title}
      </button>
    </>
  );
}

export default Button;
