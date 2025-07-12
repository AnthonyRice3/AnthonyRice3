import type { ResourcesConfig } from 'aws-amplify';

const config: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: 'us-east-2_fATwiEqzI',
      userPoolClientId: '64jga6d6ii8o0gohf8a3h0m81l',
      identityPoolId: 'us-east-2:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
      allowGuestAccess: false,
      signUpVerificationMethod: 'code',
      loginWith: {
        oauth: {
          domain: 'http://localhost:3000/',
          scopes: ['openid', 'email', 'profile'],
          redirectSignIn: ['http://localhost:3000/Dashboard'],
          redirectSignOut: ['http://localhost:3000/'],
          responseType: 'code',
        },
      },
    },
  },
};

export default config;