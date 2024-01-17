import { useEffect } from "react";

export default function useAnimation() {
  useEffect(() => {
    const animateBook = () => {
      const coverRight = document.querySelector(".cover.cover-right");
      const pageLeft = document.querySelector(".book-page.page-left");
      const pages = document.querySelectorAll(".book-page.page-right");
      let totalPages = pages.length;
      let pageNumber = 0;

      function reverseIndex() {
        pageNumber--;
        if (pageNumber < 0) {
          pageNumber = totalPages - 1;
        }
      }

      setTimeout(() => {
        coverRight.classList.add("turn");
      }, 2100);

      setTimeout(() => {
        coverRight.style.zIndex = -1;
      }, 2800);

      setTimeout(() => {
        pageLeft.style.zIndex = 20;
      }, 3200);

      pages.forEach((_, index) => {
        setTimeout(() => {
          reverseIndex();
          pages[pageNumber].classList.remove("turn");
          setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
          }, 500);
        }, (index + 1) * 200 + 2100);
      });
    };

    animateBook();
  }, []);
}
