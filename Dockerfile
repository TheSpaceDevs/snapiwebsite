FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN npm install --silent
RUN npm i -g serve --silent
RUN npm run build
CMD ["serve", "-p", "80", "-s", "./build"]