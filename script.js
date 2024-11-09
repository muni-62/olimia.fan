// マウスポインター
const diamond = document.querySelector('.diamond');
const circle = document.querySelector('.circle');
let mouseX = 0;
let mouseY = 0;
let diamondX = 0;
let diamondY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // 円の位置をマウスカーソルにぴったり合わせる
    circle.style.left = `${mouseX - 5}px`; // 円の中心をマウスカーソルに合わせる
    circle.style.top = `${mouseY - 5}px`;
});

function animate() {
    diamondX += (mouseX - diamondX) * 0.1; // 0.1の係数で追従の速さを調整
    diamondY += (mouseY - diamondY) * 0.1;

    diamond.style.left = `${diamondX - 17.5}px`; // ひし形の中心をマウスカーソルに合わせる
    diamond.style.top = `${diamondY - 17.5}px`;

    requestAnimationFrame(animate); // 次のフレームで再度実行
}

animate(); // アニメーションを開始





gsap.registerPlugin(ScrollTrigger);// テキストを行ごとに分割してspan要素を作成
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


