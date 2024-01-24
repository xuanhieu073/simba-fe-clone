document.addEventListener("alpine:init", () => {
  Alpine.data("affluentheader", () => ({
    menuShow: false,
    init() {
      const _this = this;
      const root = this.$root;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const percentageVisible = entry.intersectionRatio * 100;
            console.log(`Percentage visible: ${percentageVisible.toFixed(2)}%`);
            if (percentageVisible < 100) {
              _this.$refs.container.style.setProperty("--p", "fixed");
              _this.$refs.reserve.style.setProperty(
                "--h",
                `${_this.$refs.container.offsetHeight}px`
              );
            } else {
              // _this.$refs.container.style.setProperty("--p", "relative");
              // _this.$refs.reserve.style.setProperty("--h", `0px`);
            }
          });
        },
        {
          threshold: [0, 1],
        }
      );
      observer.observe(root);
    },
    toggleShowMenu() {
      this.menuShow = !this.menuShow;
      if (this.menuShow) {
        this.$refs.menu.style.setProperty("--d", "block");
        this.$refs.layout.style.setProperty("--h", "100vh");
        document.body.style.overflow = "hidden";
      } else {
        this.$refs.menu.style.setProperty("--d", "none");
        this.$refs.layout.style.setProperty("--h", "auto");
        document.body.style.overflow = null;
      }
    },
  }));
});
