# textyle.js

## **textyle.js** とは

`Text Style JavaSctipt` の略で、CSSを書かずにテキストのスタイル（`font-size`, `color`）を指定することを可能にするライブラリです。


## 使用方法

HTMLから **textyle.js** を読み込んでください。

```HTML
<body>

  <!-- srcには textyle.js のパスを指定してください -->
  <script type="text/javascript" src="https://7110.github.io/textyle.js/textyle.js"></script>
</body>
```


## 記述方法

スタイルを適用したいタグに **`_`** から始まるクラス名を指定します。

* `font-size`を指定したい時

  ```HTML
  <p class="_31.4px">31.4pxになります</p>
  <p class="_1.25em">1.25emになります</p>
  <p class="_1.5rem">1.5remになります</p>
  <p class="_120%">120%になります</p>
  ```

* `color`を指定したい時

  ```HTML
  <p class="_#F00">#F00になります</p>
  <p class="_#dadada">#dadadaになります</p>
  <p class="_rgb(255,0,0)">rgb(255,0,0)になります</p>
  <p class="_rgba(255,0,255,0.5)">rgba(255,0,255,0.5)になります</p>
  ```
