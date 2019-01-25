import React, { Component } from 'react';
import { Route, Redirect, NavLink, Switch } from 'react-router-dom';
import { IoIosChatboxes, IoIosCalculator, IoIosPaperPlane } from 'react-icons/io';
// import 'https://fonts.googleapis.com/css?family=Jua';
import '../css/Main.css';
import Profile from '../component/Profile';
import Send from './Send';
import Calculator from './Calculator';
import Memo from './Memo';
import { getParsedData } from '../../actions';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      whenSearchAlba: null,

      dataSource: {
        siteTitle: '',
        workingHour: '',
        payType: '',
        pay: '',
        workingAddress: '',
        uri: ''
      }
      
    }

  }

  componentDidMount = () => {
    getParsedData((data) => {
      this.setState({whenSearchAlba: data.result}, () => {
        if(this.state.whenSearchAlba) {
          this.setState({
            dataSource: {
              siteTitle: data.parsedData.title,
              workingHour: data.parsedData.workingTime,
              payType: data.parsedData.payType,
              pay: data.parsedData.pay,
              workingAddress: data.parsedData.workingAddress,
              uri: data.parsedData.uri
            }
          });
        }
      })
    });
  }


  renderTabItem = (key, to, Icon, title, isVisible ) => (isVisible) ? (
    <li className="main-tabs-item" key={key}>
      <NavLink to={`${this.props.match.path}${to}`} activeClassName="selected">
        <Icon className="main-tabs-icon" size={25} color="#344955"/>
        <span>{title}</span>
      </NavLink>
    </li>
  ) : null

  render() {
    let { match, location } = this.props;
    if(!this.state.isLogin) return <Redirect to="/login" />

    if(location.pathname === match.path) {
      if(this.state.whenSearchAlba !== null) {
        if(this.state.whenSearchAlba) return <Redirect to={`${match.path}/send`} />
        else return <Redirect to={`${match.path}/memo`} />
      }
      
    }

    return (
        <div className="main-container">
          <Profile />
          <ul className="main-tabs">
            {[
                { to: `/send`, icon: IoIosPaperPlane, title: '보내기', isVisible: this.state.whenSearchAlba ? this.state.whenSearchAlba : false},
                { to: `/memo`, icon: IoIosChatboxes, title: '메모하기' },
                { to: `/calc`, icon: IoIosCalculator, title: '급여 계산기' }
              ].map(({to, icon, title, isVisible = true}, index) => this.renderTabItem(index, to, icon, title, isVisible ))}
          </ul>
          <Switch>
            { this.state.whenSearchAlba ? 
              <Route path={`${match.path}/send`} component={props => <Send {...props} dataSource={this.state.dataSource} />} /> : null
            }
            <Route path={`${match.path}/calc`} component={Calculator} />
            <Route path={`${match.path}/memo`} component={Memo} />
          </Switch>

        </div>
    )
  }
}
