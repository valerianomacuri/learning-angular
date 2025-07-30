import { Type } from '@angular/core';
import { File } from '.';

export interface Topic {
  name: string;
  path: string;
  features: Feature[];
}

export interface Feature {
  name: string;
  path: string;
  showcases: ShowCase[];
}

export interface ShowCase {
  anchor: string;
  component: Type<any>;
  description: string;
  files: File[];
  name: string;
}
