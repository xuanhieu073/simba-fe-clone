import "./pugImport";
import "../css/base.scss";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import "./affluent-header";
// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";

const swiper = new Swiper();
if (module.hot) {
  module.hot.accept(console.error);
  module.hot.dispose(() => {
    window.location.reload();
  });
}
