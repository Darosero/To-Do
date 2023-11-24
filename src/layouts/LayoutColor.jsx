export default function LayoutPage({ children, fromColor, viaColor }) {
  const gradientClassName = `absolute inset-0 bg-gradient-to-b from-${fromColor} via-${viaColor}/80 -z-10`;

  return (
    <section className="relative flex p-8 gap-4 h-full">
      <div className="relative flex flex-1 gap-4 h-full">{children}</div>
      <div className={gradientClassName}></div>
    </section>
  );
}
