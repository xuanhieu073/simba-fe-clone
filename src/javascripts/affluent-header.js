document.addEventListener("alpine:init", () => {
  Alpine.data("affluentheader", () => ({
    menuShow: false,
    async init() {
      const _this = this;
      const root = this.$root;
      const menuLength = root.querySelectorAll('.affluent-header_menu li').length;
      if(menuLength == 0) {
        _this.$refs.menuIcon.style.setProperty('visibility', 'hidden');
      }
      const observerHeader = new IntersectionObserver(
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
      await this.$nextTick();
      observerHeader.observe(root);
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
