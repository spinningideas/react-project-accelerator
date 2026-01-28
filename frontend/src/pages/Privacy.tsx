import { APPLICATION_NAME } from "@/constants";

const Privacy = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-muted-foreground">
          {APPLICATION_NAME} respects your privacy. We only use your data to
          provide and improve the service, and we do not sell your personal
          information.
        </p>
        <p className="text-muted-foreground">
          Any searches you perform are processed through our serverless
          infrastructure to query the GitHub API. Search queries are not stored
          permanently, though your search preferences may be saved locally in
          your browser for convenience.
        </p>
        <p className="text-muted-foreground">
          We may collect anonymous usage analytics to improve the service. This
          data does not include personally identifiable information.
        </p>
        <p className="text-muted-foreground">
          For questions about privacy or data handling, contact us through our
          support channels.
        </p>
      </div>
    </main>
  );
};

export default Privacy;
