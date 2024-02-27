import { PakeCliOptions } from './types.js';

export const DEFAULT_PAKE_OPTIONS: PakeCliOptions = {
  icon: '',
  height: 1080,
  width: 1920,
  fullscreen: false,
  resizable: true,
  transparent: false,
  userAgent: '',
  showMenu: false,
  showSystemTray: false,
  multiArch: false,
  targets: 'deb',
  iterCopyFile: false,
  systemTrayIcon: '',
  debug: false,
  inject: [],
  safeDomain: [],
};

// Just for cli development
export const DEFAULT_DEV_PAKE_OPTIONS: PakeCliOptions & {url: string} = {
  ...DEFAULT_PAKE_OPTIONS,
  url: 'https://yt567.xyz',
  name: YImage'',
  safeDomain:['yt567.xyz'],
  transparent: true,
}
