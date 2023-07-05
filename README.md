# 안녕하세요! Damf4 FE입니다.

## 사용한 기술
<img src="https://img.shields.io/badge/googlecloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white"><img src="https://img.shields.io/badge/Remix-000000?style=for-the-badge&logo=remix&logoColor=white"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"><img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"><img src="https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white"><img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white"><img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white">

## 사이트 사용법
![image](https://github.com/OhGyoungHwan/Damf4/assets/71165066/4eea7efc-2754-41d8-bcd8-b65eff76c1bd)


### app 파일 구조

```bash
D:.
│  entry.client.tsx
│  entry.server.tsx
│  root.tsx
│
├─components
│  │  CardPlayer.tsx
│  │  CompareStats.tsx
│  │  Filter.tsx
│  │  Footer.tsx
│  │  MarqueeDelay.tsx
│  │  MiniStats.tsx
│  │  NavBar.tsx
│  │  PostionBadge.tsx
│  │  Profile.tsx
│  │  StatsTable.tsx
│  │  SwiperSkeleton.tsx
│  │  TraitBadge.tsx
│  │
│  ├─Form
│  │      AddSelectList.tsx
│  │      AddSelectMinMaxList.tsx
│  │      CheckList.tsx
│  │      InputSearch.tsx
│  │      SelectList.tsx
│  │
│  └─Tab
│          TabGroup.tsx
│          TabList.tsx
│          TabOne.tsx
│          TabPanels.tsx
│
├─routes
│      result.$spid.tsx
│      result.tsx
│      search.$name.tsx
│      search.tsx
│      search._index.tsx
│      _index.tsx
│
├─styles
│      app.css
│
└─utils
        alltype.ts
        cssfunction.ts
        defaultconstant.ts
        players.server.ts
        prisma.server.ts
        recommend.server.ts
        teamxpid.server.ts
```

## Development

```sh
npm run dev
```

## Deployment

```sh
npm run build
```

```sh
npm start
```
