// Thanks to declaration merging our custom parts of type will be
// seamlessly merged to original library declaration

// We need to import library (or at least part of it) for make
// declaration merging to work, that's why axios is imported here
import 'axios';

declare module 'axios' {
  export interface AxiosError {
    validationMessage?: string;
  }
}