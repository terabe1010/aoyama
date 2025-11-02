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
  ハンバーガーメニュー
  ===================================================*/
  $('.hamburger').on('click', function () {
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });
  
  // #maskのエリアをクリックした時にメニューを閉じる
  $('#mask').on('click', function () {
    $('#header').removeClass('open');
  });

  // リンクをクリックした時にメニューを閉じる
  $('#menu-sp a').on('click', function () {
    $('#header').removeClass('open');
  });

  /*=================================================
  アコーディオン
  ===================================================*/
  $('.title').on('click', function () {//タイトル要素をクリックしたら
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
});