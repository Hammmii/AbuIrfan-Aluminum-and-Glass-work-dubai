/**
 * index.ts — barrel + registry for the Abu Irfan bespoke icon set.
 *
 * - Re-exports every PascalCase icon component.
 * - Exposes a kebab-case `IconName` string union for type-safe lookups.
 * - Exposes a `NAME_TO_ICON` record mapping each kebab name → component.
 * - Exposes a generic `<Icon name=... />` wrapper.
 *
 * Design contract (RULES.md §ICONS): 1.5px monoline, currentColor, viewBox
 * 0 0 24 24, no fill, no Lucide / Font Awesome / emoji.
 */
import * as React from "react";

import { GlassRoomIcon } from "./GlassRoomIcon";
import { PergolaIcon } from "./PergolaIcon";
import { SkylightIcon } from "./SkylightIcon";
import { ConservatoryIcon } from "./ConservatoryIcon";
import { SunRoomIcon } from "./SunRoomIcon";
import { DoorWindowIcon } from "./DoorWindowIcon";
import { PartitionIcon } from "./PartitionIcon";
import { CurtainWallIcon } from "./CurtainWallIcon";
import { GlassTypeIcon } from "./GlassTypeIcon";
import { AcpCladdingIcon } from "./AcpCladdingIcon";
import { AluminiumSystemIcon } from "./AluminiumSystemIcon";
import { StaircaseIcon } from "./StaircaseIcon";
import { MeshScreenIcon } from "./MeshScreenIcon";
import { SmartGlassIcon } from "./SmartGlassIcon";
import { ConsultIcon } from "./ConsultIcon";
import { DesignIcon } from "./DesignIcon";
import { FabricateIcon } from "./FabricateIcon";
import { InstallIcon } from "./InstallIcon";
import { HandoverIcon } from "./HandoverIcon";
import { ClimateHeatIcon } from "./ClimateHeatIcon";
import { ClimateDustIcon } from "./ClimateDustIcon";
import { ClimateUvIcon } from "./ClimateUvIcon";
import { ClimateHumidityIcon } from "./ClimateHumidityIcon";
import { PhoneIcon } from "./PhoneIcon";
import { MailIcon } from "./MailIcon";
import { ArrowRightIcon } from "./ArrowRightIcon";
import { ArrowUpRightIcon } from "./ArrowUpRightIcon";
import { LocationPinIcon } from "./LocationPinIcon";
import { MenuIcon } from "./MenuIcon";
import { CloseIcon } from "./CloseIcon";

export type { IconProps, IconComponentProps } from "./_base";

// Re-export every component.
export {
  GlassRoomIcon,
  PergolaIcon,
  SkylightIcon,
  ConservatoryIcon,
  SunRoomIcon,
  DoorWindowIcon,
  PartitionIcon,
  CurtainWallIcon,
  GlassTypeIcon,
  AcpCladdingIcon,
  AluminiumSystemIcon,
  StaircaseIcon,
  MeshScreenIcon,
  SmartGlassIcon,
  ConsultIcon,
  DesignIcon,
  FabricateIcon,
  InstallIcon,
  HandoverIcon,
  ClimateHeatIcon,
  ClimateDustIcon,
  ClimateUvIcon,
  ClimateHumidityIcon,
  PhoneIcon,
  MailIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  LocationPinIcon,
  MenuIcon,
  CloseIcon,
};

/** Kebab-case name union for type-safe icon lookups. */
export type IconName =
  | "glass-room"
  | "pergola"
  | "skylight"
  | "conservatory"
  | "sun-room"
  | "door-window"
  | "partition"
  | "curtain-wall"
  | "glass-type"
  | "acp-cladding"
  | "aluminium-system"
  | "staircase"
  | "mesh-screen"
  | "smart-glass"
  | "consult"
  | "design"
  | "fabricate"
  | "install"
  | "handover"
  | "climate-heat"
  | "climate-dust"
  | "climate-uv"
  | "climate-humidity"
  | "phone"
  | "mail"
  | "arrow-right"
  | "arrow-up-right"
  | "location-pin"
  | "menu"
  | "close";

/** Shared prop surface for the generic `<Icon>` wrapper. */
export type IconLookupProps = {
  name: IconName;
  size?: number;
  className?: string;
};

/** Type of any icon component in this set. */
type IconComponentType = React.ComponentType<{
  size?: number;
  className?: string;
}>;

/** Kebab name → component map. */
export const NAME_TO_ICON: Record<IconName, IconComponentType> = {
  "glass-room": GlassRoomIcon,
  pergola: PergolaIcon,
  skylight: SkylightIcon,
  conservatory: ConservatoryIcon,
  "sun-room": SunRoomIcon,
  "door-window": DoorWindowIcon,
  partition: PartitionIcon,
  "curtain-wall": CurtainWallIcon,
  "glass-type": GlassTypeIcon,
  "acp-cladding": AcpCladdingIcon,
  "aluminium-system": AluminiumSystemIcon,
  staircase: StaircaseIcon,
  "mesh-screen": MeshScreenIcon,
  "smart-glass": SmartGlassIcon,
  consult: ConsultIcon,
  design: DesignIcon,
  fabricate: FabricateIcon,
  install: InstallIcon,
  handover: HandoverIcon,
  "climate-heat": ClimateHeatIcon,
  "climate-dust": ClimateDustIcon,
  "climate-uv": ClimateUvIcon,
  "climate-humidity": ClimateHumidityIcon,
  phone: PhoneIcon,
  mail: MailIcon,
  "arrow-right": ArrowRightIcon,
  "arrow-up-right": ArrowUpRightIcon,
  "location-pin": LocationPinIcon,
  menu: MenuIcon,
  close: CloseIcon,
};

/**
 * Generic icon wrapper — looks up the component by kebab-case name.
 *
 * @example
 * <Icon name="pergola" size={20} className="text-brand" />
 */
export function Icon({
  name,
  size,
  className,
  ...rest
}: IconLookupProps & React.SVGProps<SVGSVGElement>) {
  const Component = NAME_TO_ICON[name];
  return <Component size={size} className={className} {...rest} />;
}
