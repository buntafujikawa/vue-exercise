# vuex-exercise

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8000
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

# reference
http://www.webopixel.net/javascript/1240.html

```shell
$ npm install vuex babel-polyfill
```

# tips
タイプミスなどで不用意にステートを変更しても警告がでないので、開発中はstrictモードを利用する

```vue
const store = new Vuex.Store({
strict: process.env.NODE_ENV !== 'production',
})
```

コンポーネントとの切り分けは
まずはDOMとそれに関わる処理をコンポーネント、viewとは無関係なAPIからのデータの取得やデータの加工をVuexといった分け方で意識してみると良い