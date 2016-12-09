FROM node:6.8.0
COPY package.json /srv/
COPY server.js /srv/
COPY index.html /srv/
COPY build /srv/build
WORKDIR /srv
RUN npm install --only=production --silent
EXPOSE 3000
CMD node server.js
