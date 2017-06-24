/* eslint-disable prefer-template, max-len */

const getDeferScript = src => (src ? `<script defer src="${src}"></script>` : '');

export default vo => `

<!DOCTYPE html>
<html lang="en">

  <head>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta charSet='utf-8' />
    <meta httpEquiv="Content-Language" content="en" />
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link id="favicon" rel="shortcut icon" href="/favicon.png" sizes="16x16 32x32" type="image/png" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css"/>
    <link href="./node_modules/mdi/css/materialdesignicons.min.css" media="all" rel="stylesheet" type="text/css" />

    ${vo.mainCSSBundle ? '<link rel="stylesheet" type="text/css" href="' + vo.mainCSSBundle + '">' : ''}

    <script>
      window.MAPS_READY = false;
      window.initMaps = function() {
        window.MAPS_READY = true;
      }
    </script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQrxIkyh3pIvjnI8m_LPClRsjCCHp9ypA&callback=initMaps">
    </script>

    <title>Universal React Starter Kyt</title>
  </head>

  <body>
    <div id="root"><div>${vo.root}</div></div>
    ${getDeferScript(vo.manifestJSBundle)}
    ${getDeferScript(vo.vendorJSBundle)}
    ${getDeferScript(vo.mainJSBundle)}
  </body>

</html>

`;
