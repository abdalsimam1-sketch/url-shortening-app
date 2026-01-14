export const shortenUrl = async (url) => {
  const response = await fetch("https://cleanuri.com/api/v1/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ url }),
  });
  const data = await response.json();
  console.log(data);
  if (!response.ok || !data.result_url) {
    throw new Error("Failed to shorten URL");
  }
  return data.result_url;
};
