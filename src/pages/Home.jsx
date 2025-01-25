import Hero from '../components/Hero';
import JobGrid from '../components/JobGrid';

export default function Home() {
    return (
        <div className="scanlines">
            <Hero />
            <JobGrid />
        </div>
    );
}