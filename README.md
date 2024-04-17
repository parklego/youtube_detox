## Introduction

ProjectName : youtube detox

ProjectGoal : Let's reduce our addicted YouTube watch time and make precious time.

ProjectStack : Next.js, TypeScript, Tailwind css, shadcn, chart.js, framer-motion, next-auth, swr, google/kakao login, youtube API, prisma, vercel

## Getting Started

First, run the development server:

```bash
npm run dev
```

You need to fill the .env file with the following code."

```.env
NEXTAUTH_URL='http://localhost:3000'
NEXTAUTH_SECRET='ADD_YOUR_CODE'

GOOGLE_CLIENT_ID = 'ADD_YOUR_CODE'
GOOGLE_CLIENT_SECRET = 'ADD_YOUR_CODE'

KAKAO_CLIENT_ID = 'ADD_YOUR_CODE'
KAKAO_CLIENT_SECRET = 'ADD_YOUR_CODE'

YOUTUBE_API_KEY = 'ADD_YOUR_CODE'

DATABASE_URL= "ADD_YOUR_CODE"
```

## Deploy on Vercel

https://youtube-detox.vercel.app/
