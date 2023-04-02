import React, { useEffect } from 'react'
import styled from 'styled-components';

declare global {
  interface Window {
    adsbygoogle?: {
      push?: () => void;
    }[];
  }
}

type GoogleAdsProps = {
  adSlot: string | number;
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
    <AdsContainer>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-1234567890"
            data-ad-slot={adSlot}
            data-ad-format={adFormat}
            data-full-width-responsive={fullWidthResponsive}
    />
    </AdsContainer>
  );
};

export default GoogleAds;

const AdsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;

`;
