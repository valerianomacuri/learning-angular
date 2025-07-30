export interface File {
  code: string;
  defaultIsOpen?: boolean;
  lang: 'html' | 'ts';
  name: string;
}
