This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prisma DB Setup

- npm i prisma -SD
- npm prisma init --datasource-provider sqlite
- add .env and dev.db\* file to .gitignore
- add a new model to the schema file
- npx prisma migrate dev --name init
- npx prisma generate
- add a db.ts file under "app" folder with the code from: https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices#solution
