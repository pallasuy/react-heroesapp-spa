import { HeroCard } from '../components/';

export const Search = () => {
    return (
        <>
            <h1>Search</h1>
            <hr />
            <div className="row">

                <div className="col-4">
                    <h4>Searching</h4>
                    <hr />
                    <form>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='Search a Hero'
                            name='searchText'
                            autoComplete='off'
                        />
                        <button className='btn btn-outline-primary mt-1'>
                            Buscar
                        </button>

                    </form>

                </div>

                <div className="col-8">
                    <h4>Result</h4>
                    <hr />

                    <div className='alert alert-primary'>
                        Search a hero
                    </div>

                    <div className='alert alert-danger'>
                        No hero with <b>ABC</b>
                    </div>

                    {/* <HeroCard /> */}


                </div>

            </div>


        </>

    )
}
