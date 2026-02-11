type SubmodulePlaceholderProps = {
  title: string;
  description: string;
};

export default function SubmodulePlaceholder({
  title,
  description,
}: SubmodulePlaceholderProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      <p className="mt-3 max-w-3xl text-sm text-slate-600">{description}</p>
      <div className="mt-5 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600">
        Halaman ini disediakan dalam struktur App Router modul. Kandungan terperinci
        boleh ditambah pada iterasi seterusnya.
      </div>
    </article>
  );
}
