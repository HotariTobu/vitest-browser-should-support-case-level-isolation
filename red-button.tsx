import { cva, type VariantProps } from "class-variance-authority"

const redButtonVariants = cva("size-4 rounded-full transition", {
  variants: {
    disabled: {
      false: "bg-red-500 hover:bg-red-600",
      true: "bg-red-100",
    },
  },
})

export const RedButton = ({
  disabled,
}: VariantProps<typeof redButtonVariants>) => {
  return (
    <button
      type="button"
      disabled={disabled ?? false}
      class={redButtonVariants({ disabled })}
    />
  )
}
