ARG ImageID=node:lts

FROM $ImageID

RUN mkdir -p usr/src/forms-web

COPY . /usr/src/forms-web

WORKDIR /usr/src/forms-web

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm","start"]