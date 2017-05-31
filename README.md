# textyle.js

### **textyle.js** とは  
`Text Style JavaSctipt` の略で、CSSを書かずにテキストの`font-size`、`color`のスタイルを指定することを可能にするライブラリです。

### 使用方法  
1. HTMLファイルで **textyle.js** を読み込む  

  ```HTML
  <head>
    <!-- srcには textyle.js のパスを指定してください -->
    <script type="text/javascript" src="./textyle.js"></script>
  </head>
  ```

2. スタイルを指定したいテキストを`font`タグで囲う  

  ```HTML
  <font>スタイルを指定したいテキスト</font>
  ```

3. 記述方法  
`font`タグに **`_`** から始まるクラス名を指定します。  

  * `font-size`を指定したい時の例  

    ```HTML
    <font class="_31.4px">31.4pxになります</font>
    <font class="_1.25em">1.25emになります</font>
    <font class="_1.5rem">1.5remになります</font>
    ```

  * `color`を指定したい時の例  

    ```HTML
    <font class="_#F00">#F00になります</font>
    <font class="_#DADADA">#DADADAになります</font>
    ```
