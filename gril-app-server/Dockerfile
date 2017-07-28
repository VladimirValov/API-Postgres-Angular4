FROM node
ADD . /opt/grilapp
WORKDIR /opt/grilapp
RUN npm install
EXPOSE 5000
CMD sleep 30s && npm run migrate && npm run seeders && npm start