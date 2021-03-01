import { initAuth0 } from '@auth0/nextjs-auth0';


export const initAuth =  initAuth0({
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  secret:process.env.AUTH0_CLIENT_SECRET,
  baseURL:process.env.baseURL,
  issuerBaseURL:process.env.AUTH0_ISSUER_BASE_URL,
  
})
