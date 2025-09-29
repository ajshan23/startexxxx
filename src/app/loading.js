// app/loading.js
export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#ff8227]" />
    </div>
  )
}