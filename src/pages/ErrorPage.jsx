export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold text-black">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">Oops! Page not found</h2>
      <p className="text-gray-600 mt-2">
        The page you are looking for might have been removed or does not exist.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-[#5e849a] text-white text-lg font-medium rounded-lg shadow-md hover:bg-[#8db5cc] transition duration-300"
      >
        Return to Home
      </a>
    </div>
  );
}