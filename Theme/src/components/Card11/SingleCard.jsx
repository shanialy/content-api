
import PageSingleTemp3 from '../../containers/PageSingle/PageSingleTemp3'
import store from './store'
import { Provider ,useSelector} from 'react-redux'


const SingleCard = ()=>{

    
   const cvalue =  useSelector(state => state.cvalue)

     console.log(cvalue)
   
    return(
        <>
        <Provider store={store}>
         <PageSingleTemp3/>
        </Provider>
            {/* PErfect to use  it has data in center*/}
            
        </>
    )
}

export default SingleCard