// We can merge namespaces declarations as well as modules
declare namespace NodeJS {
  interface ProcessEnv {
    API1_KEY: string;
    API2_KEY: string;
  }
}