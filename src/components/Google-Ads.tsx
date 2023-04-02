import React, { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle?: {
      push?: () => void;
    }[];
  }
}

type GoogleAdsProps = {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
};

const GoogleAds: React.FC<GoogleAdsProps> = ({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
}) => {
  useEffect(() => {
    if (window && window.adsbygoogle && process.env.NODE_ENV === 'production') {
      window.adsbygoogle.push({});
    }
  }, []);


  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-1234567890"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive}
    />
  );
};

export default GoogleAds;
