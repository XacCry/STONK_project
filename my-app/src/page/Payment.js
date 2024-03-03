import React from 'react'
import './css/Payment.css'
import { FaCircleDollarToSlot } from "react-icons/fa6";
export const Payment = () => {
  return (
    <div>
        <div className='pay-container'>
          <div className='table-wrapper'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Order</th>
                  <th className='expand'>Description</th>
                  <th>Status</th>
                  <th>Scan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Commission for 22/01/2024 : 234$</td>
                  <td>
                    <span className='label label-Waiting'>Waiting</span>
                  </td>
                  <td>
                    <span className='action'>
                      <FaCircleDollarToSlot />
                    </span>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>2</td>
                  <td>Commission for 30/01/2024 : 165$</td>
                  <td>
                    <span className='label label-Overdue'>Overdue</span>
                  </td>
                  <td>
                    <span className='action'>
                      <FaCircleDollarToSlot />
                    </span>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>3</td>
                  <td>Commission for07/01/2024 : 22$</td>
                  <td>
                    <span className='label label-completed'>completed</span>
                  </td>
                  <td>
                    <span className='action'>
                      <FaCircleDollarToSlot />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}
