FROM node:18-alpine AS build

WORKDIR /app

# copy ONLY frontend package files
COPY frontend/package*.json ./
RUN npm install

# copy frontend source
COPY frontend/ .
RUN npm run build

# serve with caddy
FROM caddy:alpine
COPY --from=build /app/dist /usr/share/caddy
EXPOSE 80
