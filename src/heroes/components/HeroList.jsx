import { getHeroByPublisher } from "../helpers"
import { PropTypes } from "prop-types";
import { HeroCard } from "./HeroCard";


export const HeroList = ({ publisher }) => {

    const heroes = getHeroByPublisher(publisher);
    return (

        <>

            <div className="row rows-cols-1 row-cols-md-3 g-3">

                {
                    heroes.map(
                        heroe => (
                            <HeroCard
                                key={heroe.id}
                                {...heroe}
                            />
                        )


                    )
                }

            </div>


        </>
    )
}

HeroList.propTypes = {
    publisher: PropTypes.string.isRequired

}



