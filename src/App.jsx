import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import Services from './components/Services'; 
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ContactPage from './pages/ContactPage';
import SEO from './components/SEO';
import ScrollToTop from './components/ScrollToTop';
import LocationServicePage from './pages/LocationServicePage';
import TagPage from './pages/TagPage';

function App() {

  return (
    <>
      <SEO />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="jasa-hukum" element={<Services isPage={true} />} />
          <Route path="jasa-hukum/:slug" element={<LocationServicePage />} />
          <Route path="tentang-kami" element={<AboutPage />} />
          <Route path="artikel" element={<ArticlePage />} />
          <Route path="artikel/:slug" element={<ArticleDetailPage />} />
          <Route path=":slug" element={<ArticleDetailPage />} />
           <Route path="tag/:tagName" element={<TagPage />} /> 
          <Route path="kontak" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;