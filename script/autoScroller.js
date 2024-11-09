/**
 * 水平方向無限スクロール
 *
 * @example infiniteScroller（）；
 * @example infiniteScroller（target, { clones: 3 }）；
 * @example infiniteScroller(scrollTarget, {
 *            clones: 1,
 *            gap: "30px",
 *            duration: "15s",
 *            direction: "left",
 *            pauseOnHover: true
 *          });
 */

// 参考：https://qiita.com/rhrh__8/items/66466fd358060f412060
// 左移動
const infiniteScroller = (target, options) => {
    const defaultOptions = {
      clones: 1,
      direction: "left",
      duration: "20s",
      pauseOnHover: false
    };
    const scrollOptions = { ...defaultOptions, ...options };
  
    const body = document.body;
    const scrollTarget = target || document.querySelector(".js-scrollTrack");
    const scrollList = scrollTarget.querySelector(".js-scrollList");
    const scrollCont = scrollTarget.querySelectorAll(".js-scrollCont");
    const cloneLength = scrollOptions.clones + 1;
  
    const init = () => {
      scrollTarget.setAttribute("data-scroll-initialized", "true");
      body.style.setProperty(
        "--_infinite-scroll-clone-length",
        cloneLength.toString()
      );
  
      scrollOptions.direction === "left"
        ? scrollTarget.setAttribute("data-scroll-direction", "left")
        : scrollTarget.setAttribute("data-scroll-direction", "right");
  
      if (scrollOptions.pauseOnHover)
        scrollTarget.setAttribute("data-scroll-pause-on-hover", "true");
  
      if (scrollOptions.gap)
        body.style.setProperty("--_infinite-scroll-gap", scrollOptions.gap);
      if (scrollOptions.duration)
        body.style.setProperty(
          "--_infinite-scroll-duration",
          scrollOptions.duration
        );
  
      for (let i = 0; i < scrollOptions.clones; i++) {
        scrollCont.forEach((element) => {
          const duplicatedItem = element.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollList
            ? scrollList.appendChild(duplicatedItem)
            : scrollTarget.appendChild(duplicatedItem);
        });
      }
    };
  
    init();
  };
  
  window.addEventListener("DOMContentLoaded", () => {
    const scrollTarget = document.querySelector(".js-scrollTrack");
    const scrollTarget2 = document.querySelector(".js-scrollTrack2");
    if (scrollTarget2) {console.log("あるよ");
    
        
    }
    if (!scrollTarget) return;
  
    infiniteScroller(scrollTarget, {
      clones: 1,
      gap: "30px"
    });
    infiniteScroller(scrollTarget2, {
        clones: 1,
        gap: "30px",
        direction: "right",
        pauseOnHover: false
      });
  });

// 右移動
