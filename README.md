# Atlas Academy CRM

Full-stack CRM for Atlas Academy educational academy.

## Features
- Admin authentication
- Dashboard with key metrics
- Students management
- Courses, groups, teachers
- Additional courses and payments
- Demo-ready mock data

## Run locally

### Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev -- --host 0.0.0.0
```

## Demo login
- Email: admin@atlasacademy.com
- Password: admin123

## Deploy
This repo is prepared for deployment:
- Frontend: Vercel
- Backend: Render / Railway

Configuration files:
- `render.yaml`
- `vercel.json`
