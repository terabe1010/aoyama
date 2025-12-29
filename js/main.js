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
  let speed = 1500;
  let type = 'swing';
  let href = $(this).attr("href");
  let target = $(href == "#index" ? 'html' : href);

  if (!target.length) return false;

  let headerHeight = 100; // ← ヘッダー高さ
  let position = target.offset().top - headerHeight;

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

  const seasonSelects = document.querySelectorAll('.season-select');
  const prices = document.querySelectorAll('.price');

  seasonSelects.forEach(select => {

    const currentBtn = select.querySelector('.season-current');
    const options = select.querySelector('.season-options');
    const optionButtons = options.querySelectorAll('button');

    /* ===== 開閉 ===== */
    currentBtn.addEventListener('click', e => {
      e.stopPropagation();

      // 他を閉じる
      seasonSelects.forEach(s => {
        if (s !== select) s.classList.remove('open');
      });

      select.classList.toggle('open');
    });

    /* ===== 選択 ===== */
    optionButtons.forEach(btn => {
      btn.addEventListener('click', () => {

        const season = btn.dataset.season;

        // 表示テキスト変更
        currentBtn.querySelector('.label').textContent = btn.textContent;

        // クラス切替
        currentBtn.className = 'season-current active ' + season;

        // 閉じる
        select.classList.remove('open');

        // 価格切替（全テーブル共通）
        prices.forEach(cell => {
          const value = cell.dataset[season];

          // 値がない・空・空白の場合
          if (!value || value.trim() === '') {
            cell.textContent = '—';
            return;
          }

          cell.textContent = Number(value).toLocaleString() + ' 円';
        });

      });
    });

  });

  /* ===== 外側クリックで閉じる ===== */
  document.addEventListener('click', () => {
    seasonSelects.forEach(select => select.classList.remove('open'));
  });

});





