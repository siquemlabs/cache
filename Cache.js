class Cache {
  constructor() {
    this.cache = {};

    setInterval(() => {
      const now = Date.now();
      for (const [key, value] of Object.entries(this.cache)) {
        if (value.until && value.until < now) {
          this.del(key);
        }
      }
    }, 1000);
  }
  get(key) {
    return this.cache[key]?.value;
  }
  set(key, value, ttl) {
    this.cache[key] = { value, until: Date.now() + ttl };
  }
  put(key, value) {
    this.cache[key].value = value;
  }
  nil(key) {
    this.cache[key].value = null;
  }
  del(key) {
    delete this.cache[key];
  }
}

export default Cache;
