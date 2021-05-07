export default function merge(obj: Record<string, any> = { }, defaults: Record<string, any>) {
  for (const key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
