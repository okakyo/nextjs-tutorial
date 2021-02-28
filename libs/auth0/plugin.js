import { initAuth0 } from "@auth0/nextjs-auth0";

export const initAuth = initAuth0({
    clientId: config.AUTH0_CLIENT_ID,
    clientSecret: config.AUTH0_CLIENT_SECRET,
    scope: 'NextJS Profile',
    domain: config.AUTH0_DOMAIN,
    redirectUri: config.REDIRECT_URI,
    postLogoutRedirectUri: config.POST_LOGOUT_REDIRECT_URI,
    session: {
        cookieSecret: config.SESSION_COOKIE_SECRET,
        cookieLifetime: 3600*24*30,
        storeIdToken: true,
        storeRefreshToken: true,
        storeAccessToken: true
  }
});