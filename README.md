# TypeScript + React + Node.js + Prisma on Render.com サンプルプロジェクト

2022年度新歓カリキュラム全部入り構成

## 手順

```shell
$ npm create vite@latest
✔ Project name: … frontend
✔ Select a framework: › react
✔ Select a variant: › react-ts

Scaffolding project in /home/user/projects/utcode/typescript-react-node-template/frontend...

Done. Now run:

  cd frontend
  npm install
  npm run dev

$ cd frontend
$ npm install
$ touch .env
$ cd ..
$ mkdir backend
$ cd backend
$ npm init -y
$ npm install express cors
$ npm install -D typescript ts-node @types/express @types/cors
$ npx tsc --init
$ npx prisma init
$ touch main.ts
```

その他

- `/frontend/.env` を作成して `VITE_API_ENDPOINT` を `http://localhost:3000` に設定する
- `/backend/.env` の `DATABASE_URL` を設定する
- `/backend/prisma/schema.prisma` をデータベースに反映させるために `npx prisma db push` を実行する
- `/backend/tsconfig.json` の `outDir` オプションを `./dist` にしてトランスパイル結果が `/backend/dist` に入るようにする
- `/backend/dist` を `/backend/.gitignore` に追加する

## 使い方

Express の起動: `cd frontend && npm run dev`
Vite 開発用サーバーの起動: `cd backend && npm run dev`
