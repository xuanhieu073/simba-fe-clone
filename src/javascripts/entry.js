import "./pugImport";
import "../css/index.scss";

import "./init-lazy";
import "./lazy-load-image";
import "./affluent-header";
import "./affluent-products-grid";
import "./affluent-hero";
import "./affluent-leadin-section";
import "./affluent-contact-form";
import "./affluent-sign-up";

if (module.hot) {
  module.hot.accept(console.error);
  module.hot.dispose(() => {
    window.location.reload();
  });
}
