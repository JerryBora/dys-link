// src/components/LeftSidebar.jsx
export default function LeftSidebar() {
    return (
        <div className="cyber-sidebar neon-border-l p-4">
            {/* Profile Card */}
            <div className="cyber-profile mb-6">
                <div className="glitch-avatar"></div>
                <h2 className="glitch-text mt-4">NEURAL_OPERATOR_42</h2>
                <p className="text-neon-blue">Augmented Developer @ NeuroCorp</p>
            </div>

            {/* Navigation */}
            <nav className="cyber-nav mb-8">
                <ul className="space-y-3">
                    {['Neural Feed', 'Implant Network', 'Cortical Analytics', 'Encrypted Comms'].map((item) => (
                        <li key={item} className="group">
                            <button className="cyber-nav-btn">
                                <span className="group-hover:text-neon-pink">{item}</span>
                                <div className="nav-glow"></div>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Neural Links */}
            <div className="connections">
                <h3 className="cyber-subheader">NEURAL LINKS</h3>
                {['CircuitBreaker', 'Ghost_InShell', 'Zero_Cool'].map((name) => (
                    <div key={name} className="connection-item">
                        <div className="status-indicator online"></div>
                        <p className="text-neon-cyan">{name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}