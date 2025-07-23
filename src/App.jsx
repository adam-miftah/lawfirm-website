import { lazy, Suspense } from 'react'; 
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import ScrollToTop from './components/ScrollToTop';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const Services = lazy(() => import('./components/Services'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const ArticleDetailPage = lazy(() => import('./pages/ArticleDetailPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const TagPage = lazy(() => import('./pages/TagPage'));
const LocationServicePage = lazy(() => import('./pages/LocationServicePage'));

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={
        <div className="min-h-screen bg-zinc-800"></div> 
      }>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="jasa-hukum" element={<Services isPage={true} />} />
            <Route path="jasa-hukum/:slug" element={<LocationServicePage />} />
            <Route path="tentang-kami" element={<AboutPage />} />
            <Route path="artikel" element={<ArticlePage />} />
            <Route path="artikel/:slug" element={<ArticleDetailPage />} />
            <Route path="tag/:tagName" element={<TagPage />} /> 
            <Route path="kontak" element={<ContactPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;