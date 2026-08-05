(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ambientNodes = [...document.querySelectorAll(".atmosphere__wash[data-speed]")];

  document.body.classList.add("is-ready");

  const brand = document.getElementById("brand-title");
  if (brand) {
    if (reduceMotion) {
      brand.classList.add("is-done");
    } else {
      window.setTimeout(() => brand.classList.add("is-done"), 1500);
    }
  }

  let ticking = false;

  const onScroll = () => {
    const y = window.scrollY;

    document.body.classList.toggle("is-scrolled", y > 40);

    if (!reduceMotion) {
      ambientNodes.forEach((node) => {
        const speed = Number(node.getAttribute("data-speed")) || 0.1;
        node.style.setProperty("--parallax-y", `${(y * speed).toFixed(2)}px`);
      });
    }

    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    },
    { passive: true }
  );
  onScroll();

  const reveals = document.querySelectorAll("[data-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("is-in"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    reveals.forEach((el) => revealObserver.observe(el));

    requestAnimationFrame(() => {
      document.querySelector(".since[data-reveal]")?.classList.add("is-in");
      document.querySelector(".scroll-cue[data-reveal]")?.classList.add("is-in");
    });
  }

  if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll("[data-magnetic]").forEach((btn) => {
      const strength = 12;
      btn.addEventListener("pointermove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
      });
      btn.addEventListener("pointerleave", () => {
        btn.style.transform = "";
      });
    });
  }
})();
