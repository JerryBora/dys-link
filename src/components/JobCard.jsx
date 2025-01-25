export default function JobCard({ title, salary, integrity }) {
    return (
        <div className="cyber-card bg-dark-bg border-2 border-neon-blue p-6 rounded-lg hover:shadow-neon transition-all">
            <h3 className="cyber-font text-xl font-bold mb-2 neon-text-outline">{title}</h3>
            <p className="text-neon-pink mb-4">₿ {salary.toLocaleString()}</p>

            <div className="mb-4">
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-neon-gradient transition-all duration-500"
                        style={{ width: `${integrity}%` }}
                    ></div>
                </div>
                <p className="text-neon-blue text-sm mt-1">SOUL INTEGRITY: {integrity}%</p>
            </div>

            <button className="cyber-button w-full py-3 hover:animate-pulse">
                <span className="relative z-10">APPLY</span>
            </button>
        </div>
    );
}