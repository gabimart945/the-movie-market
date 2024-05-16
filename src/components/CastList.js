import {CastCard} from "./CastCard";
import {HorizontalList} from "./HorizontalList";


export const CastList = ({cast}) => {

    return (
        <HorizontalList maxItems={8} rotate={false}>
            {cast.map((data, index) => (
                <CastCard
                    key={index}
                    data={data}
                />
            ))}
        </HorizontalList>
    )

}