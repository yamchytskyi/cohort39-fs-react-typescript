export interface University {
  name: string | undefined;
  country: string | undefined;
  web_pages: string[] | undefined;
}

export interface FullUniversity {
  country: string;
  name: string;
  alpha_two_code: string;
  state_province: null | string;
  domains: string [] | undefined;
  web_pages: string [] | undefined;
}