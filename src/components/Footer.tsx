export function Footer() {
  return (
    <footer className="snap-section relative bg-background flex items-center justify-center pt-12 px-6 md:px-margin-desktop pb-12 z-10">
      <div className="max-w-container-max mx-auto flex flex-col items-center gap-8 w-full">
        <div className="text-center flex flex-col items-center">
          <img 
            src="https://i.ibb.co/fYpkJcgR/only-icon-no-bg.png" 
            alt="Elan Spaces Logo" 
            className="w-[84px] h-[84px] md:w-[120px] md:h-[120px] object-contain mb-4"
            referrerPolicy="no-referrer"
          />
          <h4 className="font-display text-4xl md:text-6xl text-primary mb-4">Elan Spaces</h4>
          <p className="font-body text-sm md:text-base text-tertiary">
            Architecture for the Soul.
          </p>
          <div className="mt-3 flex flex-col items-center gap-1.5 text-xs text-on-surface-variant/80">
            <p className="font-sans font-medium">
              <a href="mailto:elanspacesblr@gmail.com" className="hover:text-primary transition-colors">elanspacesblr@gmail.com</a>
              <span className="mx-2 opacity-40">|</span>
              <a href="tel:+919731175911" className="hover:text-primary transition-colors">+91 97311 75911</a>
            </p>
            <p className="font-sans text-stone-500 max-w-md text-center leading-relaxed">
              Sarvagna Circle, 88, 1st Main Rd, AGS Layout, Bengaluru, Karnataka 560061
            </p>
          </div>
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
