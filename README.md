# 잇득 랜딩

잇득 고객 수요를 확인하기 위한 웹 프리토타입입니다.

## 로컬 실행



```bash
npm install
npm run web
```

## 검증

```bash
npm run lint
npm run typecheck
npm run build:web
```

GitHub의 `main` 브랜치를 Vercel 프로젝트에 연결하면 변경 사항이 자동 배포됩니다.

## 배포

`main` 브랜치에 변경 사항을 푸시하면 연결된 Vercel 프로젝트가 자동으로 다시 배포됩니다.

## 메뉴 이미지

메뉴 이미지는 `assets/images/foods/`에 저장하고 `src/data/menus.ts`에서 각 메뉴에 연결합니다.
