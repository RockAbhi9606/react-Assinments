const ShimmerCards = () => {
  return (
    <>
      {
        Array.from({ length: 20 }).map((el, i) => {
          return (
            <div key={i} className="max-w-[280px] h-[340px] bg-gray-300 rounded-md animate-blink-animation" data-testid="shimmer-element"></div>
          )
        })
      }
    </>
  )
}

export default ShimmerCards