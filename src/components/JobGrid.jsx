import JobCard from './JobCard';

const jobs = [
    { id: 1, title: "Neuro-Hacker", salary: 5000, integrity: 75 },
    { id: 2, title: "Cyber-Mechanic", salary: 4500, integrity: 60 },
    { id: 3, title: "AI Whisperer", salary: 6000, integrity: 90 },
];

export default function JobGrid() {
    return (
        <section className="container mx-auto px-4 py-16 neon-border">
            <h2 className="cyber-font text-3xl text-neon-pink mb-8 text-center glitch-text">
                AVAILABLE NEURAL IMPLANTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {jobs.map((job) => (
                    <JobCard
                        key={job.id}
                        title={job.title}
                        salary={job.salary}
                        integrity={job.integrity}
                    />
                ))}
            </div>
        </section>
    );
}