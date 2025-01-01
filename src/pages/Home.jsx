import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import WorkerManager from '../utils/WorkerManager';

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

    // Initialize the worker manager
    workerManager = new WorkerManager(new URL('../workers/simulationWorker.js', import.meta.url));

    // Listen for progress updates
    workerManager.on('progress', (data) => {
      setProgress(data.progress);
    });

    // Listen for the final result
    workerManager.on('complete', (data) => {
      setResults(data);
      setIsRunning(false);
      workerManager.terminate();
    });

    // Listen for errors
    workerManager.on('error', (error) => {
      console.error('Worker Error:', error);
      setIsRunning(false);
      workerManager.terminate();
    });

    // Start the simulation
    workerManager.postMessage({
      doors,
      playerBehavior,
      hostKnowledge,
      simulations,
    });
  };

  const totalPlayedGames = results ? results.totalSimulations - results.hostAbortedGames : 0;
  const winRate =
    results && results.wins + results.losses > 0
      ? ((results.wins / (results.wins + results.losses)) * 100).toFixed(2)
      : '---';

  return (
    <div className="p-6">
      <div className="max-w-screen-lg mx-auto">
        {/* Configuration Section */}
        <section className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block mb-2 font-semibold">{t('numberOfDoors')}</label>
              <select
                value={doors}
                onChange={(e) => setDoors(Number(e.target.value))}
                className="w-full p-2 border rounded"
              >
                {[3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 100].map((n) => (
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
          <div className="flex justify-center mt-4">
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
        <section className="flex justify-center mt-4">
          <ul className="space-y-2">
            <li>
              <strong>{t('totalSimulations')}:</strong> {results ? results.totalSimulations : '---'}
            </li>
            <li>
              <strong>{t('abortedGames')}:</strong> {results ? results.hostAbortedGames : '---'}{' '}
              <span className="text-sm text-gray-600">({t('abortedGamesDescription')})</span>
            </li>
            <li className="pt-4">
              <strong>{t('gamesFinished')}:</strong> {results ? totalPlayedGames : '---'}{' '}
              <span className="text-sm text-gray-600">({t('gamesFinishedDescription')})</span>
            </li>
            <li>
              <strong>{t('wins')}:</strong> {results ? results.wins : '---'}{' '}
              <span className="text-sm text-gray-600">({t('winsDescription')})</span>
            </li>
            <li>
              <strong>{t('losses')}:</strong> {results ? results.losses : '---'}{' '}
              <span className="text-sm text-gray-600">({t('lossesDescription')})</span>
            </li>
            <li>
              <strong>{t('winRate')}:</strong> {winRate}{' '}
              <span className="text-sm text-gray-600">({t('winRateDescription')})</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Home;
