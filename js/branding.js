/* ===============================
  Central Branding Configuration
  =============================== */

const BRANDS = {
  // Option 1: The Geometric Node Logo (Current Default)
  default: {
    light: "images/logo_light.svg", 
    dark:  "images/logo_dark.svg"
  },

  // Option 2: The Wordmark / Ant Logo
  // Mapping logic: 
  //   Theme is Light -> We need Dark Text -> use "...word_dark.svg"
  //   Theme is Dark  -> We need Light Text -> use "...word_light.svg"
  wordmark: {
    light: "images/antsx_ant_word_light.svg",
    dark:  "images/antsx_ant_word_dark.svg"
  }
};

/* ===============================
  Configuration Switch
  =============================== */
// Change this to "wordmark" to switch to the new files
const ACTIVE_BRAND = "wordmark"; 


/* ===============================
  Logic (Do not edit below)
  =============================== */

function applyANTsXBranding() {
  const logoImg = document.getElementById("logo-img");
  if (!logoImg) return;

  const isDark = document.body.classList.contains("dark");
  
  // If active theme is dark, use the "dark" key (light ink)
  // If active theme is light, use the "light" key (dark ink)
  const themeKey = isDark ? "dark" : "light";

  if (BRANDS[ACTIVE_BRAND] && BRANDS[ACTIVE_BRAND][themeKey]) {
    logoImg.src = BRANDS[ACTIVE_BRAND][themeKey];
  }
}