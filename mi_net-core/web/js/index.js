
window.addEventListener('message', async ({ data }) => {
  switch(data.action) {
      case 'open':
          app.opened = true;
          break;
      case 'close':
          app.opened = false;
          break;
  }
});

window.addEventListener('keydown', async ({ key }) => {
  let which = key.toLowerCase();

  if (which == 'escape')
      return await app.post('close');
});