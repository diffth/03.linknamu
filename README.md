# 🌳 링크나무 (Linknamu)

> 내 모든 링크를 한 페이지에 모아 두고, 하나의 URL로 공유하는 Link-in-Bio 서비스입니다.

![링크나무 와이어프레임](./wireframe.png)

---

## ✨ 주요 기능

- 👤 **프로필 표시**: 이름, 한 줄 소개, 프로필 사진 표시
- 🔗 **링크 카드 목록**: SNS 및 블로그 링크를 감각적인 카드 형태로 나열
- 📊 **클릭 수 집계**: 링크별 실시간 클릭 횟수 카운팅 및 로컬 스토리지 연동
- 📱 **모바일 최적화**: 모바일 우선(Mobile-first) 반응형 UI/UX

---

## 🛠 기술 스택

- **Framework**: [React Router v7](https://reactrouter.com/) (Framework Mode, SSG)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)

---

## 📁 프로젝트 구조

```text
03.linknamu/
├── public/
├── src/
│   ├── components/       # UI 컴포넌트 (ProfileHeader, LinkCard)
│   ├── data/             # Mock 데이터 (profile.ts)
│   ├── hooks/            # 커스텀 훅 (useClickCounts.ts)
│   ├── routes/           # 라우트 페이지 (home.tsx)
│   ├── app.css           # 글로벌 스타일링
│   ├── root.tsx          # 루트 레이아웃 & HTML 문서 템플릿
│   └── routes.ts         # 라우팅 설정
├── PRD.md                # 제품 요구사항 정의서
├── CLAUDE.md             # 프로젝트 가이드 및 규칙
├── react-router.config.ts# SSG 및 라우터 설정
└── vite.config.ts        # Vite 빌드 설정
```

---

## 🚀 시작하기

### 1. 패키지 설치
```bash
npm install
```

### 2. 로컬 개발 서버 실행
```bash
npm run dev
```

### 3. 프로덕션 빌드
```bash
npm run build
```

---

## 📄 라이선스

This project is licensed under the MIT License.

---
*Last updated: 2026-09-08*
