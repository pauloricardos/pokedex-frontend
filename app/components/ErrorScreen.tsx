export const ErrorScreen = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white border rounded shadow-lg">
        <h2 className="text-4xl font-bold text-red-500 mb-4">Oops!</h2>
        <p className="text-gray-700 text-lg mb-6">
          Something went wrong when trying to load the pokemons.
        </p>
      </div>
    </div>
  );
};
