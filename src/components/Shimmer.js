const Shimmer=()=>{
    return (
        <div className="restaurant-list">
            {
                Array(10)
                .fill("")
                .map((e,idx)=>{
                    return <div key={idx} className="shimmer-card animate"></div>
                })
            }
        </div>
    )
}

export default Shimmer;