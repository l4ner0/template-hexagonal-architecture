FROM node:18

RUN npm install -g ts-node

COPY ["package.json", "/usr/local/nodeapps/"]

WORKDIR /usr/local/nodeapps

RUN npm install
RUN npm install pm2 -g
RUN pm2 install pm2-logrotate
RUN pm2 set pm2-logrotate:rotateInterval '0 0 */1 * *'
RUN pm2 set pm2-logrotate:dateFormat 'YYYY-MM-DD'
COPY [".", "."]
RUN ls
RUN npm run build
CMD ["pm2-runtime", "server.config.js", "--env development"]

EXPOSE 3000