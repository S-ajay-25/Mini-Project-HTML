import React,{useEffect} from 'react'
function ComputerVision() {
  useEffect(() => {
    const subscriptionKey = "<your-subscription-key>";
    const endpoint = "<your-endpoint>";
    const computerVisionClient = new ComputerVisionClient(
      new CognitiveServicesCredentials(subscriptionKey),
      endpoint
    );

    async function analyzeImage() {
      try {
        console.log("-------------------------------------------------");
        console.log("DETECT TAGS");
        console.log();

        const tagsURL =
          "https://moderatorsampleimages.blob.core.windows.net/samples/sample16.png";

        console.log("Analyzing tags in image...", tagsURL.split("/").pop());
        const tags = (
          await computerVisionClient.analyzeImage(tagsURL, {
            visualFeatures: ["Tags"]
          })
        ).tags;
        console.log(`Tags: ${formatTags(tags)}`);

        function formatTags(tags) {
          return tags
            .map((tag) => `${tag.name} (${tag.confidence.toFixed(2)})`)
            .join(", ");
        }

        console.log();
        console.log("-------------------------------------------------");
        console.log("End of quickstart.");
      } catch (error) {
        console.log(error);
      }
    }

    analyzeImage();
  }, []);

  return (
    <div>
      <h1>Computer Vision</h1>
    </div>
  );
}

export default ComputerVision;