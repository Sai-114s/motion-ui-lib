const presetButtons = document.querySelectorAll("[data-preset]");
const navButtons = document.querySelectorAll("[data-transition]");
const previewCard = document.getElementById("previewCard");
const activePreset = document.getElementById("activePreset");
const utilityToggles = document.querySelectorAll("[data-toggle-utility]");
const banner = document.getElementById("bannerDemo");
const modal = document.getElementById("demoModal");
const modalOpeners = document.querySelectorAll("[data-modal-open]");
const modalClosers = document.querySelectorAll("[data-modal-close]");
const previewTriggers = document.querySelectorAll("[data-preview]");
const tabs = document.querySelectorAll(".tab");
const motionButtons = document.querySelectorAll("[data-motion]");

let currentPreset = "fade";

const swapPreset = (preset) => {
  currentPreset = preset;
  activePreset.textContent = preset.charAt(0).toUpperCase() + preset.slice(1);

  presetButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.preset === preset);
  });

  navButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.transition === preset);
  });
};

const runPreview = (mode) => {
  const enterClass = `motion-enter ${currentPreset}`;
  const exitClass = `motion-exit ${currentPreset}`;

  previewCard.classList.remove("motion-enter", "motion-exit", "fade", "slide", "scale", "spin");
  previewCard.classList.add(mode === "in" ? "motion-enter" : "motion-exit", currentPreset);

  window.setTimeout(() => {
    if (mode === "out") {
      previewCard.classList.remove("motion-exit", currentPreset);
    }
  }, 600);
};

presetButtons.forEach((button) => {
  button.addEventListener("click", () => swapPreset(button.dataset.preset));
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => swapPreset(button.dataset.transition));
});

utilityToggles.forEach((toggle) => {
  toggle.addEventListener("change", () => {
    const utility = toggle.dataset.toggleUtility;
    previewCard.classList.toggle(utility, toggle.checked);
  });
});

previewTriggers.forEach((button) => {
  button.addEventListener("click", () => runPreview(button.dataset.preview));
});

if (banner) {
  banner.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-banner-close")) {
      banner.classList.add("motion-exit", currentPreset);
      window.setTimeout(() => banner.remove(), 500);
    }
  });
}

modalOpeners.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.add("is-visible");
    modal.setAttribute("aria-hidden", "false");
  });
});

modalClosers.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.remove("is-visible");
    modal.setAttribute("aria-hidden", "true");
  });
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
  });
});

motionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.motion;
    const animationClass = type === "pulse" ? "btn-pulse" : "btn-sweep";

    button.classList.remove("btn-pulse", "btn-sweep");
    void button.offsetWidth;
    button.classList.add(animationClass);

    runPreview(type === "pulse" ? "in" : "out");
  });

  button.addEventListener("animationend", () => {
    button.classList.remove("btn-pulse", "btn-sweep");
  });
});

swapPreset(currentPreset);
