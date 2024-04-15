const mockUrls = [
  "https://utfs.io/f/ef638675-3f3a-479d-b3bb-c91b1356fad5-ajf943.jpg",
  "https://utfs.io/f/ddb2549f-153c-443d-b1a2-4b16aad0c1f3-47z1ax.jpg",
  "https://utfs.io/f/fda05283-85e4-48be-9f6f-360f40b72965-m4u0s4.jpg",
  "https://utfs.io/f/4fe46543-3648-43ac-a41a-b5ccdc06a3af-g5fngt.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
