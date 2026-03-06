export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Lost Frame Ventures. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
