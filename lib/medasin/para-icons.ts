import {
  type LucideIcon,
  ArchiveIcon,
  CirclePileIcon,
  LibraryBigIcon,
  TargetIcon,
} from "lucide-react";

// Maps the `icon` key in a case study's `para` entries to the icon Medasin uses for it
export const PARA_ICONS: Record<string, LucideIcon> = {
  target: TargetIcon,
  areas: CirclePileIcon,
  library: LibraryBigIcon,
  archive: ArchiveIcon,
};
