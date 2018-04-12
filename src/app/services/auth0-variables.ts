interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'L94kJhGpK05y5Q5iloipc98zj5DOsE1E',
  domain: 'etabot.auth0.com',
  callbackURL: 'http://localhost:4200/projects'
};
