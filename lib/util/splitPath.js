import { reject } from 'lodash'

export default function splitPath(path) {
  return Array.isArray(path) ? path : reject(`${path}`.split('.'), x => !x)
}
