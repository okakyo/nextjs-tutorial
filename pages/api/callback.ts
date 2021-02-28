import {initAuth} from '../../libs';

export default async (req, res)=> {
  try {
    await initAuth.handleCallback(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}