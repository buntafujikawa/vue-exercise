<template>
  <section>
    <header>
      <slot name="header">子コンポーネントで定義したデフォルトタイトル</slot>
    </header>
    <div class="content">
      <slot>子コンポーネントで定義したデフォルトコンテンツ</slot>
    </div>
    <slot name="footer">
    </slot>
    <div>
      <slot text="子コンポーネントで定義したテキスト"></slot>
    </div>
    <keep-alive>
      <!-- 親コンポーネントが破棄される時に一緒に破棄される -->
    </keep-alive>
  </section>
</template>
