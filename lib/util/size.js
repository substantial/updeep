export default function size(obj) {
  if (Array.isArray(obj)) {
    return obj.length
  } else {
    return Object.keys(obj).length
  }
}
