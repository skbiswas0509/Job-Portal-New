import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const JobListing = () => {
    const {isSearched, seachFilter} = useContext(AppContext)

  return (
    <div>

        {/* Sidebar */}
        <div>
            {/* Search filter from hero component */}
            {
                isSearched && ( seachFilter.title !== "" || seachFilter.location !== "") && (
                    <>
                        <h3>Current Search</h3>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default JobListing