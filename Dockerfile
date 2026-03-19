FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM caddy:alpine
COPY --from=build /app/dist /app/dist
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80
```

**`Caddyfile`** (new file in repo root):
```
:80 {
    root * /app/dist
    encode gzip
    try_files {path} /index.html
    file_server
}
