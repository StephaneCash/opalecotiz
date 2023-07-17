import React from 'react'
import Leftbar from '../../components/leftbar/Leftbar';
import Navbar from '../../components/navbar/Navbar';
import "./Dashboard.css";
import {  Button } from '@mui/material';
import Chart from "react-apexcharts";
import { FaChartLine } from "react-icons/fa"
import { FiMoreVertical } from "react-icons/fi"


const Dashboard = () => {

  const options = {
    xaxis: {
      categories: ["0", '0', '0', '0']
    }
  };
  const series = [
    {
      name: "Transactions",
      data: [0, 0, 0, 0]
    },
  ];

  const series1 = [
    {
      name: "Jeunes talents",
      data: [0, 0, 0, 0]
    },
    {
      name: "Participants",
      data: [0, 0, 0, 0]
    },
  ];


  return (
    <>
      <Navbar />
      <div className='mainDashboard'>
        <div className='contentMain'>
          <div className='contentLeftBar'>
            <Leftbar />
          </div>

          <div className='mainData'>
            <div className='lastRapport col-sm-12'>
              <span>Dashboard</span>
              <Button className='btn' variant='contained' >Derniers rapports</Button>
            </div>
            <div className='cards col-sm-12'>
              <div className='col-sm-3'>
                <div className='card todays'>
                  <div className='head'>
                    <span className='title'>Participants par jour</span>
                    <FiMoreVertical />
                  </div>
                  <div className='mainBody'>
                    <span className='number'>0%</span>
                    <FaChartLine color='green' />
                  </div>

                  <div className='footerCard'>
                    <div>
                      <span>Payés</span>
                      <span>0</span>
                    </div>
                    <div>
                      <span>Visités</span>
                      <span>0</span>
                    </div>
                    <div>
                      <span>Pourcentage</span>
                      <span>0%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-sm-3'>
                <div className='card todays'>
                  <div className='head'>
                    <span className='title'>Participants par jour</span>
                    <FiMoreVertical />
                  </div>
                  <div className='mainBody'>
                    <span className='number'>0%</span>
                    <FaChartLine color='green' />
                  </div>

                  <div className='footerCard'>
                    <div>
                      <span>Payés</span>
                      <span>0</span>
                    </div>
                    <div>
                      <span>Visités</span>
                      <span>10</span>
                    </div>
                    <div>
                      <span>Pourcentage</span>
                      <span>0%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='card todays'>
                  <div className='head'>
                    <span className='title'>Participants par jour</span>
                    <FiMoreVertical />
                  </div>
                  <div className='mainBody'>
                    <span className='number'>0%</span>
                    <FaChartLine color='green' />
                  </div>

                  <div className='footerCard'>
                    <div>
                      <span>Payés</span>
                      <span>0</span>
                    </div>
                    <div>
                      <span>Visités</span>
                      <span>10</span>
                    </div>
                    <div>
                      <span>Pourcentage</span>
                      <span>0%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='card todays'>
                  <div className='head'>
                    <span className='title'>Participants par jour</span>
                    <FiMoreVertical />
                  </div>
                  <div className='mainBody'>
                    <span className='number'>0%</span>
                    <FaChartLine color='green' />
                  </div>

                  <div className='footerCard'>
                    <div>
                      <span>Payés</span>
                      <span>0</span>
                    </div>
                    <div>
                      <span>Visités</span>
                      <span>10</span>
                    </div>
                    <div>
                      <span>Pourcentage</span>
                      <span>0%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='charts'>
              <div className='card'>
                <Chart options={options} series={series1} type="bar" width={"100%"} height={400} />
              </div>

              <div className='card'>
                <Chart options={options} series={series} type="area" width={"100%"} height={400} />
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Dashboard