import * as PhosphorIcons from "@phosphor-icons/react";
import { type ComponentType } from "react";
import type { IconProps } from "@phosphor-icons/react";

export type IconName = keyof typeof PhosphorIcons

type TProps = Readonly<{
  icon: IconName;
}>;

export function Icon({ icon }: TProps) {
  const IconComponent = PhosphorIcons[icon] as ComponentType<IconProps>;

  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found in @phosphor-icons/react`);
    return null;
  }

  return <IconComponent size={18} weight="fill" />;
}
