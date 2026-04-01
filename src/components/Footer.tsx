const Footer = () => {
  return (
    <footer className="bg-navy py-12 border-t border-primary/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">TELENSAT</h3>
            <p className="text-primary-foreground/50 text-sm">Rastreamento e Telemetria</p>
          </div>
          <div className="text-center">
            <p className="text-primary-foreground/40 text-sm">
              © {new Date().getFullYear()} Telensat. Todos os direitos reservados.
            </p>
          </div>
          <div className="text-right">
            <a href="tel:+559833044692" className="text-primary-foreground/50 hover:text-primary-foreground/80 text-sm transition-colors block">
              (98) 3304-4692
            </a>
            <a href="mailto:atendimento@telensat.com.br" className="text-primary-foreground/50 hover:text-primary-foreground/80 text-sm transition-colors block">
              atendimento@telensat.com.br
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
