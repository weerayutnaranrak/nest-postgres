import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '5s', target: 10 },
    { duration: '10s', target: 10 },
    { duration: '5s', target: 0 },
  ],
};
export default function () {
  const getProduct = http.get('http://localhost:3000/product');
  check(getProduct, {
    'Product in successfully': (response) => {
      return response.status === 200;
    },
  });

  const getLead = http.get('http://localhost:3000/lead');
  check(getLead, {
    'Lead in successfully': (response) => {
      return response.status === 200;
    },
  });
  sleep(1);
}
