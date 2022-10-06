import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    // Ramp-up from 1 to 5 virtual users (VUs) in 5s
    { duration: '3m', target: 50 },

    // Stay at rest on 5 VUs for 10s
    { duration: '5m', target: 50 },

    // Ramp-down from 5 to 0 VUs for 5s
    { duration: '2m', target: 0 },
  ],
};

export default function () {
  const data = JSON.stringify({
    product_id: '1',
    lead_id: '1',
  });
  const host1 = 'http://localhost:3000/form-transaction';
  const host2 = 'http://localhost:3000/form-transaction2';
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
