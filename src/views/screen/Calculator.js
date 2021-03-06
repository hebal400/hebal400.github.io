import React, { Component } from 'react'
import "../css/Calculator.css"

import Calculation from '../../actions/Calculation';

export default class Calculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
        fromValue: "시급",
        toValue: "월급",

        needDay: 1,
        needWeek: 0,
        needMonth: 1,

        payValue: '',
        dayValue: '',
        weekValue: '',
        monthValue: '',

        resultPay: 0,

        isNaN: false,
        }
    }

    changefromValueState = event => {
        let fromValue = event.currentTarget.value;
        this.setState({fromValue}, this.compareValues)
    }

    changetoValueState = event => {
        let toValue = event.currentTarget.value;
        this.setState({toValue}, this.compareValues)
    }

    compareValues = () => {
        let {fromValue, toValue, needDay, needWeek, needMonth} = this.state;
        var renderingState = Calculation.renderingForms(fromValue, toValue);
        needDay = renderingState[0];
        needWeek = renderingState[1];
        needMonth = renderingState[2];
        this.setState({needDay, needWeek, needMonth}, this._renderDay, this._renderWeek, this._renderMonth)
    }


    changepayValueState = event => {
        this.setState({
            payValue: event.currentTarget.value
        })
    }

    changedayValueState = event => {
        this.setState({
            dayValue: event.currentTarget.value
        })
    }

    changeweekValueState = event => {
        this.setState({
            weekValue: event.currentTarget.value
        })
    }

    changemonthValueState = event => {
        this.setState({
            monthValue: event.currentTarget.value
        })
    }

    clickCalBtn = () => {
        let {fromValue, toValue, payValue, dayValue, weekValue, monthValue} = this.state;
        var result = Calculation.doCalcul(fromValue, toValue, payValue, dayValue, weekValue, monthValue);
        if(!isNaN(result)) {
            this.setState({
                resultPay: result,
                isNaN: false,
            })
        } else {
            this.setState({ isNaN: true })
        }
        
    }

    _renderDay = () => (this.state.needDay === 1)
    ? (
        <li>
            <label htmlFor="dayworktime" className="formula-item">
                <span className="item-title">일일 근무 시간</span>
                <div className="input-container">
                    <input type="number" id="dayworktime" 
                        value={this.state.dayValue} 
                        onChange={this.changedayValueState} 
                        placeholder="5" />
                </div>
                {/* <span className="item-description">시간</span> */}
            </label>
        </li>
    ) : null

    _renderWeek = () => (this.state.needWeek === 1)
    ? (
        <li>
            <label htmlFor="weekworkday" className="formula-item">
                <span className="item-title">한 주 근무일 수</span>
                <div className="input-container">
                    <input type="number" id="weekworkday" 
                        value={this.state.weekValue}
                        onChange={this.changeweekValueState} 
                        placeholder="5"
                        />
                </div>
                {/* <span className="item-description">일</span> */}
            </label>
        </li>
    ) : null

    _renderMonth = () => (this.state.needMonth === 1)
    ? (
        <li>
            <label htmlFor="monthworkday" className="formula-item">
                <div className="item-title">한 달 근무일 수</div>
                <div className="input-container">
                    <input type="number" id="monthworkday" 
                        value={this.state.monthValue} 
                        onChange={this.changemonthValueState} 
                        placeholder="20"
                        />
                </div>
                {/* <div className="item-description">월</div> */}
            </label>
        </li>
    ) : null


    whenNan = () => (this.state.isNaN) ? (
        <div className="calc-error">정확한 숫자를 입력해주세요</div>
    ) : null

    render() {
        return (
        <div className="calculator-container">   
            <ul id="calc-tab">
                <li className="tab-node">
                    <div className="calc-tab-select">
                        <select name="from" onChange={this.changefromValueState} defaultValue={this.state.fromValue} className="calculator-select">
                            <option value="시급">시급</option>
                            <option value="일급">일급</option>
                            <option value="주급">주급</option>                        
                            <option value="월급">월급</option>
                            <option value="연봉">연봉</option>
                        </select>   
                    </div>
                    <div className="calc-tab-title">을</div>
                </li>
                <li className="tab-node">
                    <div className="calc-tab-select">
                        <select name="to" onChange={this.changetoValueState} defaultValue={this.state.toValue} className="calculator-select">
                            <option value="시급">시급</option>
                            <option value="일급">일급</option>
                            <option value="주급">주급</option>
                            <option value="월급">월급</option>
                            <option value="연봉">연봉</option>
                        </select>
                    </div>
                    <div className="calc-tab-title">으로</div>
                </li>
                
            </ul>
            <p id="lowestpay">2019년의 최저시급은 8,350원입니다</p>
            <div className="formarea">
                <ul id="formul">
                    <li>
                        <label htmlFor="pay" className="formula-item">
                            <span className="item-title">{this.state.fromValue}</span>
                            <div className="input-container">
                                <input type="number" id="pay" autoFocus="checked" 
                                    value = {this.state.payValue}
                                    onChange={this.changepayValueState}
                                    placeholder="8350"
                                    />
                                
                            </div>
                            {/* <span className="item-description">원</span> */}
                        </label>
                    </li>
                    {this._renderDay()}
                    {this._renderWeek()}
                    {this._renderMonth()}
                    
                </ul>
                <div className="calculator-btn-container">
                    <button className="calculbtn" onClick = {this.clickCalBtn}>
                        계산하기
                    </button>
                </div>

            </div>
                
            <div className="resultarea">

                <ul id="resultul">
                    <li><p>예상 {this.state.toValue}은</p></li>
                    <li><p id="resultpay"><b>{this.state.resultPay}</b></p></li>
                    <li><p>원 입니다.</p></li>
                </ul>
                {this.whenNan()}
                <p id="warn">정확한 급여는 고용주와 상의하시길 바랍니다.</p>

            </div>
        </div>
        )
    }
}
