import '../styles/CastCard.css'

export const CastCard = ({data}) => {


    return (
        <div className='cast-card'>
            <div className='cast-card__image'><img src={data.image} alt={data.name}/>
        </div>
    <p>{data.name}</p>
</div>
    );
}