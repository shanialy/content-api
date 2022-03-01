
//import {withRouter} from 'react-router-dom'
import PageSingle from '../../containers/PageSingle/PageSingle'
import PageSingleHasSidebar from '../../containers/PageSingle/PageSingleHasSidebar'
import SingleContent from '../../containers/PageSingle/SingleContent'
import SingleMetaAction2 from '../../containers/PageSingle/SingleMetaAction2'
import SingleTitle from '../../containers/PageSingle/SingleTitle'
import SingleMetaAction from '../../containers/PageSingle/SingleMetaAction'
import SingleHeader from '../../containers/PageSingle/SingleHeader'
import SingleContentDemo from '../../containers/PageSingle/SingleContentDemo'
import PageSingleTemp3Sidebar from '../../containers/PageSingle/PageSingleTemp3Sidebar'
import PageSingleTemp3 from '../../containers/PageSingle/PageSingleTemp3'
import PageSingleTemp2 from '../../containers/PageSingle/PageSingleTemp2'
import PageSingleTemp2Sidebar from '../../containers/PageSingle/PageSingleTemp2Sidebar'
import store from './store'
import { Provider ,useSelector} from 'react-redux'


const SingleCard = ()=>{

    
   const cvalue =  useSelector(state => state.cvalue)
//   //  const {id , titile}  = singlecard
     console.log(cvalue)
     {/* I will use SingleContent ///content in center */}
            {/* <SingleContent/>  */}
            {/* //we will useSingle MetaAction as it has 4 icons and look good */}
            {/* <SingleMetaAction/> */}
            {/* //Going to use it has data in left side */}
            {/* <PageSingleTemp3Sidebar/> */}
       {/* Not using SingleTitle */}
            {/* <SingleTitle/> */}
            {/* Single Meta contains icons twitter facebook and bookmark */}
            {/* Not using Single Meta2 */}
            {/* <SingleMetaAction2/> */}
            {/* <PageSingle/> */}
            {/* <PageSingleHasSidebar/> */}
            {/* //Can be used  no 50 505*/}
            {/* <SingleHeader/> */}
             {/* //Can be  not used */}
            {/* <SingleContentDemo/> */}
            {/* Not going to use this it has data in left side with different image */}
            {/* <PageSingleTemp2Sidebar/> */}
            {/* Can be used it has data in center side with different imag
            <PageSingleTemp2/> */}
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