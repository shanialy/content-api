import Pagination from "react-pagination-js";
import {  useSearchkit } from '@searchkit/client'
import "react-pagination-js/dist/styles.css";
import "./style.css"

const CustomPagination = ({data})=>{
    const api = useSearchkit()

    const topButton = ()=>{

        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })

    }


    return (
      <div >

       
        <Pagination


  
  currentPage={data?.hits.page.pageNumber+1}

  onClick={topButton()}

  totalSize={data?.hits.page.total}

  sizePerPage={data?.hits.page.size}

  changeCurrentPage={(currentPage) => {
    // var currentPaget=currentPage-1
    var sum=(currentPage * data?.hits.page.size)-20
    api.setPage({ size: data?.hits.page.size, from:sum  })
    api.search()
  }}

  theme="bootstrap"

/>
  
      </div>
    )
}


export default CustomPagination