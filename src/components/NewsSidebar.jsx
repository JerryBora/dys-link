export default function NewsSidebar() {
    const newsItems = [
        { title: 'New Cortical Implant v2.4', source: 'Neural Tech Daily' },
        { title: 'AI Ethics Manifesto v9 Released', source: 'Cyberpunk Times' },
        { title: 'Quantum Encryption Broken?', source: 'Cypher News' },
    ];

    return (
        <div className="cyber-border p-4 neon-glow">
            <h3 className="cyber-font text-neon-pink mb-4">NEURAL FEED</h3>
            <div className="space-y-4">
                {newsItems.map((news) => (
                    <div key={news.title} className="group cursor-pointer">
                        <p className="text-neon-blue group-hover:text-neon-pink transition-colors">
                            {news.title}
                        </p>
                        <p className="text-sm text-neon-pink/60">{news.source}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}