const images = [
  "https://picsum.photos/id/1/800/600",
  "https://picsum.photos/id/10/800/600",
  "https://picsum.photos/id/20/800/600",
  "https://picsum.photos/id/30/800/600",
  "https://picsum.photos/id/40/800/600",
  "https://picsum.photos/id/50/800/600",
  "https://picsum.photos/id/60/800/600",
  "https://picsum.photos/id/70/800/600",
  "https://picsum.photos/id/80/800/600",
  "https://picsum.photos/id/90/800/600",
];

const Main = function () {
  return (
    <div>
      {images.map((img) => (
        <img src={img} style={innerWidth:100px} />
      ))}
    </div>
  );
};

export default Main;
