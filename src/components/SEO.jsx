import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
  const defaultTitle = 'Jasa Pengacara Perceraian jakarta, bogor, depok, tangerang, bekasi - Lawfirm AKB & CO';
  const defaultDescription = 'Lawfirm AKB & CO menyediakan jasa pengacara perceraian profesional di Jakarta untuk hak asuh anak, harta gono-gini, pidana, dan lainnya.';

  const pageTitle = title ? `${title} - Lawfirm AKB & CO` : defaultTitle;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
    </Helmet>
  );
};

export default SEO;