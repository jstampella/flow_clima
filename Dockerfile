FROM node:15.9.0-alpine
WORKDIR /app
COPY ./package.json ./
RUN npm i
COPY . .
EXPOSE 8080
CMD ["npm", "run", "start"]