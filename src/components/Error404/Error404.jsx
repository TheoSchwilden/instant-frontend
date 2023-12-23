function Error404() {
  return (
    <div className="h-[calc(100vh-137px)] flex flex-col overflow-hidden justify-center items-center">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              ERROR <span className="text-primary">404</span>
            </h1>
            <p className="py-6">
              It seems that the page you are looking for does not exist.
            </p>
            <button className="btn btn-primary">Back to home</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error404;
