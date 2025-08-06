# HashMap & HashSet Implementation in JavaScript

This project implements a basic `HashMap` and `HashSet` from scratch using plain JavaScript, including:

- Custom hash function with overflow protection
- Collision handling via separate chaining
- Automatic resizing when load factor is exceeded
- Full support for key/value operations in HashMap
- Key-only operations in HashSet (extra credit)

## HashMap

- `set(key, value)` – Adds or updates a key/value pair
- `get(key)` – Retrieves the value for a given key
- `has(key)` – Checks if a key exists
- `remove(key)` – Removes a key/value pair
- `length()` – Returns number of stored entries
- `clear()` – Removes all entries
- `keys()` – Returns an array of all keys
- `values()` – Returns an array of all values
- `entries()` – Returns an array of `[key, value]` pairs

### HashSet

- `add(key)` – Adds a key (no value)
- `has(key)` – Checks if key exists
- `delete(key)` – Removes a key
- `clear()` – Removes all keys
- `keys()` – Returns an array of stored keys
- `size()` – Returns number of stored keys

---

## 🚀 How to Run

> Node.js must be installed. No package.json needed.

```bash
node main.js
