# 메뉴 이미지

업로드한 음식 이미지는 이 폴더에 저장합니다.

이미지를 추가한 뒤 `src/data/menus.ts`의 해당 메뉴에 정적 경로를 연결합니다.

```ts
imageSource: require('../../assets/images/foods/example.jpg'),
```

지원 형식은 PNG, JPG, JPEG, WEBP입니다. 메뉴 ID와 같은 파일명을 사용하면 관리하기 쉽습니다.
