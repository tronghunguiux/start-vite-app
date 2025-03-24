This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## Style

### Deploy for dev
sass --watch ./src/assets/styles:./public/assets/css
npm run build:dev

### Deploy for prod
sass ./src/scss:./public/assets/cssmin --style compressed --no-source-map



## SOURCES STRUCTURE

vite-app/
├── public/                  # Chứa các tệp tĩnh
│   ├── assets/              # Tài nguyên tĩnh (hình ảnh, font, CSS...)
│   │   ├── images/          # Thư mục hình ảnh
│   │   ├── fonts/           # Thư mục font
│   │   └── css/             # Thư mục CSS
│   ├── favicon.ico          # Biểu tượng ứng dụng
│   └── manifest.json        # Cấu hình PWA
├── src/                     # Thư mục mã nguồn chính
│   ├── components/          # Các component tái sử dụng
│   │   ├── ui/              # Component UI chung (Button, Modal, Input...) 
│   │   └── layouts/         # Component bố cục (Header, NavBar, Footer....)
│   ├── hooks/               # Custom hooks (useAuth, useTheme)
│   ├── utils/               # Hàm tiện ích (formatDate, debounce)
│   ├── pages/               # Các trang (Page Router)
│   │   ├── _app.tsx         # Component App tùy chỉnh
│   │   ├── _document.tsx    # Component Document tùy chỉnh
│   │   ├── index/           # Trang chủ
│   │   │   └── index.tsx    # File trang chủ
│   │   ├── about/           # Trang giới thiệu
│   │   │   └── index.tsx    # File trang giới thiệu
│   │   ├── dashboard/       # Trang dashboard
│   │   │   └── index.tsx    # File trang dashboard
│   │   └── login/           # Trang đăng nhập
│   │       └── index.tsx    # File trang đăng nhập
│   ├── services/            # Dịch vụ API
│   │   ├── authService.ts   # Dịch vụ xác thực
│   │   └── userService.ts   # Dịch vụ người dùng
│   ├── config/              # Cấu hình chung
│   │   ├── axios.ts         # Cấu hình Axios
│   │   ├── env.ts           # Quản lý biến môi trường
│   │   └── theme.ts         # Cấu hình giao diện
│   ├── contants             # # Các hằng số, routes, colors... 
│   ├── types/               # Định nghĩa kiểu TypeScript
│   │   ├── user.ts          # Kiểu dữ liệu user
│   │   └── auth.ts          # Kiểu dữ liệu xác thực
│   └── api-data/            # JSON mô phỏng dữ liệu API
│       ├── users.json       # Dữ liệu users giả lập
│       └── posts.json       # Dữ liệu posts giả lập
├── .env                     # Biến môi trường (default development)
├── .env.dev                 # Biến môi trường development
├── .env.example             # Biến môi trường exam
├── .env.local               # Biến môi trường được tại local (privited) 
├── .env.prod                # Biến môi trường production 
├── next.config.js      # Cấu hình Next.js
├── next-env.d.ts       # Định nghĩa kiểu TypeScript
├── eslint.config.mjs   # Cấu hình ESLint
├── tsconfig.json       # Cấu hình TypeScript (nếu dùng)
├── package.json        # Quản lý dependencies
└── README.md           # Documents 