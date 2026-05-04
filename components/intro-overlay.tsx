import Image from "next/image";

export function IntroOverlay() {
  return (
    <div className="intro-overlay-shell pointer-events-none fixed inset-0 z-[120] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(201,169,98,0.18),transparent_24%),radial-gradient(circle_at_18%_22%,rgba(74,55,40,0.08),transparent_22%),radial-gradient(circle_at_82%_78%,rgba(201,169,98,0.12),transparent_24%),linear-gradient(135deg,#fdfbf7_0%,#f6eee2_52%,#efe3d4_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/75 to-transparent intro-line-sweep" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brown/20 to-transparent intro-line-grow" />
      <div className="absolute left-[10%] top-[24%] h-44 w-44 rounded-full border border-gold/25 bg-white/30 blur-[1px]" />
      <div className="absolute right-[9%] bottom-[18%] h-64 w-64 rounded-full border border-brown/10 bg-gold/5 blur-[1px]" />
      <div className="absolute left-[12%] top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-gold/12 blur-3xl intro-orb-float" />
      <div className="absolute right-[12%] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brown/8 blur-3xl intro-orb-float animation-delay-300" />

      <div className="intro-stage relative z-10 w-full px-5 sm:px-8">
        <div className="intro-logo-shell mx-auto w-full max-w-[20rem] sm:max-w-[44rem] lg:max-w-[70rem]">
          <Image
            src="/gm-intro-logo-transparent-warm.png"
            alt="Gabriel Mello Fotografia"
            width={1632}
            height={612}
            priority
            unoptimized
            sizes="(min-width: 1280px) 1120px, (min-width: 640px) 88vw, 94vw"
            className="intro-logo-image h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
