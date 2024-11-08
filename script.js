// タイトルフェードイン
const title = document.getElementById('title1');

// タイムラインを作成
const titleTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: title, // トリガーとなる要素
        start: 'top 50%', // スクロールイベントの開始地点
        end: 'bottom top', // スクロール距離を指定
        onEnter: () => {
            titleIn(); // スクロールで入った時に実行
        },
        markers: false // デバッグ用マーカーを表示
    }
});

// タイトルを表示させる関数
function titleIn() {
    // const title = document.getElementById('title1');
    const title = document.querySelector('.title');

    title.classList.add('titleIn'); // CSSクラスを追加してスタイルを適用
}


// サイドバー
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const sideMenu = document.getElementById('sideMenu');
    const shadow = document.getElementById('shadow');
    
    menuButton.addEventListener('click', function() {
        console.log('要素がクリックされました');
        if (menuButton.classList.contains('active')) {
            menuButton.classList.remove('active');
            sideMenu.classList.remove('active');
            shadow.classList.remove('active');
            console.log('削除');
            
            document.body.style.overflow = 'auto';
            document.documentElement.style.setProperty('--primary-color', '#0b152e');
            document.documentElement.style.setProperty('--secondary-color', '#82b2ae');
        }
        else{
        menuButton.classList.add('active');
        sideMenu.classList.add('active');
        shadow.classList.add('active');

        document.body.style.overflow = 'hidden';
        document.documentElement.style.setProperty('--primary-color', '#82b2ae');
        document.documentElement.style.setProperty('--secondary-color', '#0b152e');
        }
    });
});


// 右クリック検知
document.addEventListener('contextmenu', function(e) {
    console.log('右クリックが検知されました');
    // document.body.style.cursor = "url('img/通常の選択.cur') , auto"
    // ここに右クリック時の処理を記述
});
