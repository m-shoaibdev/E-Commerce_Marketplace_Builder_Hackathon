export default function ErrorMessage({ message }: { message: string }) {
  if (!navigator.onLine) {
    return (
      <div
        className="p-4 mb-4 text-sm w-full break-words  text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <span className="font-medium">Something went wrong: </span>
        No internet connection. Please check your network.
      </div>
    );
  }
  return (
    <div
      className="p-4 mb-4 text-sm w-full break-words  text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      <span className="font-medium">Something went wrong: </span>
      {message}
    </div>
  );
}
