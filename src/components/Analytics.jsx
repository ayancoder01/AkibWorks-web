import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Analytics({ 
  googleAnalyticsId = "G-XXXXXXXXXX", // Replace with your actual GA4 ID
  facebookPixelId = null, // Optional Facebook Pixel ID
  hotjarId = null // Optional Hotjar ID
}) {
  
  // Google Analytics 4
  const gaScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${googleAnalyticsId}');
  `

  // Facebook Pixel (optional)
  const fbPixelScript = facebookPixelId ? `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${facebookPixelId}');
    fbq('track', 'PageView');
  ` : ''

  // Hotjar (optional)
  const hotjarScript = hotjarId ? `
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${hotjarId},hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  ` : ''

  return (
    <Helmet>
      {/* Google Analytics 4 */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} />
      <script>{gaScript}</script>

      {/* Facebook Pixel */}
      {facebookPixelId && (
        <>
          <script>{fbPixelScript}</script>
          <noscript>
            <img 
              height="1" 
              width="1" 
              style={{display: 'none'}}
              src={`https://www.facebook.com/tr?id=${facebookPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {/* Hotjar */}
      {hotjarId && <script>{hotjarScript}</script>}
    </Helmet>
  )
}

// Analytics event tracking functions
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

export const trackPageView = (pagePath) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: pagePath
    })
  }
}

// Common event tracking helpers
export const trackContactForm = () => {
  trackEvent('contact_form_submit', {
    event_category: 'engagement',
    event_label: 'contact_form'
  })
}

export const trackPortfolioView = (projectName) => {
  trackEvent('portfolio_view', {
    event_category: 'engagement',
    event_label: projectName
  })
}

export const trackServiceInquiry = (serviceName) => {
  trackEvent('service_inquiry', {
    event_category: 'engagement',
    event_label: serviceName
  })
}
