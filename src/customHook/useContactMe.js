import { useEffect } from "react";

export default function useContactMe() {
  useEffect(() => {
    const handleClick = () => {
      const pages = document.querySelectorAll(".book-page.page-right");

      pages.forEach((page, index) => {
        setTimeout(() => {
          page.classList.add("turn");
          setTimeout(() => {
            page.style.zIndex = 20 + index;
          }, 500);
        }, (index + 1) * 200 + 100);
      });
    };

    const contactMeBtn = document.querySelector(".btn.contact-me");
    contactMeBtn.addEventListener("click", handleClick);

    return () => {
      contactMeBtn.removeEventListener("click", handleClick);
    };
  }, []);
}
