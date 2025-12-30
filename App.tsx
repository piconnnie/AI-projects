import React, { useState, useMemo, useEffect } from 'react';
import { CURRICULUM } from './data/curriculum';
import { LevelId, Lesson } from './types';
import ForwardProp from './components/Visuals/ForwardProp';
import BackwardProp from './components/Visuals/BackwardProp';
import GradientDescent from './components/Visuals/GradientDescent';
import LinearRegression from './components/Visuals/LinearRegression';
import KMeans from './components/Visuals/KMeans';
import CNN from './components/Visuals/CNN';
import Diagrams from './components/Visuals/Diagrams';
import BinaryClassification from './components/Visuals/BinaryClassification';
import Activations from './components/Visuals/Activations';
import RLVisual from './components/Visuals/RLVisual';
import DecisionTreeVisual from './components/Visuals/DecisionTreeVisual';
import PCAVisual from './components/Visuals/PCAVisual';
import LogisticRegressionVisual from './components/Visuals/LogisticRegressionVisual';
import LossFunctionVisual from './components/Visuals/LossFunctionVisual';
import FoundationVisual from './components/Visuals/FoundationVisual';
import RegularizationVisual from './components/Visuals/RegularizationVisual';
import KNNVisual from './components/Visuals/KNNVisual';
import KNNKValueVisual from './components/Visuals/KNNKValueVisual';
import SVMVisual from './components/Visuals/SVMVisual';
import HierarchicalClusteringVisual from './components/Visuals/HierarchicalClusteringVisual';
import EnsembleVisual from './components/Visuals/EnsembleVisual';
import BoostingVisual from './components/Visuals/BoostingVisual';
import GainLiftVisual from './components/Visuals/GainLiftVisual';
import NaiveBayesVisual from './components/Visuals/NaiveBayesVisual';
import StackingVisual from './components/Visuals/StackingVisual';
import TokenizationVisual from './components/Visuals/TokenizationVisual';
import EmbeddingsVisual from './components/Visuals/EmbeddingsVisual';
import LLMVisual from './components/Visuals/LLMVisual';
import VectorDBVisual from './components/Visuals/VectorDBVisual';
import NeuralNetworkVisual from './components/Visuals/NeuralNetworkVisual';
import AIVsMLVisual from './components/Visuals/AIVsMLVisual';
import TrainTestVisual from './components/Visuals/TrainTestVisual';
import EDAVisual from './components/Visuals/EDAVisual';
import MasteryQuiz from './components/MasteryQuiz';

const App: React.FC = () => {
  const [currentLevelId, setCurrentLevelId] = useState<LevelId>(1);
  const [currentLessonId, setCurrentLessonId] = useState<string>('ai-hierarchy');
  const [showEli5, setShowEli5] = useState(false);
  const [showAnalogy, setShowAnalogy] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [quizAnswered, setQuizAnswered] = useState<boolean | null>(null);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showMasteryQuiz, setShowMasteryQuiz] = useState(false);

  const allLessons = useMemo(() => {
    return CURRICULUM.flatMap(level => 
      level.lessons.map(lesson => ({ ...lesson, levelId: level.id }))
    );
  }, []);

  const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
  const currentLevel = CURRICULUM.find(l => l.id === currentLevelId) || CURRICULUM[0];
  const currentLesson = currentLevel.lessons.find(l => l.id === currentLessonId) || currentLevel.lessons[0];

  const handleLessonSelect = (levelId: LevelId, lessonId: string) => {
    if (lessonId === currentLessonId) return;
    setCurrentLevelId(levelId);
    setCurrentLessonId(lessonId);
    setShowEli5(false);
    setShowAnalogy(false);
    setIsAnimating(false);
    setQuizAnswered(null);
    setSelectedOptionIndex(null);
    // Smooth scroll to top
    const mainContent = document.getElementById('main-content');
    if (mainContent) mainContent.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToNextLesson = () => {
    if (currentIndex < allLessons.length - 1) {
      const next = allLessons[currentIndex + 1];
      handleLessonSelect(next.levelId, next.id);
    }
  };

  const goToPrevLesson = () => {
    if (currentIndex > 0) {
      const prev = allLessons[currentIndex - 1];
      handleLessonSelect(prev.levelId, prev.id);
    }
  };

  const handleQuizSubmit = (index: number) => {
    if (quizAnswered !== null) return;
    setSelectedOptionIndex(index);
    setQuizAnswered(currentLesson.quiz.options[index].isCorrect);
  };

  const renderVisual = () => {
    switch (currentLesson.id) {
      case 'ai-hierarchy': return <AIVsMLVisual isAnimating={isAnimating} />;
      case 'intro': return <FoundationVisual isAnimating={isAnimating} />;
      case 'train-test': return <TrainTestVisual isAnimating={isAnimating} />;
      case 'eda': return <EDAVisual isAnimating={isAnimating} />;
      case 'neural-net-structure': return <NeuralNetworkVisual isAnimating={isAnimating} />;
      case 'deep-learning': return <NeuralNetworkVisual isAnimating={isAnimating} />;
      case 'forward-prop': return <ForwardProp isAnimating={isAnimating} />;
      case 'loss-function': return <LossFunctionVisual isAnimating={isAnimating} />;
      case 'backward-prop': return <BackwardProp isAnimating={isAnimating} />;
      case 'gradient-descent': return <GradientDescent isAnimating={isAnimating} />;
      case 'linear-reg': return <LinearRegression isAnimating={isAnimating} />;
      case 'kmeans': return <KMeans isAnimating={isAnimating} />;
      case 'cnn-conv': return <CNN isAnimating={isAnimating} />;
      case 'binary-class': return <BinaryClassification isAnimating={isAnimating} />;
      case 'activations': return <Activations isAnimating={isAnimating} />;
      case 'rl-intro':
      case 'q-learning': return <RLVisual isAnimating={isAnimating} />;
      case 'decision-trees': return <DecisionTreeVisual isAnimating={isAnimating} />;
      case 'pca': return <PCAVisual isAnimating={isAnimating} />;
      case 'logistic-reg': return <LogisticRegressionVisual isAnimating={isAnimating} />;
      case 'knn': return <KNNVisual isAnimating={isAnimating} />;
      case 'knn-k-value': return <KNNKValueVisual isAnimating={isAnimating} />;
      case 'svm': return <SVMVisual isAnimating={isAnimating} />;
      case 'hierarchical-clustering': return <HierarchicalClusteringVisual isAnimating={isAnimating} />;
      case 'regularization': return <RegularizationVisual isAnimating={isAnimating} />;
      case 'ensemble-basics': return <EnsembleVisual isAnimating={isAnimating} />;
      case 'gradient-boost': return <BoostingVisual isAnimating={isAnimating} />;
      case 'gain-lift': return <GainLiftVisual isAnimating={isAnimating} />;
      case 'naive-bayes': return <NaiveBayesVisual isAnimating={isAnimating} />;
      case 'stacking': return <StackingVisual isAnimating={isAnimating} />;
      case 'tokenization': return <TokenizationVisual isAnimating={isAnimating} />;
      case 'embeddings': return <EmbeddingsVisual isAnimating={isAnimating} />;
      case 'llms': return <LLMVisual isAnimating={isAnimating} />;
      case 'vector-db': return <VectorDBVisual isAnimating={isAnimating} />;
      default: return <Diagrams id={currentLesson.id} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Quiz Overlay */}
      {showMasteryQuiz && (
        <MasteryQuiz onClose={() => setShowMasteryQuiz(false)} />
      )}

      {/* Sidebar Navigation */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-white/95 backdrop-blur-xl border-r border-slate-200 transition-transform duration-300 ease-out lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0 shadow-2xl lg:shadow-none' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-slate-100">
            <h1 className="text-xl font-extrabold gradient-text tracking-tight">AI Under the Hood</h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Product Mastery Guide</p>
          </div>
          
          <div className="p-4 border-b border-slate-100">
            <button 
                onClick={() => setShowMasteryQuiz(true)}
                className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:scale-[1.02] transition-all font-bold text-xs flex items-center justify-center gap-2 group"
            >
                <span className="text-lg group-hover:rotate-12 transition-transform">🏆</span> 
                Take Mastery Quiz
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            {CURRICULUM.map((level) => (
              <div key={level.id} className="mb-8">
                <h3 className="px-3 mb-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Level {level.id}: {level.title}
                </h3>
                <div className="space-y-1">
                  {level.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => handleLessonSelect(level.id, lesson.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-xl transition-all duration-200 group ${
                        currentLessonId === lesson.id 
                        ? 'bg-indigo-50 text-indigo-600 font-bold shadow-sm translate-x-1' 
                        : 'text-slate-500 hover:bg-slate-50 hover:translate-x-1'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${currentLessonId === lesson.id ? 'bg-indigo-600 scale-150' : 'bg-slate-200 group-hover:bg-slate-300'}`} />
                      <span className="truncate">{lesson.title}</span>
                      {currentLessonId === lesson.id && (
                        <span className="ml-auto text-xs animate-pulse">👉</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-slate-50 relative">
        {/* Top Header / Progress */}
        <header className="sticky top-0 z-40 h-16 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 flex items-center justify-between transition-all duration-300">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-slate-100 rounded-lg lg:hidden transition-colors"
            >
              <span className="text-xl">☰</span>
            </button>
            <div className="hidden sm:block h-2 w-48 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700 ease-out relative" 
                style={{ width: `${((currentIndex + 1) / allLessons.length) * 100}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-[shimmer_2s_infinite]" />
              </div>
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              {Math.round(((currentIndex + 1) / allLessons.length) * 100)}% Complete
            </span>
          </div>
          
          <div className="flex items-center gap-3">
             <button 
              onClick={goToPrevLesson}
              disabled={currentIndex === 0}
              className="p-2 text-slate-400 hover:text-indigo-600 disabled:opacity-30 transition-all hover:-translate-x-1"
             >
               <span className="text-2xl">←</span>
             </button>
             <button 
              onClick={goToNextLesson}
              disabled={currentIndex === allLessons.length - 1}
              className="group flex items-center gap-2 px-5 py-2 bg-slate-900 text-white text-xs font-bold rounded-full hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-500/20 disabled:opacity-30 hover:-translate-y-0.5 active:translate-y-0"
             >
               <span>Next Discovery</span>
               <span className="group-hover:translate-x-1 transition-transform">→</span>
             </button>
          </div>
        </header>

        {/* Content Body */}
        <div id="main-content" className="flex-1 overflow-y-auto px-6 py-8 custom-scrollbar scroll-smooth">
          <div key={currentLessonId} className="max-w-4xl mx-auto space-y-8 animate-enter">
            {/* Lesson Header */}
            <div className="text-center space-y-4">
              <div className="inline-block animate-float">
                <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm ring-1 ring-indigo-100">
                    {currentLevel.title}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {currentLesson.title}
              </h1>
              <p className="text-base sm:text-xl text-slate-500 font-medium max-w-2xl mx-auto">
                {currentLesson.subtitle}
              </p>
            </div>

            {/* Interaction Controls */}
            <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto">
              <button 
                onClick={() => setIsAnimating(!isAnimating)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-sm hover:-translate-y-0.5 active:scale-95 ${isAnimating ? 'bg-indigo-600 text-white shadow-indigo-200' : 'bg-white text-slate-700 border border-slate-200 hover:border-indigo-300'}`}
              >
                <span className={`text-lg ${isAnimating ? 'animate-spin' : ''}`}>{isAnimating ? '⚙️' : '▶️'}</span>
                {isAnimating ? 'Running...' : 'Start Simulation'}
              </button>
              
              <button 
                onClick={() => setShowEli5(!showEli5)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-sm hover:-translate-y-0.5 active:scale-95 ${showEli5 ? 'bg-amber-500 text-white shadow-amber-200' : 'bg-white text-slate-700 border border-slate-200 hover:border-amber-300'}`}
              >
                <span className="text-lg">🧸</span>
                {showEli5 ? 'Simple Mode On' : 'Explain Like I\'m 5'}
              </button>

              <button 
                onClick={() => setShowAnalogy(!showAnalogy)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-sm hover:-translate-y-0.5 active:scale-95 ${showAnalogy ? 'bg-purple-600 text-white shadow-purple-200' : 'bg-white text-slate-700 border border-slate-200 hover:border-purple-300'}`}
              >
                <span className="text-lg">💡</span>
                {showAnalogy ? 'Analogy Visible' : 'Real-Life Analogy'}
              </button>
            </div>

            {/* Visualizer Card */}
            <div className="relative group max-w-3xl mx-auto perspective-1000">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse"></div>
              <div className="relative bg-white border border-slate-200 rounded-[2rem] shadow-2xl overflow-hidden p-4 sm:p-6 transform transition-transform duration-500 hover:scale-[1.01]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
                    <div className={`w-2 h-2 rounded-full ${isAnimating ? 'bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]' : 'bg-slate-300'}`} />
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Interactive Lab</span>
                  </div>
                </div>
                
                <div className="bg-slate-50/50 rounded-2xl min-h-[220px] sm:min-h-[280px] flex items-center justify-center overflow-hidden border border-slate-100 relative">
                  {/* Grid Background */}
                  <div className="absolute inset-0 opacity-[0.03]" 
                       style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
                  />
                  <div className="relative z-10 w-full p-4 flex justify-center">
                    {renderVisual()}
                  </div>
                </div>
              </div>
            </div>

            {/* Concept Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               <div className="lg:col-span-2 space-y-6">
                  {/* ELI5 Content */}
                  {showEli5 && (
                    <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-8 shadow-sm animate-enter relative overflow-hidden transform transition-all hover:scale-[1.02]">
                      <div className="absolute -top-6 -right-6 text-8xl opacity-10 rotate-12">🧸</div>
                      <h5 className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"/> Simplified
                      </h5>
                      <p className="text-base text-amber-900 leading-relaxed font-bold italic">
                        "{currentLesson.eli5}"
                      </p>
                    </div>
                  )}

                  {/* Analogy Content */}
                  {showAnalogy && (
                    <div className="bg-purple-50 border-2 border-purple-200 rounded-3xl p-8 shadow-sm animate-enter relative overflow-hidden transform transition-all hover:scale-[1.02]">
                      <div className="absolute -top-6 -right-6 text-8xl opacity-10 rotate-12">💡</div>
                      <h5 className="text-[10px] font-black text-purple-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                         <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping"/> Mental Model
                      </h5>
                      <h6 className="text-base font-black text-purple-900 mb-2 uppercase tracking-tight">{currentLesson.analogy.title}</h6>
                      <p className="text-sm text-purple-800 leading-relaxed font-medium">
                        {currentLesson.analogy.description}
                      </p>
                    </div>
                  )}

                  <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h4 className="text-xs font-bold text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-widest">
                       <span className="text-xl">📖</span> Core Concepts
                    </h4>
                    <ul className="space-y-4">
                      {currentLesson.shortDescription.map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start group">
                          <span className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-600 text-[10px] font-bold flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                            {idx + 1}
                          </span>
                          <p className="text-sm text-slate-700 leading-relaxed font-medium group-hover:text-slate-900 transition-colors">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
               </div>

               {/* Quiz Sidebar */}
               <div className="space-y-6">
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-2 mb-4">
                       <span className="text-xl animate-bounce">🧠</span>
                       <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Quick Check</h4>
                    </div>
                    <p className="text-sm font-bold text-slate-700 leading-snug mb-6">
                      {currentLesson.quiz.question}
                    </p>
                    <div className="space-y-3">
                      {currentLesson.quiz.options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleQuizSubmit(idx)}
                          disabled={quizAnswered !== null}
                          className={`w-full p-4 rounded-xl text-[11px] text-left font-bold transition-all border-2 relative overflow-hidden group ${
                            selectedOptionIndex === idx
                              ? (option.isCorrect 
                                  ? 'bg-emerald-50 border-emerald-500 text-emerald-700 shadow-md scale-[1.02]' 
                                  : 'bg-rose-50 border-rose-500 text-rose-700 shadow-md scale-[1.02]')
                              : (quizAnswered !== null && option.isCorrect 
                                  ? 'bg-emerald-50 border-emerald-500 text-emerald-700' 
                                  : 'bg-slate-50 border-slate-50 text-slate-500 hover:border-slate-200 hover:bg-white hover:-translate-y-0.5 active:translate-y-0')
                          }`}
                        >
                          <div className="relative z-10 flex justify-between items-center">
                            <span>{option.text}</span>
                            {selectedOptionIndex === idx && (
                                <span className="text-lg">{option.isCorrect ? '🎉' : '❌'}</span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                    {quizAnswered !== null && (
                      <div className="mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 animate-enter">
                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Insight</p>
                        <p className="text-[11px] text-slate-600 leading-relaxed font-medium italic">{currentLesson.quiz.explanation}</p>
                      </div>
                    )}
                  </div>

                  {/* Memory Anchor */}
                  <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group shadow-xl">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/30 transition-colors duration-500" />
                     <p className="text-[9px] font-bold text-indigo-400 uppercase tracking-[0.2em] mb-3 relative z-10">Key Takeaway</p>
                     <p className="text-base font-black leading-tight tracking-tight relative z-10">
                        {currentLesson.takeaway}
                     </p>
                  </div>
               </div>
            </div>

            {/* Footer Navigation */}
            <div className="pt-12 pb-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-2xl shadow-sm animate-float">✨</div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1.5">You've Mastered</p>
                    <p className="text-sm font-bold text-slate-900 leading-none">{currentLesson.title}</p>
                  </div>
               </div>
               
               {currentIndex < allLessons.length - 1 ? (
                 <button 
                  onClick={goToNextLesson}
                  className="group w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm hover:bg-indigo-600 transition-all hover:-translate-y-1 shadow-xl hover:shadow-indigo-500/30 active:translate-y-0 active:scale-95 flex items-center justify-center gap-2"
                 >
                   <span>Unlock Next Lesson</span>
                   <span className="group-hover:translate-x-1 transition-transform">→</span>
                 </button>
               ) : (
                 <div className="px-8 py-4 bg-emerald-500 text-white rounded-2xl font-black text-sm shadow-xl animate-bounce">
                   Course Completed! 🎉
                 </div>
               )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;