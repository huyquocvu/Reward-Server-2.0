FROM node:14
WORKDIR /Reward-Server-2.0
COPY package.json ./
RUN yarn install
COPY . .
CMD ["yarn", "start"]
