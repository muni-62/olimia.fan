// const cards = document.querySelectorAll(".card");
// cards.forEach((card) => {
//   function flip() {
//     gsap.to(card.children, {
//       rotationY: "+=180", //固定値の場合は、値が変わらないず再度表面に戻らないから相対値にする。
//       ease: "power2.inOut", //加速して減速する
//       duration: 1, //
//       onComplete: oneClick, //アニメーション完了後に再度、クリックイベントを登録（連続クリック防止のため）
//     });
//     gsap.to(card.children, {
//       z: "-=200",
//       ease: "power2.in", //徐々に加速
//       duration: 0.5,
//       repeat: 1, //2回繰り返す
//       yoyo: true, //繰り返すときに逆に移動。初回は「値なし」から-200まで進む。2回目は、-200から「値なし」に戻る
//     });
//   }
//   function oneClick() {
//     card.addEventListener("click", flip, { once: true }); //1回だけ呼び出し
//   }

//   oneClick();
// });



const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  function flip() {
    // 他のカードをチェックして、表の場合はフリップ
    cards.forEach((otherCard) => {
if (otherCard!== card && !otherCard.classList.contains("front")) {
          gsap.to(otherCard.children, {
          rotationY: "+=180",
          ease: "power2.inOut",
          duration: 1,
          onComplete: oneClick, // アニメーション完了後に再度、クリックイベントを登録
        });
        gsap.to(otherCard.children, {
          z: "-=200",
          ease: "power2.in",
          duration: 0.5,
          repeat: 1,
          yoyo: true,
        });
        otherCard.classList.add("front"); // フリップされたことを記録
      }
    });

    // 自分のカードをフリップ
    gsap.to(card.children, {
      rotationY: "+=180",
      ease: "power2.inOut",
      duration: 1,
      onComplete: oneClick,
    });
    gsap.to(card.children, {
      z: "-=200",
      ease: "power2.in",
      duration: 0.5,
      repeat: 1,
      yoyo: true,
    });
    if (card.classList.contains("front")) {
      card.classList.remove("front"); // "front" クラスが存在する場合は削除
  } else {
      card.classList.add("front"); // "front" クラスが存在しない場合は追加
  }
  }
  document.addEventListener("DOMContentLoaded", function() {
    flip(); // ページ読み込み時に flip 関数を呼び出す
    card.classList.add("front");
});
  function oneClick() {
    card.addEventListener("click", flip, { once: true });
  }

  oneClick();
});


