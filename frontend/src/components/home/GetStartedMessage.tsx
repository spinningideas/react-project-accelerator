const GetStartedMessage = ({
  displayGetStarted,
  message,
}: {
  displayGetStarted: boolean;
  message: string;
}) => {
  if (!displayGetStarted) return null;

  return (
    <div className="w-full">
      <p id="get-started-message" className="text-muted-foreground">
        {message}
      </p>
    </div>
  );
};

export default GetStartedMessage;
