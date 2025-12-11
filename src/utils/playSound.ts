const playSound = (url: string) => {
  const audio = new Audio(url);

  audio.play().catch((error) => {
    console.log(error);
  });
};

export default playSound;
