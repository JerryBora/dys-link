export default function ProfileHeader() {
    return (
        <div className="cyber-profile-header relative border-b-2 border-neon-pink">
            <div className="h-48 bg-gradient-to-r from-neon-blue to-neon-pink opacity-20"></div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="cyber-avatar-container neon-glow">
                    <img
                        src="/avatar.png"
                        className="w-32 h-32 rounded-full border-4 border-neon-blue"
                        alt="Profile"
                    />
                </div>
            </div>

            <div className="pt-20 text-center">
                <h1 className="glitch-text text-3xl">Neural_Operator_42</h1>
                <p className="text-neon-blue mt-2">Augmented Reality Developer @ CyberCorp</p>
                <div className="flex justify-center gap-4 mt-4">
                    <button className="holographic-button">Connect</button>
                    <button className="holographic-button">Message</button>
                </div>
            </div>
        </div>
    );
}