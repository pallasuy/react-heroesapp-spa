import { useLocation, useNavigate } from 'react-router';
import { useForm } from '../../hooks';
import { HeroCard } from '../components/';
import queryString from 'query-string'
import { getHeroesByName } from '../helpers';
export const Search = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);


    const heroes = getHeroesByName(q);


    const showSearch = (q.length === 0);
    const showError = !showSearch && heroes.length === 0;

    const { searchText, onInputChange } = useForm({
        searchText: q

    });

    const onSearchSubmit = (event) => {
        event.preventDefault();
        const lower = searchText.trim().toLowerCase();
        /*    if (lower.length <= 0) return; */


        navigate(`?q=${lower}`);

    }

    return (
        <>
            <h1>Search</h1>
            <hr />
            <div className="row">

                <div className="col-4">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit} >
                        <input
                            className='form-control'
                            type='text'
                            placeholder='Search a Hero'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className='btn btn-outline-primary mt-1'>
                            Buscar
                        </button>

                    </form>

                </div>

                <div className="col-8">
                    <h4>Result</h4>
                    <hr />


                    {

                        showSearch ? <div className='alert alert-primary animate__animated animate__fadeIn'>Search a hero</div>
                            : (showError ? (heroes.length === 0) && <div className='alert alert-danger animate__animated animate__fadeIn'> No hero with <b> {q}</b> </div> : '')

                    }






                    {
                        heroes.map(
                            hero => (
                                <HeroCard key={hero.id} {...hero} />
                            )
                        )

                    }



                </div>

            </div>


        </>

    )
}
