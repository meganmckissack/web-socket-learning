
      const socket = io.connect('http://localhost:8000');
      socket.on('connect', () => {
        socket.send('client connected'); //logs in vscode console and not the chrome/web console
      });

      //"emits" event when button is pressed
      // document.getElementById('tapButton')
      //   .addEventListener('click', () => {
      //     socket.emit('press');
      // });

      // socket.on('pressResponse', () => {
      //   console.log('the server picked up a button press');
      // });
      // socket.on('myPress', () => {
      //   console.log('the press came from here');
      // });
      // socket.on('notMyPress', () => {
      //   console.log('the press came from somewhere else');
      // });
     
      //event listener to detect clicks from anywhere on a page and send the coordinates to the sever
      document.addEventListener('click', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        socket.emit('tap', { x, y });
     });
     




      // const socket = new WebSocket('ws://localhost:8000');

      // //event listener to detect socket changes
      // socket.addEventListener('open', () => {
      //   socket.send('client connected');
      // })
