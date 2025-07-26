// components/Icon.tsx
import type { SVGProps } from "react"

interface IconProps extends SVGProps<SVGSVGElement> {
    src: React.FC<SVGProps<SVGSVGElement>>
}

export const Icon = ({ src: IconComponent, ...props }: IconProps) => {
    return <IconComponent {...props} />
}
