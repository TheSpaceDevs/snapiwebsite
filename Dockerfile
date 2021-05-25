FROM node:latest
LABEL org.opencontainers.image.source https://github.com/spaceflightnewsapi/snapiwebsite

WORKDIR /app

# Bundle APP files
COPY . .

# Install app dependencies
RUN npm install --production && npm run build

CMD [ "npm", "run", "serve" ]