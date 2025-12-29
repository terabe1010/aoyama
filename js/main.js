$(function () {

  /*=================================================
  ドロップダウンメニュー
  ===================================================
  */
  $('.has-child-01').on('click', function () {
    if ($('.has-child-01').hasClass('active-01')) {
      $('.has-child-01').removeClass('active-01');
    } else {
      $('.has-child-01').addClass('active-01');
    }
  });
  $('.has-child-02').on('click', function () {
    if ($('.has-child-02').hasClass('active-02')) {
      $('.has-child-02').removeClass('active-02');
    } else {
      $('.has-child-02').addClass('active-02');
    }
  });
  $('.has-child-03').on('click', function () {
    if ($('.has-child-03').hasClass('active-03')) {
      $('.has-child-03').removeClass('active-03');
    } else {
      $('.has-child-03').addClass('active-03');
    }
  });

  /*=================================================
  アコーディオン
  ===================================================*/
  $('.title.a-title').on('click', function () {//タイトル要素をクリックしたら
    var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作

    if ($(this).hasClass('close')) {//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去し
    } else {//それ以外は
      $(this).addClass('close');//クラス名closeを付与
    }
  });

  /*=================================================
  トップに戻る
  ===================================================*/
  let pagetop = $('#to-top');
  // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
  pagetop.hide();

  // スクロールイベント（スクロールされた際に実行）
  $(window).scroll(function () {
    // スクロール位置が700pxを超えた場合
    if ($(this).scrollTop() > 700) {
      // トップに戻るボタンを表示する
      pagetop.fadeIn();

      // スクロール位置が700px未満の場合
    } else {
      // トップに戻るボタンを非表示にする
      pagetop.fadeOut();
    }
  });

  // クリックイベント（ボタンがクリックされた際に実行）
  pagetop.click(function () {
    // 0.5秒かけてページトップへ移動
    $('body,html').animate({ scrollTop: 0 }, 500);

    // イベントが親要素へ伝播しないための記述
    // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
    return false;
  });

  /*=================================================
  フェード
  ===================================================*/
  // スクロールして表示領域に入ったらclass付与
  $(".js-fadeUp").on("inview", function () {
    $(this).addClass("is-inview");
  });

  /*=================================================
  スムーススクロール
  ===================================================*/
  $('a[href^="#"]').click(function () {
    // スクロールの速度
    let speed = 1500;
    // スクロールタイプ
    let type = 'swing';
    // href属性の取得
    let href = $(this).attr("href");
    // 移動先の取得（hrefが#indexならトップ$(html)に、）
    let target = $(href == "#index" ? 'html' : href);
    // 移動先のポジション取得
    let position = target.offset().top;
    // animateでスムーススクロール
    $('body,html').animate({ scrollTop: position }, speed, type);
    return false;
  });
});

/*=================================================
ハンバーガーメニュー
===================================================*/
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const hamburger = document.getElementById("hamburger");
  const mask = document.getElementById("mask");
  const menuLinks = document.querySelectorAll("#menu-sp a");

  // ハンバーガークリックで開閉
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      header.classList.toggle("open");
      document.body.classList.toggle("open"); // ハンバーガーアニメ用
    });
  }

  // #maskクリックで閉じる
  if (mask) {
    mask.addEventListener("click", () => {
      header.classList.remove("open");
      document.body.classList.remove("open");
    });
  }

  // メニュー内リンククリックで閉じる
  if (menuLinks.length > 0) {
    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        header.classList.remove("open");
        document.body.classList.remove("open");
      });
    });
  }
});


/*=================================================
価格の切り替え
===================================================*/

document.addEventListener('DOMContentLoaded', () => {

  const select  = document.querySelector('.season-select');
  const current = document.querySelector('.season-current');
  const options = document.querySelectorAll('.season-options button');
  const prices  = document.querySelectorAll('.price');

  /* 開閉 */
  current.addEventListener('click', (e) => {
    e.stopPropagation();
    select.classList.toggle('open');
  });

  /* 選択 */
  options.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();

      const season = btn.dataset.season;

      // 表示切替
      current.querySelector('.label').textContent = btn.textContent;
      current.className = `season-current ${season} active`;

      // 価格切替
      prices.forEach(cell => {
        const value = cell.dataset[season];
        if (!value) return;
        cell.textContent = Number(value).toLocaleString() + '円';
      });

      // 閉じる（アニメーション付き）
      select.classList.remove('open');
    });
  });

  /* 外側クリックで閉じる */
  document.addEventListener('click', () => {
    select.classList.remove('open');
  });

});





