import { Users } from "./services";
export const get_users = (query = {}) => Users.find(query);

export * from './services'