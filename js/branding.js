/* ===============================
  Central Branding Configuration
  =============================== */

const BRANDS = {
  // Option 1: The Geometric Node Logo
  default: {
   light: "images/logo_light.svg", 
   dark: "images/logo_dark.svg"
  },

  // Option 2: The Wordmark / Ant Logo
  wordmark: {
   light: "images/antsx_ant_word_light2.svg",
   dark: "images/antsx_ant_word_dark2.svg"
  }
};

/* ===============================
  Configuration Switch
  =============================== */
// Change to "default" or "wordmark"
const ACTIVE_BRAND = "wordmark"; 


/* ===============================
  Logic (Do not edit below)
  =============================== */

function applyANTsXBranding() {
  const logoImg = document.getElementById("logo-img");
  if (!logoImg) return;

  const isDark = document.body.classList.contains("dark");
  const themeKey = isDark ? "dark" : "light";

  if (BRANDS[ACTIVE_BRAND] && BRANDS[ACTIVE_BRAND][themeKey]) {
   logoImg.src = BRANDS[ACTIVE_BRAND][themeKey];
  }
}
