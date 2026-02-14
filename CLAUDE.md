# CLAUDE.md

## Project

Monorepo for testing release workflows and semantic versioning. Uses bun workspaces.

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

## Commands

- `bun install` — install dependencies
