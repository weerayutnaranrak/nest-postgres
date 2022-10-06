import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    // { duration: '3m', target: 50 },

    // { duration: '5m', target: 50 },

    // { duration: '2m', target: 0 },
    { duration: '1m', target: 50 },

    { duration: '3m', target: 50 },

    { duration: '1m', target: 0 },
  ],
};

export default function () {
  const host1 = 'http://localhost:3000/lead';
  const host2 = 'http://localhost:3000/lead2';
  const headers = {
    headers: { Accepts: 'application/json' },
  };
  // const responseLimit20 = http.get(host1 + '?limit=20', headers);
  // check(responseLimit20, { 'status is 200': (r) => r.status === 200 });

  // const responseLimit50 = http.get(host1 + '?limit=50', headers);
  // check(responseLimit50, { 'status is 200': (r) => r.status === 200 });

  // const responseLimit100 = http.get(host1 + '?limit=100', headers);
  // check(responseLimit100, { 'status is 200': (r) => r.status === 200 });
  // sleep(1);

  const response2Limit20 = http.get(host2 + '?limit=20', headers);
  check(response2Limit20, { 'status is 200': (r) => r.status === 200 });

  const response2Limit50 = http.get(host2 + '?limit=50', headers);
  check(response2Limit50, { 'status is 200': (r) => r.status === 200 });

  const response2Limit100 = http.get(host2 + '?limit=100', headers);
  check(response2Limit100, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
