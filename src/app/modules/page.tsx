import Link from "next/link";

export default function ModulesPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-[var(--module-content-width)] rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Senarai Modul</h1>
        <p className="mt-2 text-sm text-slate-600">
          Pilih modul untuk akses modul dan proses kerja.
        </p>
        <p className="mt-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
          Akses Dalaman (Kakitangan) sahaja.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold tracking-wide text-blue-700">MODUL 1</p>
            <h2 className="mt-1 text-lg font-bold text-slate-900">Perlesenan</h2>
            <p className="mt-2 text-sm text-slate-600">
              Permohonan lesen, pendaftaran, pelan kecemasan, pelan sekuriti, dan
              modul berkaitan.
            </p>
            <Link
              href="/modules/perlesenan"
              className="mt-4 inline-flex rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Buka Perlesenan
            </Link>
          </article>

          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold tracking-wide text-emerald-700">MODUL 2</p>
            <h2 className="mt-1 text-lg font-bold text-slate-900">Kawalselia</h2>
            <p className="mt-2 text-sm text-slate-600">
              18 modul kawalselia termasuk kebenaran, notis, aduan,
              pemeriksaan, kesalahan, dan pemilikan.
            </p>
            <Link
              href="/modules/kawalselia"
              className="mt-4 inline-flex rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
            >
              Buka Kawalselia
            </Link>
          </article>

          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold tracking-wide text-amber-700">MODUL 3</p>
            <h2 className="mt-1 text-lg font-bold text-slate-900">Instalasi Nuklear</h2>
            <p className="mt-2 text-sm text-slate-600">
              10 modul instalasi nuklear termasuk kebenaran, notis,
              penghantaran laporan, inventori, dan import/eksport.
            </p>
            <Link
              href="/modules/instalasi-nuklear"
              className="mt-4 inline-flex rounded-lg bg-amber-700 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-800"
            >
              Buka Instalasi Nuklear
            </Link>
          </article>

          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold tracking-wide text-rose-700">MODUL 4</p>
            <h2 className="mt-1 text-lg font-bold text-slate-900">Pengkompaunan</h2>
            <p className="mt-2 text-sm text-slate-600">
              Modul berasingan untuk pengurusan pengkompaunan.
            </p>
            <Link
              href="/modules/pengkompaunan"
              className="mt-4 inline-flex rounded-lg bg-rose-700 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-800"
            >
              Buka Pengkompaunan
            </Link>
          </article>

          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold tracking-wide text-fuchsia-700">MODUL 5</p>
            <h2 className="mt-1 text-lg font-bold text-slate-900">Penggeledahan</h2>
            <p className="mt-2 text-sm text-slate-600">
              Penggeledahan, tindakan terus, semakan ketua unit, pengarah, dan
              semua rekod penggeledahan.
            </p>
            <Link
              href="/modules/penggeledahan"
              className="mt-4 inline-flex rounded-lg bg-fuchsia-700 px-4 py-2 text-sm font-semibold text-white hover:bg-fuchsia-800"
            >
              Buka Penggeledahan
            </Link>
          </article>

          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold tracking-wide text-pink-700">MODUL 6</p>
            <h2 className="mt-1 text-lg font-bold text-slate-900">Siasatan & Pendakwaan</h2>
            <p className="mt-2 text-sm text-slate-600">
              Modul berasingan untuk aliran Siasatan (IO hingga keputusan) dan
              Pendakwaan.
            </p>
            <Link
              href="/modules/siasatan-pendakwaan"
              className="mt-4 inline-flex rounded-lg bg-pink-700 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-800"
            >
              Buka Siasatan & Pendakwaan
            </Link>
          </article>

          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold tracking-wide text-violet-700">MODUL 7</p>
            <h2 className="mt-1 text-lg font-bold text-slate-900">
              Pengurusan Tindakbalas Nuklear - SPTN
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Aktiviti SPTN, output aduan, pasukan tindakbalas, pengujian pelan
              kecemasan, dan laporan berkaitan.
            </p>
            <Link
              href="/modules/pengurusan-tindakbalas-nuklear-sptn"
              className="mt-4 inline-flex rounded-lg bg-violet-700 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-800"
            >
              Buka Modul SPTN
            </Link>
          </article>

          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold tracking-wide text-cyan-700">MODUL 8</p>
            <h2 className="mt-1 text-lg font-bold text-slate-900">Permit</h2>
            <p className="mt-2 text-sm text-slate-600">
              Integrasi API dengan Sistem ePermit untuk aliran permit.
            </p>
            <Link
              href="/modules/permit"
              className="mt-4 inline-flex rounded-lg bg-cyan-700 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-800"
            >
              Buka Permit
            </Link>
          </article>

          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold tracking-wide text-orange-700">MODUL 9</p>
            <h2 className="mt-1 text-lg font-bold text-slate-900">Peperiksaan & Pensijilan</h2>
            <p className="mt-2 text-sm text-slate-600">
              Peperiksaan (PPS/PUK/PR), CEP, dan Audit Pematuhan Pusat Latihan.
            </p>
            <Link
              href="/modules/peperiksaan-pensijilan"
              className="mt-4 inline-flex rounded-lg bg-orange-700 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-800"
            >
              Buka Peperiksaan & Pensijilan
            </Link>
          </article>

          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold tracking-wide text-green-700">MODUL 10</p>
            <h2 className="mt-1 text-lg font-bold text-slate-900">Pengiktirafan</h2>
            <p className="mt-2 text-sm text-slate-600">
              Pengiktirafan pekerja sinaran, PPB, dan tenaga pengajar.
            </p>
            <Link
              href="/modules/pengiktirafan"
              className="mt-4 inline-flex rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800"
            >
              Buka Pengiktirafan
            </Link>
          </article>

          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold tracking-wide text-blue-700">MODUL 11</p>
            <h2 className="mt-1 text-lg font-bold text-slate-900">Penilaian Lawatan Tapak</h2>
            <p className="mt-2 text-sm text-slate-600">
              Penilaian lawatan tapak untuk Pemegang Lesen (PL) dan Orang Awam.
            </p>
            <Link
              href="/modules/penilaian-lawatan-tapak"
              className="mt-4 inline-flex rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Buka Penilaian Lawatan Tapak
            </Link>
          </article>

          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold tracking-wide text-amber-700">MODUL 12</p>
            <h2 className="mt-1 text-lg font-bold text-slate-900">Kewangan</h2>
            <p className="mt-2 text-sm text-slate-600">
              Pembayaran fee Permohonan Lesen, Pengiktirafan Pekerja, Peperiksaan,
              termasuk integrasi online banking.
            </p>
            <Link
              href="/modules/kewangan"
              className="mt-4 inline-flex rounded-lg bg-amber-700 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-800"
            >
              Buka Kewangan
            </Link>
          </article>

          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold tracking-wide text-indigo-700">MODUL 13</p>
            <h2 className="mt-1 text-lg font-bold text-slate-900">Pangkalan Data</h2>
            <p className="mt-2 text-sm text-slate-600">
              Maklumat syarikat, kemaskini data operasi, dan pengurusan inventori
              bahan/radas.
            </p>
            <Link
              href="/modules/pangkalan-data"
              className="mt-4 inline-flex rounded-lg bg-indigo-700 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-800"
            >
              Buka Pangkalan Data
            </Link>
          </article>

          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold tracking-wide text-purple-700">MODUL 14</p>
            <h2 className="mt-1 text-lg font-bold text-slate-900">Laporan dan Statistik</h2>
            <p className="mt-2 text-sm text-slate-600">
              Piagam, spesifikasi output, statistik, label/surat, data audit, dan
              prestasi penilai.
            </p>
            <Link
              href="/modules/laporan-statistik"
              className="mt-4 inline-flex rounded-lg bg-purple-700 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-800"
            >
              Buka Laporan dan Statistik
            </Link>
          </article>

          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold tracking-wide text-slate-700">MODUL 15</p>
            <h2 className="mt-1 text-lg font-bold text-slate-900">Pentadbir Dalaman</h2>
            <p className="mt-2 text-sm text-slate-600">
              Tugasan pegawai dan penentuan tempoh piagam pelanggan.
            </p>
            <Link
              href="/modules/pentadbir-dalaman"
              className="mt-4 inline-flex rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Buka Pentadbir Dalaman
            </Link>
          </article>

          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold tracking-wide text-emerald-700">MODUL 16</p>
            <h2 className="mt-1 text-lg font-bold text-slate-900">Manual Pengguna</h2>
            <p className="mt-2 text-sm text-slate-600">
              Panduan penggunaan sistem eATOM untuk kakitangan Atom Malaysia.
            </p>
            <Link
              href="/modules/manual-pengguna"
              className="mt-4 inline-flex rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
            >
              Buka Manual Pengguna
            </Link>
          </article>
        </div>
      </div>
    </main>
  );
}
