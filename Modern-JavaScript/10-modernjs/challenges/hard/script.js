

const color = () => {
    const red = () => {
      document.querySelector('.background').style['background-color'] = 'red';
    };

    const white = () => {
      document.querySelector('.background').style['background-color'] = 'white';
    };

    document.querySelector('.red').addEventListener('click', red);
    document.querySelector('.white').addEventListener('click', white);
  };

  color();