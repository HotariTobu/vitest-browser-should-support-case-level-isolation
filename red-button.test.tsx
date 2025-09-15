import { expect, test } from "vitest"
import { render } from "vitest-browser-preact"
import { RedButton } from "./red-button"

test("Background color should change when hovered and enabled", async () => {
  const { getByRole } = render(<RedButton disabled={false} />)
  const button = getByRole("button")
  const buttonElement = button.element()
  const view = buttonElement.ownerDocument?.defaultView
  if (!(buttonElement instanceof HTMLButtonElement && view)) {
    throw new Error("Invalid button element or view")
  }
  const bgColor = view.getComputedStyle(buttonElement).backgroundColor
  await button.hover()
  expect(view.getComputedStyle(buttonElement).backgroundColor).not.toBe(bgColor)
})

test("Background color should not change when hovered and disabled", async () => {
  const { getByRole } = render(<RedButton disabled={true} />)
  const button = getByRole("button")
  const buttonElement = button.element()
  const view = buttonElement.ownerDocument?.defaultView
  if (!(buttonElement instanceof HTMLButtonElement && view)) {
    throw new Error("Invalid button element or view")
  }
  const bgColor = view.getComputedStyle(buttonElement).backgroundColor
  await button.hover()
  expect(view.getComputedStyle(buttonElement).backgroundColor).toBe(bgColor)
})
