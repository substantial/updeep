export default function size(obj) {
  if (!obj) {
    return 0;
  } else if (Array.isArray(obj)) {
    return obj.length
  } else {
    return Object.keys(obj).length
  }
}
