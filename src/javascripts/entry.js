import "./pugImport";
import "../css/index.scss";
import "./affluent-header";
import "./lazy-load-image";
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
