function deepCopy(obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // if obj is hit, it is in circular structure
  const hit = cache.filter((c) => c.original === obj)[0];
  if (hit) {
    return hit.copy;
  }

  const copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  });

  Object.keys(obj).forEach((key) => {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy;
}

export { deepCopy };
