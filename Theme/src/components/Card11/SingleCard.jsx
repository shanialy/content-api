
import { cardSuccess } from '../../app/cardValue/cardSlice'
import PageSingleTemp3 from '../../containers/PageSingle/PageSingleTemp3'



const SingleCard = ()=>{
    
    return(
        <>
         <PageSingleTemp3/>      
        </>
    )
}

export default SingleCard

export const cardLoadingData = async(dispatch , cardValue)=>{
    try{
        dispatch(cardSuccess(cardValue))
    }catch(err){
      console.log(err)
    }
}