# Ad広告ブロッカー Chrome 拡張機能.


このシンプルな広告ブロッカー Chrome エクステンションは、特定のドメイン上の広告を `declarativeNetRequest` API を使用してブロックします。このエクステンションは、さまざまな広告スクリプトやリクエストをブロックし、不要な広告を削除することでブラウジング体験を向上させます。

## 機能

- 指定されたドメイン上の広告をブロック
- `declarativeNetRequest` API を使用して効率的かつ信頼性の高い広告ブロックを実現
- インストールと使用が簡単

## インストール方法

広告ブロッカー Chrome エクステンションをインストールするには、以下の手順に従ってください。

   ```sh
   git clone https://github.com/your-username/ad-blocker-extension.git
   ```

1. このリポジトリをローカルマシンにクローンします。
2. Chromeブラウザで `chrome://extensions/` にアクセスし、「デベロッパーモード」をオンにします。
3. 「パッケージ化されていないエクステンションを読み込む」をクリックし、クローンした `ad-blocker-extension` フォルダを選択します。
4. エクステンションがインストールされ、有効になったことを確認します。

## ファイル構成

- `manifest.json` - エクステンションのメタデータと権限の設定
- `background.js` - 広告ブロックのルールを定義するバックグラウンドスクリプト
- `popup.html` - エクステンションのポップアップページ
- `icons/` - エクステンションのアイコン
