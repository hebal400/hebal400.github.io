import React, { Component } from 'react'
import "./css/Calculator.css"

import Calculation from './Calculation';

export default class Calculator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fromValue: "시급",
      toValue: "월급",
    }
  }

  changefromValueState = event => {
    let fromValue = event.currentTarget.value;
    this.setState({fromValue})
    this.compareValues()
  }

  changetoValueState = event => {
    let toValue = event.currentTarget.value;
    this.setState({toValue})
    this.compareValues()
  }

  compareValues = () => {
    console.log(Calculation.test());
  }

  render() {
    return (
      <div>
      <div className="typearea"> 
            <p id="lowestpay">2019년의 최저임금은 8,350원입니다.</p>
            <ul id="fromtoul">
                <li>
                    <select name="from" onChange={this.changefromValueState} defaultValue={this.state.fromValue}>
                        <option value="시급">시급</option>
                        <option value="일급">일급</option>
                        <option value="주급">주급</option>                        
                        <option value="월급">월급</option>
                        <option value="연봉">연봉</option>
                    </select>
                </li>
                <li>
                    <p>을</p>
                </li>
                <li>
                    <select name="to" onChange={this.changetoValueState} defaultValue={this.state.toValue}>
                        <option value="시급">시급</option>
                        <option value="일급">일급</option>
                        <option value="주급">주급</option>
                        <option value="월급">월급</option>
                        <option value="연봉">연봉</option>
                    </select>
                </li>
                <li>
                    <p>으로</p>
                </li>
            </ul>
        </div>

        <div className="formarea">
            <ul id="formul">
                <li>
                    <a href="#monthpay"><label htmlFor="monthpay" className="title">{this.state.fromValue}</label></a>
                    <input type="text" id="monthpay" autoFocus="checked" />원
                </li>
                <li>
                    <a href="#dayworktime"><label htmlFor="dayworktime" className="title">일일 근무 시간</label></a>
                    <input type="text" id="dayworktime" />시간
                </li>
                <li>
                    <a href="#monthworkday"><label htmlFor="monthworkday" className="title">한 달 근무일 수</label></a>
                    <input type="text" id="monthworkday" />일
                </li>
            </ul>
            <div className="calculbtn">
                <p>계산하기</p>
            </div>
        </div>
            
        <div className="resultarea">

            <ul id="resultul">
                <li><p>예상 {this.state.toValue}은</p></li>
                <li><p id="resultpay"><b>11,050</b></p></li>
                <li><p>원 입니다.</p></li>
            </ul>

        </div>
      </div>
    )
  }
}
