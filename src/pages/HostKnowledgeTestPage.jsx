import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import WorkerManager from '../utils/WorkerManager';
import ResultsSection from '../components/ResultsSection';
import styles from './Home.module.css';
import SimulationWorker from '../workers/simulationWorker.js?worker';

const HostKnowledgeTestPage = () => {
    const { t } = useTranslation();

    const [doors, setDoors] = useState(3);
    const [hostKnowledge, setHostKnowledge] = useState('knows');
    const [simulations, setSimulations] = useState(100);
    const [results, setResults] = useState({
        wins: 0,
        losses: 0,
        hostAbortedGames: 0,
        totalSimulations: 0,
    });
    const [progress, setProgress] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [lastRunParameters, setLastRunParameters] = useState(null); // To track last used parameters

    const workerManagerRef = useRef(null);

    const handleRunSimulation = () => {
        setIsRunning(true);
        setProgress(0);
        setResults({ wins: 0, losses: 0, hostAbortedGames: 0, totalSimulations: simulations });

        // Store the last run parameters (playerBehavior is fixed to 'stay')
        setLastRunParameters({ doors, hostKnowledge, simulations, playerBehavior: 'stay' });

        workerManagerRef.current = new WorkerManager(new SimulationWorker());

        workerManagerRef.current.on('progress', (data) => {
            setProgress(data.progress);
            setResults((prevResults) => ({
                ...prevResults,
                ...data.partialResults,
            }));
        });

        workerManagerRef.current.on('complete', () => {
            setIsRunning(false);
            workerManagerRef.current.terminate();
            workerManagerRef.current = null;
        });

        workerManagerRef.current.on('error', (error) => {
            console.error('Worker Error:', error);
            setIsRunning(false);
            workerManagerRef.current.terminate();
            workerManagerRef.current = null;
        });

        workerManagerRef.current.postMessage({
            doors,
            hostKnowledge,
            simulations,
            playerBehavior: 'stay', // Fixed strategy
        });
    };

    const handleAbortSimulation = () => {
        if (workerManagerRef.current) {
            workerManagerRef.current.terminate();
            workerManagerRef.current = null;
            setIsRunning(false);
        }
    };

    useEffect(() => {
        return () => {
            if (workerManagerRef.current) {
                workerManagerRef.current.terminate();
                workerManagerRef.current = null;
            }
        };
    }, []);

    // Use lastRunParameters.doors to ensure the calculation only uses the parameters from the completed simulation.
    let hostIsKnowledgeable = null;
    const validGames = results.wins + results.losses;
    if (!isRunning && validGames > 0 && lastRunParameters) {
        const usedDoors = lastRunParameters.doors;
        const winRate = results.wins / validGames;
        const expectedKnows = 1 / usedDoors;
        const expectedRandom = 0.5;
        const diffKnows = Math.abs(winRate - expectedKnows);
        const diffRandom = Math.abs(winRate - expectedRandom);
        hostIsKnowledgeable = diffKnows < diffRandom;
    }

    return (
        <div className={'p-6 ' + styles['home-wrapper']}>
            <div className="max-w-screen-lg mx-auto">
                <section className="mb-14">
                    <p className="text-gray-700">
                        {t('introTextHostKnowledge')}
                    </p>
                </section>

                <section className="mb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                            <label className="block mb-2 font-semibold">{t('numberOfDoors')}</label>
                            <select
                                value={doors}
                                onChange={(e) => setDoors(Number(e.target.value))}
                                className="w-full p-2 border rounded"
                                disabled={isRunning}
                            >
                                {[3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 100].map((n) => (
                                    <option key={n} value={n}>
                                        {n}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 font-semibold">{t('hostKnowledge')}</label>
                            <select
                                value={hostKnowledge}
                                onChange={(e) => setHostKnowledge(e.target.value)}
                                className="w-full p-2 border rounded"
                                disabled={isRunning}
                            >
                                <option value="knows">{t('hostKnows')}</option>
                                <option value="random">{t('hostDoesNotKnow')}</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 font-semibold">{t('numberOfSimulations')}</label>
                            <select
                                value={simulations}
                                onChange={(e) => setSimulations(Number(e.target.value))}
                                className="w-full p-2 border rounded"
                                disabled={isRunning}
                            >
                                {[100, 500, 1000, 5000, 10000, 100000, 1000000, 10000000].map((n) => (
                                    <option key={n} value={n}>
                                        {n}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">
                        {isRunning ? (
                            <button
                                onClick={handleAbortSimulation}
                                className="bg-red-600 text-white px-6 py-3 rounded shadow hover:bg-red-700 transition"
                            >
                                {progress.toFixed(2)} % ({t('abortSimulation')})
                            </button>
                        ) : (
                            <button
                                onClick={handleRunSimulation}
                                className="bg-teal-600 text-white px-6 py-3 rounded shadow hover:bg-teal-700 transition"
                            >
                                {t('runSimulation')}
                            </button>
                        )}
                    </div>
                    {/* New Test Result Section */}
                    <div
                        className={`text-center text-3xl font-bold mt-4 ${hostIsKnowledgeable === true
                            ? 'text-green-600'
                            : hostIsKnowledgeable === false
                                ? 'text-red-600'
                                : ''
                            }`}
                    >
                        {hostIsKnowledgeable === true
                            ? t('hostKnowsResult')
                            : hostIsKnowledgeable === false
                                ? t('hostDoesNotKnowResult')
                                : '---'}
                    </div>
                </section>

                {/* Results Section */}
                <ResultsSection
                    results={results}
                    progress={progress}
                    isRunning={isRunning}
                    lastRunParameters={lastRunParameters}
                />
            </div>
        </div>
    );
};

export default HostKnowledgeTestPage;
