export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 grid-bg"></div>
            <div className="z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 glitch-text" data-text="FIND YOUR SYNTHETIC PATH">
                    FIND YOUR SYNTHETIC PATH
                </h1>
                <div className="cyber-orb mx-auto"></div>
            </div>
        </section>
    );
}