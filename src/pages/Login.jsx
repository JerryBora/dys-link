import React from "react"

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
            <div className="cyber-card w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center neon-text">Jack In to DYS-LINK</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-[#00ffff]">
                            Neural ID
                        </label>
                        <input type="text" id="username" name="username" className="mt-1 block w-full cyber-input" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-[#00ffff]">
                            Mind Key
                        </label>
                        <input type="password" id="password" name="password" className="mt-1 block w-full cyber-input" required />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-[#00ffff] hover:bg-[#ff00ff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00ffff]"
                        >
                            Initiate Neural Handshake
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-center text-sm">
                    <a href="#" className="font-medium text-[#00ffff] hover:text-[#ff00ff]">
                        Forgot your cybernetic credentials?
                    </a>
                </p>
            </div>
        </div>
    )
}

