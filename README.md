# vitest-browser-should-support-case-level-isolation

## Problem Description

In Vitest browser testing, consecutive test cases targeting the same DOM element interfere with each other. Specifically, hover states from previous test cases affect subsequent tests, causing test instability.

## Reproducible Test Case

The [red-button.test.tsx](red-button.test.tsx) file contains two tests that operate on the same button element:

1. `disabled={false}` - Expects background color to change on hover
2. `disabled={true}` - Expects background color to NOT change on hover

## Current Issues

- Elements that enter hover state in the first test continue to affect the second test
- Test results may vary depending on execution order
- DOM state reset between test cases is incomplete

## Expected Behavior

Each test case should run independently, with no interference from previous test case states.

## Proposed Solution

We request the implementation of case-level isolation functionality to ensure proper test isolation between individual test cases.

## Reproduction Steps

```bash
bun i
bun run test:browser
```

Running the tests multiple times may show inconsistent pass/fail results due to state interference.
