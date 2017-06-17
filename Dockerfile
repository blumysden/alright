FROM node:6.11.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install --production -q
COPY ./ /usr/src/app/
RUN /usr/src/app/node_modules/.bin/kyt build
CMD [ "node_modules/.bin/kyt", "start" ]

EXPOSE 3000
