FROM node:14-alpine as build
WORKDIR /app
COPY ./package.json /app/
RUN npm install
COPY . /app

RUN npm run build:prod

FROM nginx:1.19-alpine as publish

RUN apk add --no-cache jq moreutils curl

COPY --from=build /app/dist/fishka-frontend/ /usr/share/nginx/html
COPY docker/entrypoint.sh /

COPY docker/default.conf /etc/nginx/conf.d/default.conf
COPY docker/mime.types /etc/nginx/mime.types

RUN chmod +x entrypoint.sh

CMD sh -c "/entrypoint.sh && \
    nginx -g 'daemon off;'"

HEALTHCHECK --interval=10s --timeout=3s \
  CMD curl -f http://127.0.0.1/ || exit 1