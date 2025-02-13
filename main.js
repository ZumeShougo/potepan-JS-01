let startTime; // 計測開始時刻を保存
let elapsedTime = 0; // 経過時間を保存
let timerInterval; // setIntervalのIDを保存

// ストップウォッチの時間をフォーマットする関数
function formatTime(time) {
  const hours = Math.floor(time / (60 * 60 * 1000));
  const minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((time % (60 * 1000)) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

// 計測を開始する関数
function startTimer() {
  startTime = Date.now() - elapsedTime; //現在時刻から経過時間を引いて開始時刻を計算する。
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime; //現在時刻から開始時刻を引いて経過時間を計算する。
    $(".stopwatch-result").text(formatTime(elapsedTime));//関数formatTimeに引数elapsedTime(経過時間)を渡す。
  }, 10); // 10ミリ秒ごとに更新
}

// スタートボタンにクリックイベントを追加
$(".button-area button").eq(0).on("click", function () {
  startTimer(); // スタートボタンで計測開始
});
