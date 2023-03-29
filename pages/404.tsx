import React from "react";

function ErrorPage() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <h1 className="text-white font-bold text-2xl text-center">
        Sorry, we can&apos;t find that page!
      </h1>
      <p className="text-white font-bold text-lg text-center">
        Don&apos;t worry though, everything is STILL AWESOME
      </p>
    </div>
  );
}

export default ErrorPage;
