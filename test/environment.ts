import 'setupEnvironment';

const { API1_KEY, API2_KEY } = process.env;

const setupApi1 = (key: string) => {
  console.log(`api1 configured via key ${key}`);
}

const setupApi2 = (key: string) => {
  console.log(`api2 configured via key ${key}`);
}

setupApi1(API1_KEY);
setupApi2(API2_KEY);