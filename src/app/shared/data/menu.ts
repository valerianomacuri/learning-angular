import {
  componentsCommunication,
  dataDisplay,
  fundamentals,
  globalState,
  lifecycleComponents,
  localState,
  optimization,
  routing,
} from '.';

interface Menu {
  children?: Menu[];
  name: string;
  path: string;
}

export const menu: Menu[] = [
  fundamentals,
  localState,
  dataDisplay,
  componentsCommunication,
  // lifecycleComponents,
  // routing,
  // globalState,
  // optimization,
].map(({ name, path, features }) => ({
  name,
  path,
  children: features.map(({ name, path }) => ({
    name,
    path,
  })),
}));
