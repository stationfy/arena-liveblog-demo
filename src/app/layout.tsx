import "./globals.css";

export const metadata = {
  title: "Arena Liveblog Demo",
  description: "Demo Page for Arena Liveblog",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let data = await getData();
  const jsonLDs = data.split('</script><script type="application/ld+json">');

  const jsonLDsFormatted = jsonLDs.map((jsonLD) => {
    jsonLD = jsonLD.replaceAll('<script type="application/ld+json">', "");
    jsonLD = jsonLD.replaceAll("</script>", "");
    return jsonLD;
  });

  return (
    <html lang="en">
      <body>
        {children}
        {jsonLDsFormatted.map((jsonLD, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLD }}
          />
        ))}
      </body>
    </html>
  );
}

async function getData() {
  // Fetch data from external API
  const res = await fetch(
    `https://cached-api.arena.im/v1/liveblog/cesar/vxx5EHn/ldjson`
  );

  return res.text();
}
