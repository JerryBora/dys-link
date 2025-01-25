export default function RightSidebar() {
    const newsItems = [
        { title: 'Neural Lace v3.0 Released', source: 'CyberTech Daily' },
        { title: 'ICE Breaker Convention 2045', source: 'Neuromancer Times' },
        { title: 'Quantum Encryption Standards', source: 'Cypher News' },
        { title: 'New Cortical Implant Mods', source: 'Neural Modders' },
    ];

    return (
        <div className="cyber-news-card p-4 neon-glow">
            {/* News Header */}
            <div className="flex justify-between items-center mb-6">
                <h3 className="cyber-font text-neon-pink">Neural Feed</h3>
                <span className="text-neon-blue text-sm">▼ Trending</span>
            </div>

            {/* News Items */}
            <div className="space-y-5">
                {newsItems.map((news, index) => (
                    <div key={index} className="news-item group">
                        <div className="flex gap-3">
                            <div className="news-index text-neon-cyan">{String(index + 1).padStart(2, '0')}</div>
                            <div>
                                <p className="cyber-font text-neon-blue group-hover:text-neon-cyan transition-colors">
                                    {news.title}
                                </p>
                                <p className="text-neon-pink text-sm">{news.source}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Promoted Content */}
            <div className="cyber-ad mt-8 p-4 neon-glow">
                <div className="text-center">
                    <p className="text-neon-pink mb-2">▼ Sponsored Implant ▼</p>
                    <div className="cyber-ad-content animate-pulse">
                        <p className="cyber-font text-neon-cyan">NEURO-LINK v4.2</p>
                        <p className="text-sm text-neon-blue">Cortical Upgrade Package</p>
                    </div>
                </div>
            </div>
        </div>
    );
}