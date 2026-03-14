import UiuxData from "@/data/UIUX_DATA.json";

export function generateStaticParams() {
  return UiuxData.map((project) => ({ slug: project.slug }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
