let backendHost;
const hostname = window && window.location && window.location.hostname;

if(hostname === 'localhost') {
  backendHost = 'http://localhost:3000';
} else if(hostname === 'testsite.spaceflightnewsapi.net') {
  backendHost = 'https://testsite.spaceflightnewsapi.net';
} else if(hostname === 'www.spaceflightnewsapi.net') {
  backendHost = 'https://www.spaceflightnewsapi.net';
}

export const CALLBACK = `${backendHost}/callback`;