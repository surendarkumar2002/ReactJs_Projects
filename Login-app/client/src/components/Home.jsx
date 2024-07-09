const Home = () => {
  return (
    <div className="bg-light d-flex justify-content-center align-items-center vh-100">
      <div className="card text-center">
        <div className="card-body">
          <div className="display-1 text-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="currentColor"
              className="bi bi-check-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm0-1A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm3.97-9.03a.75.75 0 1 0-1.06-1.06L7.5 8.94 5.854 7.293a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l4-4z" />
            </svg>
          </div>
          <h1 className="card-title mt-3">Login Successful</h1>
          <a href="/" className="btn btn-primary mt-3">
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
