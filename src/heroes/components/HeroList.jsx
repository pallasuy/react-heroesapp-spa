import { getHeroByPublisher } from "../helpers"
import { PropTypes } from "prop-types";


export const HeroList = ({ publisher }) => {

    const heroes = getHeroByPublisher(publisher);
    return (

        <>
            <ul>
                {
                    heroes.map(
                        heroe => {
                            return <li key={heroe.id}> {heroe.superhero}</li>
                        }
                    )
                }

            </ul>

        </>
    )
}

HeroList.propTypes = {
    publisher: PropTypes.string.isRequired 

}



