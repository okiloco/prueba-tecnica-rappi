import feathers from "@feathersjs/client";
import { URL_BASE_API, URL_AUTHENTICATION } from "../constants";
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';


/* const socket = io("http://localhost:3030"); */
const ApiFeathers = feathers();
ApiFeathers.configure(
  feathers.rest(URL_BASE_API).fetch(window.fetch.bind(window))
);
/* ApiFeathers.configure(socketio(socket, {
  timeout: 60000
})) */
ApiFeathers.configure(
  feathers.authentication({
    path: URL_AUTHENTICATION,
    entity: "user",
    service: "users",
    cookie: "feathers-jwt",
    storageKey: "feathers-jwt",
    storage: window.localStorage
  })
);
export default ApiFeathers;
