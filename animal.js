(() => {
  // In-memory quest stage only (no persistence — easier to retest).
  // Stages: "" | "hint" | "gate" | "pass"
  let stage = "";

  // Decoy strings for casual source grepping (not used for auth).
  const _decoyA = "FriendIy";
  const _decoyB = atob("RmFrZUtleQ==");
  void _decoyA;
  void _decoyB;

  // XOR-split key material — avoid a plaintext password literal.
  const _m = [0x15, 0x2a, 0x3c, 0x08, 0x11, 0x07, 0x19, 0x2e];
  const _x = [0x53, 0x58, 0x55, 0x6d, 0x7f, 0x63, 0x75, 0x57];
  const _resolve = () =>
    _m.map((n, i) => String.fromCharCode(n ^ _x[i])).join("");

  const t = (key) =>
    (window.ITS_I18N && window.ITS_I18N.t(key)) || key;

  const isJa = () =>
    document.documentElement.dataset.lang === "ja" ||
    window.ITS_I18N?.getLang?.() === "ja";

  const moreEl = () => document.querySelector(".project-list__more");

  const paintHint = () => {
    const el = moreEl();
    if (!el) return;
    el.dataset.animalHint = "1";
    el.classList.remove("is-animal-hint");
    void el.offsetWidth;
    el.textContent = t("animal_hint");
    el.classList.add("is-animal-hint");
  };

  const clearHint = () => {
    const el = moreEl();
    if (!el) return;
    delete el.dataset.animalHint;
    el.classList.remove("is-animal-hint");
    if (window.ITS_I18N?.t) {
      el.textContent = window.ITS_I18N.t("projects_more");
    }
  };

  const localizeGate = () => {
    const gate = document.getElementById("animal-gate");
    if (!gate) return;
    const title = gate.querySelector(".animal-gate__title");
    const error = gate.querySelector(".animal-gate__error");
    const submit = gate.querySelector(".animal-gate__submit");
    if (title) title.textContent = t("animal_gate_title");
    if (error) error.textContent = t("animal_gate_error");
    if (submit) submit.textContent = t("animal_gate_submit");
  };

  const ensureModals = () => {
    if (document.getElementById("animal-gate")) {
      localizeGate();
      return;
    }

    const gate = document.createElement("div");
    gate.id = "animal-gate";
    gate.className = "animal-gate";
    gate.hidden = true;
    gate.innerHTML = `
      <div class="animal-gate__panel" role="dialog" aria-modal="true" aria-labelledby="animal-gate-title">
        <p id="animal-gate-title" class="animal-gate__title"></p>
        <form class="animal-gate__form" autocomplete="off">
          <input class="animal-gate__input" type="text" name="ak" autocomplete="off" spellcheck="false" />
          <p class="animal-gate__error" hidden></p>
          <button type="submit" class="animal-gate__submit"></button>
        </form>
      </div>
    `;
    document.body.appendChild(gate);

    const pass = document.createElement("div");
    pass.id = "animal-pass";
    pass.className = "animal-pass";
    pass.hidden = true;
    pass.innerHTML = `<div class="animal-pass__box" role="status"><span>PASS</span></div>`;
    document.body.appendChild(pass);

    localizeGate();

    const form = gate.querySelector(".animal-gate__form");
    const input = gate.querySelector(".animal-gate__input");
    const error = gate.querySelector(".animal-gate__error");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const value = String(input.value || "").toLowerCase();
      const expected = _resolve().toLowerCase();
      let ok = value.length === expected.length;
      if (ok) {
        for (let i = 0; i < expected.length; i += 1) {
          if (value.charCodeAt(i) !== expected.charCodeAt(i)) {
            ok = false;
            break;
          }
        }
      }
      if (!ok) {
        error.hidden = false;
        error.classList.remove("is-shake");
        void error.offsetWidth;
        error.classList.add("is-shake");
        input.select();
        return;
      }
      error.hidden = true;
      stage = "pass";
      hideGate(() => showPass());
    });

    gate.addEventListener("click", (e) => {
      if (e.target === gate) hideGate();
    });
  };

  const showGate = () => {
    ensureModals();
    clearHint();
    stage = "gate";
    const gate = document.getElementById("animal-gate");
    const panel = gate.querySelector(".animal-gate__panel");
    const input = gate.querySelector(".animal-gate__input");
    const error = gate.querySelector(".animal-gate__error");
    localizeGate();
    error.hidden = true;
    input.value = "";
    gate.hidden = false;
    panel.classList.remove("is-in");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        gate.classList.add("is-visible");
        panel.classList.add("is-in");
        input.focus();
      });
    });
  };

  const hideGate = (done) => {
    const gate = document.getElementById("animal-gate");
    if (!gate) {
      if (done) done();
      return;
    }
    const panel = gate.querySelector(".animal-gate__panel");
    gate.classList.remove("is-visible");
    panel?.classList.remove("is-in");
    window.setTimeout(() => {
      if (!gate.classList.contains("is-visible")) gate.hidden = true;
      if (done) done();
    }, 340);
  };

  const hidePass = (done) => {
    const pass = document.getElementById("animal-pass");
    if (!pass) {
      if (done) done();
      return;
    }
    const box = pass.querySelector(".animal-pass__box");
    pass.classList.remove("is-visible");
    box?.classList.remove("is-in");
    window.setTimeout(() => {
      pass.hidden = true;
      if (done) done();
    }, 400);
  };

  const unlockMeow = () => {
    hidePass(() => {
      window.ITS_I18N?.setMeow?.(true);
    });
  };

  const showPass = () => {
    ensureModals();
    const pass = document.getElementById("animal-pass");
    const box = pass.querySelector(".animal-pass__box");
    const span = box.querySelector("span");
    pass.hidden = false;
    box.classList.remove("is-in");

    let blinks = 0;
    const onBlink = () => {
      blinks += 1;
      if (blinks < 6) return;
      span.removeEventListener("animationiteration", onBlink);
      unlockMeow();
    };

    // Reduced-motion users skip the blink loop.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.setTimeout(unlockMeow, 900);
    } else {
      span.addEventListener("animationiteration", onBlink);
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        pass.classList.add("is-visible");
        box.classList.add("is-in");
      });
    });
  };

  const beginQuest = () => {
    if (window.ITS_I18N?.isMeow?.()) return;
    if (stage === "pass") {
      showPass();
      return;
    }
    if (stage === "gate" || isJa()) {
      showGate();
      return;
    }
    stage = "hint";
    paintHint();
  };

  const onLangMaybe = () => {
    if ((stage === "hint" || stage === "gate") && isJa()) {
      const gate = document.getElementById("animal-gate");
      if (!gate?.classList.contains("is-visible")) showGate();
      else localizeGate();
      return;
    }
    if (stage === "hint" && !isJa()) {
      paintHint();
      return;
    }
    localizeGate();
  };

  const wrapI18n = () => {
    if (!window.ITS_I18N || window.ITS_I18N.__aq) return;
    window.ITS_I18N.__aq = true;
    const origSetLang = window.ITS_I18N.setLang;
    const origApply = window.ITS_I18N.apply;

    window.ITS_I18N.setLang = (next) => {
      origSetLang(next);
      queueMicrotask(onLangMaybe);
    };

    window.ITS_I18N.apply = () => {
      origApply();
      if (stage === "hint" && !isJa()) paintHint();
      localizeGate();
    };
  };

  const boot = () => {
    wrapI18n();

    // Language option clicks use a closed-over setLang in i18n.js historically;
    // watching data-lang covers all switch paths.
    new MutationObserver(() => onLangMaybe()).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-lang", "lang"],
    });

    document.querySelectorAll(".footer__mark").forEach((mark) => {
      mark.addEventListener("click", (e) => {
        e.preventDefault();
        beginQuest();
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
