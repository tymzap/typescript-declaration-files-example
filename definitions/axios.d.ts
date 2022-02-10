import 'axios';

declare module 'axios' {
  export interface AxiosError {
    validationMessage?: string;
  }
}