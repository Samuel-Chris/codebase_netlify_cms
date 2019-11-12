// /**
//  * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/ssr-apis/
//  */

// // You can delete this file if you're not using it
// 'use strict';

// var _react = require('react');

// var _react2 = _interopRequireDefault(_react);

// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// exports.onRenderBody = function (_ref, pluginOptions) {
//   var setPostBodyComponents = _ref.setPostBodyComponents;

//   if (process.env.NODE_ENV === 'production') {
//     return setPostBodyComponents([
//     _react2.default.createElement('script', {
//       key: 'gatsby-plugin-facebook-pixel',
//       dangerouslySetInnerHTML: {
//         __html: '\n  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;\n  n.push=n;n.loaded=!0;n.version=\'2.0\';n.queue=[];t=b.createElement(e);t.async=!0;\n  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,\n  document,\'script\',\'https://connect.facebook.net/en_US/fbevents.js\');\n  fbq(\'init\', \'' + '407626136581094' + '\'); // Insert your pixel ID here.\n  fbq(\'track\', \'PageView\');\n      '
//       }
//     }),
//     _react["default"].createElement("script", {
//         key: "gatsby-plugin-purechat",
//         type: "text/javascript",
//         "data-cfasync": "false",
//         dangerouslySetInnerHTML: {
//           __html: "window.purechatApi = { l: [], t: [], on: function () { this.l.push(arguments); } }; (function () { var done = false; var script = document.createElement('script'); script.async = true; script.type = 'text/javascript'; script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript'; document.getElementsByTagName('HEAD').item(0).appendChild(script); script.onreadystatechange = script.onload = function (e) { if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) { var w = new PCWidget({c: '" + websiteId + "', f: true }); done = true; } }; })();"
//         }
//       })
// ]);
//   }
// };