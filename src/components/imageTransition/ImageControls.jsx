export function ImageControls({ data, handleChange }) {
    return (
        <>
            {data && data.length > 0 && data.map(item => {
                return (
                    <div key={item._id} onClick={() => handleChange(item.url)} className={`box-item ${item.position}`}>
                        <img src={item.icon} alt={item.alt} className='img' />
                    </div>
                )
            })}
        </>
    )
}

