import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import WorkerManager from '../utils/WorkerManager';
import ResultsSection from '../components/ResultsSection';

const Home = () => {
  const { t } = useTranslation();

  const [doors, setDoors] = useState(3);
  const [playerBehavior, setPlayerBehavior] = useState('switch');
  const [hostKnowledge, setHostKnowledge] = useState('knows');
  const [simulations, setSimulations] = useState(100);
  const [results, setResults] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  let workerManager = null;

  const handleRunSimulation = () => {
    setIsRunning(true);
    setProgress(0);
    setResults(null);

    workerManager = new WorkerManager(new URL('../workers/simulationWorker.js', import.meta.url));

    workerManager.on('progress', (data) => {
      setProgress(data.progress);
    });

    workerManager.on('complete', (data) => {
      setResults(data);
      setIsRunning(false);
      workerManager.terminate();
    });

    workerManager.on('error', (error) => {
      console.error('Worker Error:', error);
      setIsRunning(false);
      workerManager.terminate();
    });

    workerManager.postMessage({
      doors,
      playerBehavior,
      hostKnowledge,
      simulations,
    });
  };

  return (
    <div className="p-6">
      <div className="max-w-screen-lg mx-auto">
        <section className="mb-14">
          <p className="text-gray-700">
            {t('introText')}
          </p>
        </section>

        <section className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block mb-2 font-semibold">{t('numberOfDoors')}</label>
              <select
                value={doors}
                onChange={(e) => setDoors(Number(e.target.value))}
                className="w-full p-2 border rounded"
              >
                {[3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 100, 1000].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-2 font-semibold">{t('playerBehavior')}</label>
              <select
                value={playerBehavior}
                onChange={(e) => setPlayerBehavior(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="switch">{t('switchDoors')}</option>
                <option value="stay">{t('stay')}</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 font-semibold">{t('hostKnowledge')}</label>
              <select
                value={hostKnowledge}
                onChange={(e) => setHostKnowledge(e.target.value)}
                className="w-full p-2 border rounded"
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
              >
                {[100, 500, 1000, 5000, 10000, 100000, 1000000].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={handleRunSimulation}
              disabled={isRunning}
              className="bg-teal-600 text-white px-6 py-3 rounded shadow hover:bg-teal-700 transition"
            >
              {isRunning ? `${t('runningSimulation')} (${progress.toFixed(0)}%)` : t('runSimulation')}
            </button>
          </div>
        </section>

        {/* Results Section */}
        <ResultsSection results={results} progress={progress} isRunning={isRunning} />
      </div>
    </div>
  );
};

export default Home;
