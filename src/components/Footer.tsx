export function Footer() {
  return (
    <footer className="snap-section relative bg-background flex items-center justify-center pt-12 px-6 md:px-margin-desktop pb-12 z-10">
      <div className="max-w-container-max mx-auto flex flex-col items-center gap-8 w-full">
        <div className="text-center">
          <h4 className="font-display text-4xl md:text-6xl text-primary mb-4">Elan Spaces</h4>
          <p className="font-body text-sm md:text-base text-tertiary">
            Architecture for the Soul. Bengaluru, India.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <a className="font-body text-sm text-on-surface-variant transition-all duration-300 opacity-60 hover:opacity-100 hover:underline hover:text-primary" href="#">Privacy Portfolio</a>
          <a className="font-body text-sm text-on-surface-variant transition-all duration-300 opacity-60 hover:opacity-100 hover:underline hover:text-primary" href="#">Terms of Sanctuary</a>
          <a className="font-body text-sm text-on-surface-variant transition-all duration-300 opacity-60 hover:opacity-100 hover:underline hover:text-primary" href="#">The Atelier</a>
          <a className="font-body text-sm text-on-surface-variant transition-all duration-300 opacity-60 hover:opacity-100 hover:underline hover:text-primary" href="#">Press Inquiries</a>
        </div>
        <div className="mt-8 opacity-30 text-[10px] tracking-[0.3em] uppercase">
           Crafted with Presence
        </div>
      </div>
    </footer>
  );
}
