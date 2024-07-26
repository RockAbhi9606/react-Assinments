function ShimmerMenu() {
  return (
    <div className="max-w-[800px] min-h-[800px] pb-7 mt-12 mx-auto">
      <div className="w-24 h-11 mb-10 rounded-lg shadow-custom bg-gray-300 animate-blink-animation"></div>
      <div className="w-72 rounded-lg animate-blink-animation bg-gray-300 p-4"></div>
      <div className="w-full rounded-lg animate-blink-animation h-52 bg-gray-300 mt-8"></div>
      <div className="w-full h-[800px] bg-gray-300 rounded-lg animate-blink-animation mt-12"></div>
    </div>
  )
}

export default ShimmerMenu