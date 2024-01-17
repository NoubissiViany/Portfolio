import { useEffect, useRef } from "react";

export default function usePageTurnBtn() {
  const pageTurnBtnRef = useRef([]);

  useEffect(() => {
    const pageTurnBtn = document.querySelectorAll(".nextprev-btn");
    pageTurnBtnRef.current = Array.from(pageTurnBtn);
    const handleClick = (index) => {
      const el = pageTurnBtnRef.current[index];
      const pageTurnId = el.getAttribute("data-page");
      const pageTurn = document.getElementById(pageTurnId);
      const turn = pageTurn.classList.contains("turn");

      if (turn) {
        pageTurn.classList.remove("turn");
        setTimeout(() => {
          pageTurn.style.zIndex = 20 - index;
        }, 500);
      } else {
        pageTurn.classList.add("turn");
        setTimeout(() => {
          pageTurn.style.zIndex = 20 + index;
        }, 500);
      }
    };

    pageTurnBtnRef.current.forEach((el, index) => {
      el.onclick = () => handleClick(index);
    });

    return () => {
      pageTurnBtnRef.current.forEach((el) => {
        el.onclick = null;
      });
    };
  }, []);
}
