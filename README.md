# 自炊Health
献立の計画や買い出しを支援することで自炊を促進する健康アプリで、
- 一日の献立を考えるのが面倒
- 買い出しの際に購入食材の把握が手間
- 食費の概算が知りたい
といった問題の解決を支援する。

このリポジトリは、自炊Healthのフロントエンド部分であり、バックエンド部分は
https://github.com/Hiromu25/team-bash-backend

---
## 機能

### 献立表示カレンダー
<img height="400" alt="949a6bcfcfc7a9fde311bca9410132f5" src="https://user-images.githubusercontent.com/42612676/215488579-68314c61-4327-4d57-b8b8-21ead8a956e0.png"><img height="400" alt="3c547a5e8791704bdb668cec027cdf2d" src="https://user-images.githubusercontent.com/42612676/215488952-14039843-5200-4ec0-8642-b97260d0fd4a.png">

- 献立をカレンダー形式で表示。
    - 朝,昼,晩を色分けし,上から順に表示
    - カレンダー下部にリスト形式でも表示される。

### 食材・金額表示機能
<img height="350" alt="6af6851c9b4206273653dd08eb09298e" src="https://user-images.githubusercontent.com/42612676/215488821-615cbfa5-7fcd-441c-89fd-f01cbd9e5800.png">
カレンダーより期間を選択し、期間内の買い出し食材リストと献立の概算金額を表示する。

### 献立追加機能
<img height="400" src="https://user-images.githubusercontent.com/42612676/215488418-d4f75996-ed95-419b-a28e-d9046b213e48.jpg">

- カレンダーから献立を追加したい日付を選択し、献立選択画面へ
- 献立選択画面では、アプリが提示する献立が1品ごとに表示される
    - 献立名,献立画像,調理時間を確認できる
    - 詳細ボタンを押すと献立の作り方のページが新規タブで表示される
    - おすすめ献立はタイトルに星アイコンが追加され、一覧の先頭に表示される
    
---
## システム構成

<img height="400" alt="f6ddeb26d4f61de430b9e40c49f0c7a9" src="https://user-images.githubusercontent.com/42612676/215489937-ea322a64-d2b1-4915-9894-f6a587467701.png">

