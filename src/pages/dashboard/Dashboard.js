import React, { useContext } from 'react'
import Leftbar from '../../components/leftbar/Leftbar';
import Navbar from '../../components/navbar/Navbar';
import { ContextApp } from '../../context/AppContext'
import "./Dashboard.css";
import influenceurs from "../../assets/influenceurs.svg"
import inf from "../../assets/inf.svg"
import help from "../../assets/help.svg"
import users from "../../assets/users.svg"
import invest from "../../assets/invest.svg"
import contact from "../../assets/contact.svg"
import { useSelector } from 'react-redux';
import { Avatar, Button } from '@mui/material';
import Chart from "react-apexcharts";
import { FaArrowRight } from 'react-icons/fa';
import { FaChartLine } from "react-icons/fa"
import { baseUrlImage } from '../../bases/basesUrl';
import { FiMoreVertical } from "react-icons/fi"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider'

const marks = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 20,
    label: '20%',
  },
  {
    value: 37,
    label: '37%',
  },
];

function valuetext(value) {
  return `${value}%`;
}

const Dashboard = () => {
  const { userConnected } = useContext(ContextApp);
  const categories = useSelector((state) => state.categories);
  const usersLength = useSelector((state) => state.users);
  const contacts = useSelector((state) => state.contacts);

  const cagnottesLength = useSelector((state) => state.cagnottes);

  const options = {
    xaxis: {
      categories: ["5", '6', '8', '7']
    }
  };
  const series = [
    {
      name: "Transactions",
      data: [5, 7, 8, 4]
    },
  ];

  const series1 = [
    {
      name: "Transactions",
      data: [5, 7, 8, 4]
    },
    {
      name: "Transactions",
      data: [3, 2, 6, 4]
    },
  ];

  console.log(userConnected)

  const value = 0.66;

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
                    <span className='number'>125.89</span>
                    <FaChartLine color='green' />
                  </div>

                  <div className='footerCard'>
                    <div>
                      <span>Payés</span>
                      <span>56</span>
                    </div>
                    <div>
                      <span>Visités</span>
                      <span>10</span>
                    </div>
                    <div>
                      <span>Pourcentage</span>
                      <span>5%</span>
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
                    <span className='number'>125.89</span>
                    <FaChartLine color='green' />
                  </div>

                  <div className='footerCard'>
                    <div>
                      <span>Payés</span>
                      <span>56</span>
                    </div>
                    <div>
                      <span>Visités</span>
                      <span>10</span>
                    </div>
                    <div>
                      <span>Pourcentage</span>
                      <span>5%</span>
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
                    <span className='number'>125.89</span>
                    <FaChartLine color='green' />
                  </div>

                  <div className='footerCard'>
                    <div>
                      <span>Payés</span>
                      <span>56</span>
                    </div>
                    <div>
                      <span>Visités</span>
                      <span>10</span>
                    </div>
                    <div>
                      <span>Pourcentage</span>
                      <span>5%</span>
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
                    <span className='number'>125.89</span>
                    <FaChartLine color='green' />
                  </div>

                  <div className='footerCard'>
                    <div>
                      <span>Payés</span>
                      <span>56</span>
                    </div>
                    <div>
                      <span>Visités</span>
                      <span>10</span>
                    </div>
                    <div>
                      <span>Pourcentage</span>
                      <span>5%</span>
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