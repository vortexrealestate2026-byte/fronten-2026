FROM node:18-alpine

WORKDIR /app

COPY frontend/package.json frontend/package-lock.json ./frontend/
RUN cd frontend && npm install

COPY frontend ./frontend

RUN cd frontend && npm run build

EXPOSE 8080
ENV PORT=8080

CMD ["npm", "run", "preview", "--prefix", "frontend", "--", "--host", "--port", "8080"]
