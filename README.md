# examplex

Monorepo for testing release workflows and semantic versioning.

## Structure

```
libs/
  a/   → a() returns "a"
  b/   → b() returns "b"
  c/   → c() returns "c"
  ab/  → ab() = a() + b(), depends on @examplex/a, @examplex/b
  abc/ → abc() = ab() + c(), depends on @examplex/ab, @examplex/c
```

## Dependency graph

```
a ──┐
    ├── ab ──┐
b ──┘        ├── abc
c ───────────┘
```

## Test cases

### Patch (fix)

| # | Commit | Direct bump | Cascade |
|---|--------|-------------|---------|
| 1 | `fix(a):` | a patch | ab?, abc? |
| 2 | `fix(b):` | b patch | ab?, abc? |
| 3 | `fix(c):` | c patch | abc? |
| 4 | `fix(ab):` | ab patch | abc? |
| 5 | `fix(abc):` | abc patch | — |

### Minor (feat)

| # | Commit | Direct bump | Cascade |
|---|--------|-------------|---------|
| 6 | `feat(a):` | a minor | ab?, abc? |
| 7 | `feat(b):` | b minor | ab?, abc? |
| 8 | `feat(c):` | c minor | abc? |
| 9 | `feat(ab):` | ab minor | abc? |
| 10 | `feat(abc):` | abc minor | — |

### Major (breaking)

| # | Commit | Direct bump | Cascade |
|---|--------|-------------|---------|
| 11 | `feat(a)!:` | a major | ab?, abc? |
| 12 | `feat(b)!:` | b major | ab?, abc? |
| 13 | `feat(c)!:` | c major | abc? |

### No release

| # | Commit | Expected |
|---|--------|----------|
| 14 | `chore(a):` | no release |
| 15 | `docs(ab):` | no release |
| 16 | `ci:` | no release |

### Multi-package

| # | Commit(s) | Expected |
|---|-----------|----------|
| 17 | `fix(a): + fix(b):` in one PR | a patch, b patch, ab?, abc? |
| 18 | `fix(a): + feat(ab):` in one PR | a patch, ab minor, abc? |
