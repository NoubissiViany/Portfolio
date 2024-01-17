import { useEffect } from "react";

export default function useProfile() {
  useEffect(() => {
    const pages = document.querySelectorAll(".book-page.page-right");

    let totalPages = pages.length;
    let pageNumber = 0;

    function reverseIndex() {
      pageNumber--;
      if (pageNumber < 0) {
        pageNumber = totalPages - 1;
      }
    }

    const backProfileBtn = document.querySelector(".back-profile");

    backProfileBtn.onclick = () => {
      console.log("backProfileBtn", backProfileBtn);
      pages.forEach((_, index) => {
        setTimeout(() => {
          reverseIndex();
          pages[pageNumber].classList.remove("turn");
          setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
          }, 500);
        }, (index + 1) * 200 + 100);
      });
    };
  });
}
