/* istanbul ignore file */
/*
 * File: SizeChart.jsx
 * Project: webapp-rrs
 * Created Date: Tuesday, June 22nd 2021, 5:32:06 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday June 20th 2021 2:27:55 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import useBodyScrollLock from '@Hooks/UseBodyScrollLock';
import Modal from '@RRS-UI/modal/Modal';
import { bool, func } from 'prop-types';
import './SizeChart.module.css';
import styles from './SizeChart.module.scss';

const SizeChart = ({ handleAfterClose, showSizeChart }) => {
  useBodyScrollLock(showSizeChart);

  return (
    <Modal handleAfterClose={handleAfterClose} showModal={true} contentClass={styles.modal}>
      <Modal.head>
        <h1>Size Chart</h1>
      </Modal.head>
      <div className="sizeChart">
        <div className="sizeChart-header">
          <span className="sizeChart-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fff"
              width="26"
              height="26"
            >
              <path d="M22 8.51v1.372h-2.538c.02-.223.038-.448.038-.681 0-.237-.017-.464-.035-.69h2.535zm-10.648-6.553v-1.957h1.371v1.964c-.242-.022-.484-.035-.726-.035-.215 0-.43.01-.645.028zm5.521 1.544l1.57-1.743 1.019.918-1.603 1.777c-.25-.297-.593-.672-.986-.952zm-10.738.952l-1.603-1.777 1.019-.918 1.57 1.743c-.392.28-.736.655-.986.952zm-1.597 5.429h-2.538v-1.372h2.535c-.018.226-.035.454-.035.691 0 .233.018.458.038.681zm9.462 9.118h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 2h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-4.5l1.188.782c.154.138.38.218.615.218h.895c.234 0 .461-.08.615-.218l1.187-.782zm3.75-13.799c0 3.569-3.214 5.983-3.214 8.799h-1.989c-.003-1.858.87-3.389 1.721-4.867.761-1.325 1.482-2.577 1.482-3.932 0-2.592-2.075-3.772-4.003-3.772-1.925 0-3.997 1.18-3.997 3.772 0 1.355.721 2.607 1.482 3.932.851 1.478 1.725 3.009 1.72 4.867h-1.988c0-2.816-3.214-5.23-3.214-8.799 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.051 6.003 5.772z"></path>
            </svg>
          </span>
          <div className="sizeChart-headerHolder">
            <h4>
              <b>FIT TIP:</b> Buy ½ size up from your true foot size
            </h4>
            <p>Need Help? Your Fit Expert is standing by at 800-743-3206!</p>
          </div>
        </div>
        <div className="sizeChart-category">ASICSMen&apos;s Size Chart</div>
        <div className="sizeChart-body">
          <div className="table-responsive">
            <div className="sizeChart-scroll">
              <h3 className="sizeChart-title">
                <strong>Men&apos;s</strong> Shoe Sizing
              </h3>
              <table className="table table-striped table-hover sizeChart-table">
                <thead>
                  <tr>
                    <th scope="col">us</th>
                    <th scope="col">euro</th>
                    <th scope="col">UK</th>
                    <th scope="col">INCHES</th>
                    <th scope="col">CM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>6</td>
                    <td>39</td>
                    <td>5.5</td>
                    <td>9 1/4&quot;</td>
                    <td>23.5</td>
                  </tr>
                  <tr>
                    <td>6.5</td>
                    <td>39</td>
                    <td>6</td>
                    <td>9 1/2&quot;</td>
                    <td>24.1</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>40</td>
                    <td>6.5</td>
                    <td>9 5/8&quot;</td>
                    <td>24.4</td>
                  </tr>
                  <tr>
                    <td>7.5</td>
                    <td>40-41</td>
                    <td>7</td>
                    <td>9 3/4&quot;</td>
                    <td>24.8</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>41</td>
                    <td>7.5</td>
                    <td>10&quot;</td>
                    <td>25.4</td>
                  </tr>
                  <tr>
                    <td>8.5</td>
                    <td>41-42</td>
                    <td>8</td>
                    <td>10 1/8&quot;</td>
                    <td>25.7</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>42</td>
                    <td>8.5</td>
                    <td>10 1/4&quot;</td>
                    <td>26</td>
                  </tr>
                  <tr>
                    <td>9.5</td>
                    <td>42-43</td>
                    <td>9</td>
                    <td>10 1/2&quot;</td>
                    <td>26.7</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>43</td>
                    <td>9.5</td>
                    <td>10 5/8&quot;</td>
                    <td>27</td>
                  </tr>
                  <tr>
                    <td>10.5</td>
                    <td>43-44</td>
                    <td>10</td>
                    <td>10 3/4&quot;</td>
                    <td>27.3</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>44</td>
                    <td>10.5</td>
                    <td>11&quot;</td>
                    <td>27.9</td>
                  </tr>
                  <tr>
                    <td>11.5</td>
                    <td>44-45</td>
                    <td>11</td>
                    <td>11 1/8&quot;</td>
                    <td>28.3</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>45</td>
                    <td>11.5</td>
                    <td>11 1/4&quot;</td>
                    <td>28.6</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>46</td>
                    <td>12.5</td>
                    <td>11 5/8&quot;</td>
                    <td>29.4</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>47</td>
                    <td>13.5</td>
                    <td>12&quot;</td>
                    <td>30.2</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>48</td>
                    <td>14.5</td>
                    <td>12 1/4&quot;</td>
                    <td>31</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>49</td>
                    <td>15.5</td>
                    <td>12 5/8&quot;</td>
                    <td>31.8</td>
                  </tr>
                </tbody>
              </table>
              <h3 className="sizeChart-title">
                <strong>Men&apos;s</strong> SHOE WIDTH
              </h3>

              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">2A</th>
                      <th scope="col">B</th>
                      <th scope="col">D</th>
                      <th scope="col">2E</th>
                      <th scope="col">4E</th>
                      <th scope="col">6E</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Extranarrow</td>
                      <td>narrow</td>
                      <td>medium</td>
                      <td>wide</td>
                      <td>extrawide</td>
                      <td>XXwide</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

SizeChart.propTypes = {
  handleAfterClose: func.isRequired,
  showSizeChart: bool.isRequired,
};

export default SizeChart;
