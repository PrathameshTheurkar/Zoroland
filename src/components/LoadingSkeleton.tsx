const LoadingSkeleton = () => {
    return <>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(index => 
        <div key={index} className="rounded-lg bg-white/10 animate-pulse duration-200 hover:scale-105 w-48 h-80"/>
    )}
    </>
}

export default LoadingSkeleton;                                 
