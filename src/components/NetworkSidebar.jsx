export default function NetworkSidebar() {
    const connections = [
        { name: 'CircuitBreaker', role: 'Neural Engineer', status: 'online' },
        { name: 'Ghost_InShell', role: 'AI Ethics Hacker', status: 'away' },
        { name: 'Zero_Cool', role: 'Cyber Security', status: 'busy' },
    ];

    return (
        <div className="cyber-border p-4 neon-glow">
            <h3 className="cyber-font text-neon-pink mb-4">NEURAL CONNECTIONS</h3>
            <div className="space-y-4">
                {connections.map((conn) => (
                    <div key={conn.name} className="flex items-center gap-3">
                        <div className={`status-indicator ${conn.status}`}></div>
                        <div>
                            <p className="text-neon-blue">{conn.name}</p>
                            <p className="text-sm text-neon-pink/80">{conn.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}