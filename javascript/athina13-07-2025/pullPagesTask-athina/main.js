// old way fetch function
// function loadPage(page) {
//   fetch(page)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Page not found');
//       }
//       return response.text();
//     })
//     .then(html => {
//       document.getElementById('content').innerHTML = html;
//       history.pushState({ page }, '', `#${page}`);
//     })
//     .catch(error => {
//       document.getElementById('content').innerHTML = '<h2>404 - Page not found</h2>';
//       console.error(error);
//     });
// }

// initial page based on hash
// window.addEventListener('load', () => {
//   const hash = window.location.hash.replace('#', '') || 'home.html';
//   loadPage(hash);
// });

// // Handle browser back/forward
// window.onpopstate = function(event) {
//   if (event.state && event.state.page) {
//     loadPage(event.state.page);
//   }
// };
// ----------------------------------------------------------------------------
// async await
// async function loadPage(page) {
//   try {
//     const response = await fetch(page);
//     if (!response.ok) {
//       throw new Error(`Page not found: ${response.status}`);
//     }

//     const html = await response.text();
//     document.getElementById('content').innerHTML = html;
//     history.pushState({ page }, '', `#${page}`);
//   } catch (error) {
//     document.getElementById('content').innerHTML = '<h2>404 - Page not found</h2>';
//     console.error('Error loading page:', error);
//   }
// }

// // initial page based on hash
// window.addEventListener('load', () => {
//   const hash = window.location.hash.replace('#', '') || 'home.html';
//   loadPage(hash);
// });

// // handle browser back/forward
// window.onpopstate = function (event) {
//   if (event.state && event.state.page) {
//     loadPage(event.state.page);
//   }
// };
// ------------------------------------------------------------------------------------
// without.html
// Map route names to actual file names
const routes = {
  home: 'home.html',
  about: 'about.html',
  contact: 'contact.html',
  url:'https://quickxpertinfotech.com/'
};



async function loadPage(route) {
  const page = routes[route] || 'home.html'; // default fallback

  if (route === 'url') {
    window.open(page, '_blank'); // open in new tab
    return;
  }

  try {
    const response = await fetch(page);
    if (!response.ok) throw new Error(`Page not found: ${response.status}`);

    const html = await response.text();
    document.getElementById('content').innerHTML = html;
    history.pushState({ route }, '', `#${route}`);
  } catch (error) {
    document.getElementById('content').innerHTML = '<h2>404 - Page not found</h2>';
    console.error('Error loading page:', error);
  }
}

// Load initial page
window.addEventListener('load', () => {
  const hash = window.location.hash.replace('#', '') || 'home';
  loadPage(hash);
});

// Handle back/forward
window.onpopstate = function (event) {
  if (event.state && event.state.route) {
    loadPage(event.state.route);
  }
};


