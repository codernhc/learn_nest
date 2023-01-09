FROM Node:16-alpine
WORKDIR /backEndApp
COPY package.json .
RUN npm install
COPY . .
CMD [ "npm", "run", "start:dev" ]
# EXPOSE 3000