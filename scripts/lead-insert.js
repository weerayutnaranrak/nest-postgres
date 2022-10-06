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
  const data = JSON.stringify({
    firstName: 'weerayut',
    lastName: 'naranrak',
    phone: '1234567890',
    status: 'New',
  });
  const host1 = 'http://localhost:3000/lead';
  const host2 = 'http://localhost:3000/lead2';
  const headers = {
    headers: { 'Content-Type': 'application/json' },
  };

  const response = http.post(host1, data, headers);
  check(response, { 'status is 201': (r) => r.status === 201 });
  sleep(1);

  const response2 = http.post(host2, data, headers);
  check(response2, { 'status is 201': (r) => r.status === 201 });
  sleep(1);
}
