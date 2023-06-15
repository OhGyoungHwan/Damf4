# 안녕하세요! Damf4 FE입니다.

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
