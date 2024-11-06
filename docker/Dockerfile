FROM node:22-alpine AS builder-front

WORKDIR /app

COPY ./front/package.json .

RUN npm install

COPY ./front .

RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY ./back/package.json .

RUN npm install

COPY ./back .


EXPOSE 80

COPY --from=builder-front /app/dist /app/public


ENV ADDRESS=0.0.0.0 PORT=80

CMD ["npm", "start"]


# FROM nginx:1.27-alpine

# WORKDIR /root/

# COPY ./docker/nginx.conf /etc/nginx/nginx.conf
# COPY --from=builder-front /app/dist /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
