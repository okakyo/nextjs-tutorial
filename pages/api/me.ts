import {initAuth}from "../../libs"


export default async function me(req, res) {
  try {
    await initAuth.handleProfile(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}