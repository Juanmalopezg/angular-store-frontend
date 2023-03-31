FROM node:19-alpine as build

RUN mkdir -p /app

WORKDIR /app

COPY package.json  ./

RUN npm install

COPY . /app

RUN npm run build --prod

FROM nginx:1.22-alpine

COPY --from=build /app/dist/angular-store-frontend /usr/share/nginx/html