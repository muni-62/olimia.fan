// GSAPのタイムラインとScrollTriggerの設定
const Card01 = gsap.timeline({
    scrollTrigger: {
        trigger: '#card1', // スクロールイベントの発火条件となるセレクタ
        start: 'top 50%', // スクロールイベントの開始地点
        end: 'bottom top', // スクロールイベントの終了地点
        onEnter: play,
        onEnterBack: play,
        onLeaveBack: pause,
        // onLeave: pause
    }
});
function play() {
    // toggleActiveState(true);
    const triggerElement = document.getElementById('profile-card')
    if (triggerElement) {
        triggerElement.classList.add('activeP'); // 'active' クラスを追加
        triggerElement.classList.remove('removeP'); // 'active' クラスを追加
    }
}
function pause() {
    console.log("外れました");
    const triggerElement = document.getElementById('profile-card')
    if (triggerElement) {
        triggerElement.classList.remove('activeP'); // 'active' クラスを追加
        triggerElement.classList.add('removeP');
    }
}

const Card02 = gsap.timeline({
    scrollTrigger: {
        trigger: '#card2', // スクロールイベントの発火条件となるセレクタ
        start: 'top 50%', // スクロールイベントの開始地点
        end: 'bottom top', // スクロールイベントの終了地点
        onEnter: play2,
        onEnterBack: play2,
        onLeaveBack: pause2,
        // onLeave: pause
    }
});


function play2() {
    // toggleActiveState(true);
    const triggerElement = document.getElementById('profile-card2')
    if (triggerElement) {
        triggerElement.classList.add('activeP'); // 'active' クラスを追加
        triggerElement.classList.remove('removeP'); // 'active' クラスを追加
    }
}
function pause2() {
    // toggleActiveState(true);
    const triggerElement = document.getElementById('profile-card2')
    if (triggerElement) {
        triggerElement.classList.remove('activeP'); // 'active' クラスを追加
        triggerElement.classList.add('removeP');
    }
}




// 背景で横にスクロールするテキスト
const backgroundText = gsap.timeline({
    scrollTrigger: {
        trigger: '.mission', // スクロールイベントの発火条件となるセレクタ
        start: 'top bottom', //スクロールイベントの開始地点
        end: 'bottom bottom', //スクロールイベントの終了地点
        markers: false,
       // 以下、onイベント
        onEnter: () => {
            bPlay()
        },
        onEnterBack: () => {
            bPlay()
        },
        onLeaveBack: () => {
            bPause()
        },
        onLeave: () => {
            bPause()
        }
      }
  })

  const scrollHandler = function() {
    const scrollPosition = window.scrollY; // 現在のスクロール位置
    const speedFactor = 2.5; // スクロール速度を調整する係数（0.5倍の速さ）
    const backgroundText = document.querySelector('.background-text');
    
    // スクロール位置に応じてテキストを左に移動
    backgroundText.style.transform = `translateX(-${scrollPosition * speedFactor}px)`;
};

function bPlay() {
    const backgroundText = document.getElementById('background-text');
    backgroundText.classList.add("active")

    window.addEventListener('scroll', scrollHandler);
}
function bPause() {
    const backgroundText = document.getElementById('background-text');
    backgroundText.classList.remove("active")

    window.removeEventListener('scroll', scrollHandler);
}
