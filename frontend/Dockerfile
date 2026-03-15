FROM node:18-alpine

WORKDIR /app

# Copy package files from ROOT
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Build Vite app
RUN npm run build

# Expose the port your platform expects
EXPOSE 8080
ENV PORT=8080

# Run Vite preview on the correct port + host
CMD ["npm", "run", "preview", "--", "--host", "--port", "8080"]
