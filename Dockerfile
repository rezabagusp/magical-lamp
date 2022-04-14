FROM node:16-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --chown=node:node package.json ./
COPY --chown=node:node package-lock.json ./
COPY --chown=node:node ./ ./

RUN npm install
ENV NODE_OPTIONS=--max_old_space_size=4096
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]