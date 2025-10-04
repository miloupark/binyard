# SASS

[SASS](https://sass-lang.com/)

## Mixin

```scss
@mixin flex($direction, $align) {
  display: flex;
  flex-direction: $direction;
  align-items: $align;
}

el1 {
  @include flex(column, center);
}

el2 {
  @include flex(row-reverse, flex-start);
}

el3 {
  @include flex(row, stretch);
}
```

```scss
@mixin flex($direction, $align: start) {
  display: flex;
  flex-direction: $direction;
  align-items: $align;
}
```

초기값 설정도 가능하다.
