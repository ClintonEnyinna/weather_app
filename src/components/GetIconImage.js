const GetIconImage = async (icon) => {
  const img = await fetch(`http://openweathermap.org/img/wn/${icon}@2x.png`);
  return img.url;
};

export default GetIconImage;
