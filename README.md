# Tutoria #1: Add Interactivity to Server Components

## Introduction
This tutorial demonstrates how to bring interactivity to server components in a Next.js application. We'll be creating a counter app where a server button component will trigger server actions to manipulate the counter.

## Challenge

- Fetching and mutating data from client components can be tricky and unsafe.
- Components need reactivity; hence,they always need to be client components. Is this true? No.

## Scope
- Develop a counter app where the button invokes a server action to adjust the counter.
- Research the best methods to address these challenges.

## Solution
- Encapsulate the client component within a form:
  - The form's `action` attribute is linked to the server action.
  - The form can be submitted either:
    - Programmatically
    - Through user interaction

## Why This Approach?
This scenario is very common in applications using Next.js, making it an essential technique to master.

## Learnings
*Detailed learnings and insights will be shared here.*

---

For a detailed review of changes, see the pull request on GitHub: [Next Tutorials PR #1](https://github.com/amddevmh/next-tutorials/pull/1/files)

