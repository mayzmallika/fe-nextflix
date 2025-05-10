export default function LoadingSpinner() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white gap-4">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>
      <span className="text-lg font-medium tracking-wide">Loading...</span>
    </div>
  );
}
