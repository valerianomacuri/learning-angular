export interface File {
  code: string;
  codePath?: string;
  defaultIsOpen?: boolean;
  lang: 'html' | 'ts';
  name: string;
}
