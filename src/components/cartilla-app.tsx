import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Clock3,
  MapPin,
  Pause,
  Play,
  Printer,
  ShieldCheck,
  SkipForward,
  X,
} from "lucide-react";
import { AREAS, sessionExercises, type Area, type AreaId, type Exercise } from "@/lib/cartilla";
import { PoseFigure } from "@/components/figures";
import { cn } from "@/lib/utils";

type View = "cover" | AreaId;

export function CartillaApp() {
  const [view, setView] = useState<View>("cover");
  const [sessionArea, setSessionArea] = useState<Area | null>(null);

  const area = AREAS.find((item) => item.id === view) ?? null;

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand-ink focus:px-3 focus:py-2 focus:text-paper-pure"
      >
        Saltar al contenido
      </a>
      {view !== "cover" ? (
        <TopNav view={view} onChange={setView} onPrint={() => window.print()} />
      ) : null}
      <main id="contenido">
        {view === "cover" ? (
          <Cover onOpen={(id) => setView(id)} />
        ) : area ? (
          <AreaPage
            area={area}
            onStartSession={() => setSessionArea(area)}
          />
        ) : null}
      </main>
      {sessionArea ? (
        <PauseSession area={sessionArea} onClose={() => setSessionArea(null)} />
      ) : null}
    </div>
  );
}

function TopNav({
  view,
  onChange,
  onPrint,
}: {
  view: View;
  onChange: (view: View) => void;
  onPrint: () => void;
}) {
  return (
    <nav className="no-print sticky top-0 z-30 border-b border-line/80 bg-paper-pure/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-2 overflow-x-auto px-3 py-2.5 sm:px-6">
        <button
          type="button"
          onClick={() => onChange("cover")}
          className="inline-flex h-11 shrink-0 items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-brand-ink hover:bg-mist"
        >
          <ArrowLeft className="size-4" />
          Portada
        </button>
        {AREAS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
            className={cn(
              "h-11 shrink-0 rounded-full px-3.5 text-sm font-semibold transition-colors",
              view === item.id
                ? "bg-brand text-brand-ink"
                : "text-ink-soft hover:bg-mist hover:text-ink",
            )}
          >
            {item.title}
          </button>
        ))}
        <button
          type="button"
          onClick={onPrint}
          className="ml-auto inline-flex h-11 shrink-0 items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-brand-ink hover:bg-mist"
        >
          <Printer className="size-4" />
          Imprimir
        </button>
      </div>
    </nav>
  );
}

function Cover({ onOpen }: { onOpen: (id: AreaId) => void }) {
  return (
    <div className="mx-auto grid min-h-dvh max-w-5xl lg:grid-cols-[72px_1fr]">
      <Spiral />
      <div className="flex min-h-dvh flex-col">
        <div className="h-16 bg-brand sm:h-[22vh] sm:min-h-28" />
        <div className="flex flex-col items-center justify-center bg-paper-pure px-6 py-5 text-center sm:flex-1 sm:py-10">
          <p className="font-display text-xs font-semibold tracking-[0.28em] text-brand-deep uppercase">
            Seguridad y salud en el trabajo
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold leading-none tracking-tight text-brand-ink sm:mt-4 sm:text-6xl">
            CARTILLA
            <span className="block">BIOMECÁNICA</span>
          </h1>
          <Wordmark className="mt-4 sm:mt-8" />
          <p className="mx-auto mt-3 max-w-md text-sm leading-snug text-ink-soft sm:mt-6 sm:text-base sm:leading-relaxed">
            Ejercicios de gimnasia laboral para el transporte especial premium
            con flota eléctrica en Bogotá.
          </p>
        </div>
        <div className="bg-brand px-5 py-4 sm:px-10 sm:py-8">
          <p className="mb-2.5 text-center text-xs font-semibold tracking-wide text-brand-ink uppercase sm:mb-4 sm:text-sm">
            Elija su área
          </p>
          <div className="mx-auto grid max-w-3xl gap-2 sm:grid-cols-3 sm:gap-3">
            {AREAS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onOpen(item.id)}
                className="rounded-2xl bg-paper-pure px-4 py-2.5 text-left shadow-sm transition-transform hover:-translate-y-0.5 sm:rounded-[22px] sm:py-5"
              >
                <p className="font-display text-base font-bold text-brand-ink sm:text-lg">{item.title}</p>
                <p className="text-xs leading-snug text-ink-soft sm:mt-1 sm:text-sm">{item.kicker}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Wordmark({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "font-display text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl",
        className,
      )}
    >
      lets
      <span className="text-brand-deep">móvil</span>
      <span className="ml-1 inline-block size-2.5 rounded-full bg-brand align-super" />
    </p>
  );
}

function Spiral() {
  return (
    <div className="no-print relative hidden bg-paper lg:block" aria-hidden="true">
      <div className="absolute inset-y-0 right-0 w-px bg-line" />
      <div className="flex h-full flex-col items-center justify-between py-10">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="size-7 rounded-full border-[5px] border-brand-ink/25 bg-paper-pure shadow-sm"
          />
        ))}
      </div>
    </div>
  );
}

function AreaPage({
  area,
  onStartSession,
}: {
  area: Area;
  onStartSession: () => void;
}) {
  return (
    <div className="mx-auto max-w-5xl lg:grid lg:grid-cols-[72px_1fr]">
      <Spiral />
      <article className="bg-paper-pure pb-16">
        <header className="bg-brand px-5 py-8 sm:px-10">
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-brand-ink uppercase">
            Cartilla biomecánica · letsmóvil
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold text-brand-ink sm:text-5xl">
            {area.title.toUpperCase()}
          </h1>
          <p className="mt-2 text-sm font-semibold text-brand-ink/80">{area.kicker}</p>
        </header>

        <div className="px-5 sm:px-10">
          <img
            src={area.image}
            alt={area.imageAlt}
            className="mt-6 max-h-52 w-full rounded-[22px] object-cover object-center sm:max-h-72 sm:aspect-video"
          />

          <section className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <Band>Contexto Let's Móvil</Band>
              <p className="mt-3 text-[1.05rem] leading-relaxed text-ink">{area.context}</p>
            </div>
            <aside className="rounded-[22px] bg-mist p-5">
              <p className="font-display text-sm font-bold tracking-wide text-brand-ink uppercase">
                Qué se carga en este cargo
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-snug text-ink">
                {area.risks.map((risk) => (
                  <li key={risk} className="flex gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-deep" />
                    {risk}
                  </li>
                ))}
              </ul>
            </aside>
          </section>

          <div className="mt-6 flex flex-col gap-3 rounded-[22px] border border-line bg-paper px-5 py-4 sm:flex-row sm:items-center">
            <Clock3 className="size-5 shrink-0 text-brand-deep" />
            <p className="flex-1 text-sm leading-relaxed text-ink">
              <span className="font-semibold">Frecuencia: </span>
              {area.frequency}
            </p>
            <button
              type="button"
              onClick={onStartSession}
              className="no-print inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-ink px-5 text-sm font-semibold text-paper-pure"
            >
              <Play className="size-4" />
              Iniciar pausa guiada
            </button>
          </div>

          {area.groups.map((group) => (
            <section key={group.id} className="mt-10">
              <Band>{group.title}</Band>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-soft">
                {group.purpose}
              </p>
              <div className="mt-5 overflow-hidden rounded-[22px] border border-line">
                <div className="hidden grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)_140px] bg-brand text-sm font-bold tracking-wide text-brand-ink uppercase sm:grid">
                  <div className="px-4 py-3">Ejercicio</div>
                  <div className="px-4 py-3">Ejecución</div>
                  <div className="px-4 py-3">Dosis</div>
                </div>
                <div className="divide-y divide-line">
                  {group.exercises.map((exercise) => (
                    <ExerciseRow key={exercise.id} exercise={exercise} />
                  ))}
                </div>
              </div>
            </section>
          ))}

          <footer className="mt-12 rounded-[22px] bg-mist px-5 py-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-brand-deep" />
              <div>
                <p className="font-display font-bold text-brand-ink">Antes de empezar</p>
                <p className="mt-1 text-sm leading-relaxed text-ink">
                  Muévase sin dolor, sin rebotes y con respiración continua. Detenga el
                  ejercicio si aparece mareo, hormigueo o dolor agudo. Esta cartilla no
                  reemplaza la valoración fisioterapéutica ni el programa de vigilancia
                  osteomuscular de Let's Móvil.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}

function Band({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="inline-flex rounded-full bg-brand px-4 py-1.5 font-display text-sm font-bold tracking-[0.12em] text-brand-ink uppercase">
      {children}
    </h2>
  );
}

function ExerciseRow({ exercise }: { exercise: Exercise }) {
  return (
    <div className="grid gap-3 bg-paper-pure p-4 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)_140px] sm:items-start">
      <div className="flex gap-3">
        <div className="size-[4.6rem] shrink-0 overflow-hidden rounded-[18px] sm:size-[5.4rem]">
          <PoseFigure pose={exercise.pose} />
        </div>
        <div>
          <p className="font-display text-base font-bold text-brand-ink">{exercise.name}</p>
          <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-brand-deep">
            <MapPin className="size-3.5" />
            {exercise.where}
          </p>
          <p className="mt-1 text-sm text-ink-soft sm:hidden">{exercise.execution}</p>
          <p className="mt-2 text-xs font-semibold tracking-wide text-brand-ink uppercase sm:hidden">
            {exercise.dose}
          </p>
        </div>
      </div>
      <p className="hidden text-sm leading-relaxed text-ink sm:block">{exercise.execution}</p>
      <p className="hidden text-sm font-semibold text-brand-ink sm:block">{exercise.dose}</p>
      <p className="col-span-full text-sm text-ink-soft sm:pl-[5.9rem]">{exercise.benefit}</p>
    </div>
  );
}

function PauseSession({ area, onClose }: { area: Area; onClose: () => void }) {
  const exercises = useMemo(() => sessionExercises(area), [area]);
  const [index, setIndex] = useState(0);
  const [seconds, setSeconds] = useState(20);
  const [running, setRunning] = useState(true);
  const [done, setDone] = useState(false);

  const current = exercises[index];
  const total = exercises.length;

  useEffect(() => {
    if (!running || done) return;
    const id = window.setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          window.clearInterval(id);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [running, done, index]);

  useEffect(() => {
    if (seconds !== 0 || done) return;
    if (index >= total - 1) {
      setDone(true);
      setRunning(false);
      return;
    }
    setIndex((i) => i + 1);
    setSeconds(20);
  }, [seconds, done, index, total]);

  function skip() {
    if (index >= total - 1) {
      setDone(true);
      setRunning(false);
      return;
    }
    setIndex((i) => i + 1);
    setSeconds(20);
    setRunning(true);
  }

  return (
    <div className="no-print fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-3 sm:items-center">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="pausa-title"
        className="flex max-h-[92dvh] w-full max-w-lg flex-col overflow-hidden rounded-[28px] bg-paper-pure shadow-2xl"
      >
        <div className="flex items-center justify-between bg-brand px-5 py-4">
          <div>
            <p className="text-xs font-semibold tracking-wide text-brand-ink uppercase">
              Pausa guiada · {area.title}
            </p>
            <h2 id="pausa-title" className="font-display text-lg font-bold text-brand-ink">
              {done ? "Pausa completada" : `Ejercicio ${index + 1} de ${total}`}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-11 items-center justify-center rounded-full bg-paper-pure text-brand-ink"
            aria-label="Cerrar pausa guiada"
          >
            <X className="size-5" />
          </button>
        </div>

        {done || !current ? (
          <div className="px-6 py-10 text-center">
            <p className="font-display text-2xl font-bold text-brand-ink">Listo</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Completó la pausa activa de {area.title}. Hidrátese y retome la
              tarea con la columna alineada.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-brand-ink px-6 text-sm font-semibold text-paper-pure"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <div className="overflow-y-auto px-5 py-5">
            <div className="mx-auto h-44 w-36">
              <PoseFigure pose={current.pose} />
            </div>
            <h3 className="mt-2 text-center font-display text-xl font-bold text-brand-ink">
              {current.name}
            </h3>
            <p className="mt-2 text-center text-sm leading-relaxed text-ink">{current.execution}</p>
            <p className="mt-2 text-center text-xs font-semibold text-brand-deep">
              {current.dose} · {current.where}
            </p>
            <p className="mt-6 text-center font-display text-5xl font-extrabold tabular-nums text-brand-ink">
              {seconds}s
            </p>
            <div className="mt-6 flex gap-2">
              <button
                type="button"
                onClick={() => setRunning((v) => !v)}
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-mist text-sm font-semibold text-brand-ink"
              >
                {running ? <Pause className="size-4" /> : <Play className="size-4" />}
                {running ? "Pausar" : "Continuar"}
              </button>
              <button
                type="button"
                onClick={skip}
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-brand-ink text-sm font-semibold text-paper-pure"
              >
                <SkipForward className="size-4" />
                Siguiente
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
