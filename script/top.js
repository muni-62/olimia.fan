// スクロールトリガーの導入

gsap.registerPlugin(ScrollTrigger);

// トップ画像
const tImgTag = document.querySelector('.topImg'); // 要素を選択
const tImg = document.querySelector('.img');
var header = document.getElementById('header');
const page = document.getElementById('topPage');
const footer = document.getElementsByTagName('footer');
const topTxt = document.getElementById('topTxt');





// テキストを行ごとに分割してspan要素を作成
const textContainer = document.getElementById('textContainer');
const text = textContainer.innerHTML; // 元のHTMLを取得
textContainer.innerHTML = ''; // 元のテキストをクリア

// 行ごとに分割
const lines = text.split('<br>').map(line => {
    const lineDiv = document.createElement('div');
    lineDiv.classList.add('line'); // 行を表すdivを作成

    // 各行を文字ごとに分割
    line.split('').forEach((char) => {
        const span = document.createElement('span');
        span.classList.add('letter');
        span.textContent = char; // 文字を設定
        lineDiv.appendChild(span); // 行にspanを追加
    });

    textContainer.appendChild(lineDiv); // 行をテキストコンテナに追加
    return lineDiv; // 行のdivを返す
});

// ページ読み込み時に各行を順番に表示
window.addEventListener('load', () => {
    lines.forEach((lineDiv, lineIndex) => {
        // 各行の初期状態を設定
        gsap.set(lineDiv, { opacity: 0, y: 20 });

        // 各行の文字を順番に表示
        Array.from(lineDiv.children).forEach((letter, letterIndex) => {
            gsap.to(letter, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: letterIndex * 0.1 + lineIndex * 0.5 // 行ごとに表示に遅延を追加
            });
        });

        // 行全体のアニメーション
        gsap.to(lineDiv, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: lineIndex * 0.1 // 行ごとに表示に遅延を追加
        });
    });
});

ScrollTrigger.create({
    trigger: ".topImg",
    pin: ".topImg .imgBox",
    markers: false,
    start: "top top",
    end: "bottom top",
  });

// gsap.to(topTxt, {
//     y: "-100vh", // 縦に100vh移動
//     scrollTrigger: {
//         trigger: topTxt,
//         start: "top top", // トリガーの開始位置
//         end: "bottom top", // トリガーの終了位置
//         scrub: true, // スクロールに合わせてアニメーションを行う
//         pin: true, // スクロール中に位置を固定
//         markers:true
//     }
// });

//   横にスクロールする
const wrapper = document.querySelector('#wrapper');
if(wrapper) {
    // gsap.registerPlugin(ScrollTrigger); // npm/yarnの際に必要
    const panels = gsap.utils.toArray('.panel');
    const wrapperWidth = wrapper.offsetWidth;
    /**
    * 横スクロール開始
    */
    gsap.to( panels, {
        xPercent: -100 * (panels.length - 1), // transformX
        ease: "none", // easingの設定
        scrollTrigger: { // scrollTrigger
            trigger: wrapper, // アニメーションの対象となる要素
            pin: true, // 要素を固定する
            scrub: 1, // スクロールとアニメーションを同期させる。数値で秒数の設定に
            snap: { // スナップスクロールにする
                snapTo: 1 / ( panels.length - 1 ), // スナップで移動させる位置
                duration: {min: .4, max: .6}, // スナップで移動する際の遅延時間
                ease: "none" // easing
            },
            end: () => "+=" + wrapperWidth // アニメーションの終了タイミング
        }
    })
}



