const GetIconImage = async (icon) => {
  try {
    const img = await fetch(`https://openweathermap.org/img/wn/${icon}@2x.png`);
    return img.url;
  } catch (err) {
    alert(err.message);
    return '#';
  }
};

export default GetIconImage;
