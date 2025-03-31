type OpenExternalURLType = '_blank' | '_self' | '_parent' | '_top';

const openExternalURL = (
  url: string,
  target: OpenExternalURLType = '_blank',
  features: string = ''
) => {
  const newFeatures = 'noopener,noreferrer' + features;
  window.open(url, target, newFeatures);
};

export default openExternalURL;
