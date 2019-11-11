/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react";
export function onRenderBody(
  { setHeadComponents, setPreBodyComponents, setPostBodyComponents }) {
setHeadComponents([
     <script
     dangerouslySetInnerHTML={{
        __html: `
        window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
        ga('create', 'UA-141693263-1', 'auto');
        ga('send', 'pageview');
   	 `
     }}
     />,
     <script async src='https://www.google-analytics.com/analytics.js'/>,
     <script
     dangerouslySetInnerHTML={{
        __html: `
        (function(h,o,t,j,a,r){
            h.hj=h.hjfunction(){(h.hj.q=h.hj.q[]).push(arguments)};
            h._hjSettings={hjid:1381054,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-%27,%27.js?sv=%27);
   	 `
     }}
     />,
     <script
     dangerouslySetInnerHTML={{
        __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js%27);
        fbq('init', '407626136581094');
        fbq('track', 'PageView');
   	 `
     }}
     />,

]);

}