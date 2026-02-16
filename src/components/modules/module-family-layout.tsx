type ModuleFamilyLayoutProps = {
  title: string;
  description: string;
  heroClassName: string;
  eyebrowClassName: string;
  descriptionClassName: string;
  children: React.ReactNode;
};

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function ModuleFamilyLayout({
  title,
  description,
  heroClassName,
  eyebrowClassName,
  descriptionClassName,
  children,
}: Readonly<ModuleFamilyLayoutProps>) {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)]">
        <section className={classNames("rounded-2xl p-7", heroClassName)}>
          <p className={classNames("text-xs font-semibold tracking-[0.16em]", eyebrowClassName)}>
            MODUL eATOM
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">{title}</h1>
          <p className={classNames("mt-2 max-w-3xl text-sm", descriptionClassName)}>
            {description}
          </p>
          <p className="mt-4 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium">
            Navigasi modul dan submodul tersedia di sidebar, tanpa perlu kembali ke
            halaman ringkasan.
          </p>
        </section>

        <section className="mt-5">{children}</section>
      </div>
    </main>
  );
}
