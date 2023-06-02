async function startServers() {
    try {
      const angularPath = path.join(__dirname, 'bakalarka'); // Path to the Angular project
      const serverPath = path.join(__dirname, 'server', 'server.js'); // Path to the server.js file
  
      // Change directory to the Angular project
      process.chdir(angularPath);
  
      await concurrently([
        { command: `node ${serverPath}`, name: 'server', prefixColor: 'bgBlue.bold' },
        { command: 'ng serve', name: 'angular', prefixColor: 'bgMagenta.bold' }
      ]);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }