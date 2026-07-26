import {
  MessageCircleQuestion,
  ClipboardCheck,
  Coins,
  Wrench,
  FolderOpen,
} from "lucide-react";

function FloatingIcon({ icon: Icon, tint, className }) {
  return (
    <div className={`hero-float-icon ${tint} ${className}`}>
      <Icon size={20} />
    </div>
  );
}

export default function HeroMockup() {
  return (
    <div className="hero-mockup">
      <div className="hero-mockup-back-card">
        <div className="notif-item hero-notif-preview">
          <span className="notif-dot" />
          <div className="notif-item-body">
            <strong>Explicação pronta:</strong>
            <span>Funções do 2º grau.</span>
          </div>
        </div>
      </div>

      <div className="hero-mockup-frame">
        <div className="hero-mockup-screen">
          <div className="mini-card mini-card-featured hero-mockup-card">
            <div className="mini-card-live-row">
              <span className="mini-card-live" />
              <span className="mini-card-live-label">Ao vivo</span>
            </div>
            <div className="card-icon-box tint-accent">
              <MessageCircleQuestion size={20} />
            </div>
            <strong>Explicação</strong>
          </div>

          <div className="mini-card mini-card-avaliacao hero-mockup-card-peek">
            <div className="card-icon-box tint-accent">
              <ClipboardCheck size={20} />
            </div>
            <strong>Avaliação</strong>
          </div>

          <div className="mini-card mini-card-gold hero-mockup-card-peek">
            <div className="card-icon-box tint-gold">
              <Coins size={20} />
            </div>
            <strong>Estudos</strong>
          </div>
        </div>
      </div>

      <FloatingIcon icon={MessageCircleQuestion} tint="tint-accent" className="pos-1" />
      <FloatingIcon icon={ClipboardCheck} tint="tint-accent" className="pos-2" />
      <FloatingIcon icon={Coins} tint="tint-gold" className="pos-3" />
      <FloatingIcon icon={Wrench} tint="tint-warning" className="pos-4" />
      <FloatingIcon icon={FolderOpen} tint="tint-warning" className="pos-5" />
    </div>
  );
}
