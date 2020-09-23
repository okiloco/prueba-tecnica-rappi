import { client } from '../api'

export const authentication = ({ strategy = "local", email, password }) => {
    return client.authenticate({
        strategy,
        email,
        password
    });
}
export const reAuthenticate = client.reAuthenticate;
export const Users = client.service("users");
export const getService = service => client.service(service);