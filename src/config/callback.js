let backendHost;
const hostname = window && window.location && window.location.hostname;

if(hostname === 'localhost') {
  backendHost = 'http://localhost:3000';
} else if(hostname === 'test.spaceflightnewsapi.net') {
  backendHost = 'https://test.spaceflightnewsapi.net';
} else if(hostname === 'www.spaceflightnewsapi.net') {
  backendHost = 'https://www.spaceflightnewsapi.net';
} else {
  backendHost = 'Wrong host'
}

export const CALLBACK = `${backendHost}/callback`;