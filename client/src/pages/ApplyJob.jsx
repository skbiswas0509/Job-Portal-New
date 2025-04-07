import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import kconvert from 'k-convert'
import moment from 'moment'


const ApplyJob = () => {

  const { id } = useParams()

  const [jobData, setJobData] = useState(null)

  const { jobs } =useContext(AppContext)

  const fetchJob = async () => {
    const data = jobs.filter(job => job._id === id)
    if(data.length !== 0){
      setJobData(data[0])
      console.log(data[0])
    } 
  }

  useEffect(()=>{
    if(jobs.length > 0){
      fetchJob()
    }
  },[id,jobs])

  return jobData ? (
    <>
      <Navbar />

      <div className='min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto'>
        <div>
          <div>
            <div>
              <img src={jobData.companyId.image} alt="" />
              <div>
                <h1>{jobData.title}</h1>
                <div>
                  <span>
                    <img src={assets.suitcase_icon} alt="" />
                    {jobData.companyId.name}
                  </span>
                  <span>
                    <img src={assets.location_icon} alt="" />
                    {jobData.location}
                  </span>
                  <span>
                    <img src={assets.person_icon} alt="" />
                    {jobData.level}
                  </span>
                  <span>
                    <img src={assets.money_icon} alt="" />
                    CTC: {kconvert.convertTo(jobData.salary)}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <button>Apply Now</button>
              <p>Posted {moment(jobData.date).fromNow()}</p>
            </div>
          </div>
        </div>
      </div>

    </>
  ) : (
    <Loading/>
  )
}

export default ApplyJob