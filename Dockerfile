FROM balenalib/raspberrypi3-64-node

WORKDIR /app

COPY . .

RUN npm i

CMD ["npm", "start"]
