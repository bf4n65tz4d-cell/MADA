import Image from "next/image"

type Variant = "dark" | "light" | "rose"

interface CircleLogoProps {
  variant?: Variant
  size?: number
  className?: string
}

const SRC: Record<Variant, string> = {
  dark:  "/logo-circle-dark.svg",
  light: "/logo-circle-light.svg",
  rose:  "/logo-circle-rose.svg",
}

export default function CircleLogo({ variant = "dark", size = 200, className }: CircleLogoProps) {
  return (
    <Image
      src={SRC[variant]}
      alt="MADA — Make Annecy Dance Again"
      width={size}
      height={size}
      className={className}
      priority
    />
  )
}
