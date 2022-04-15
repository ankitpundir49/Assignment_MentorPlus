import React,{Component} from "react";
import NavBar from "./navbar";
import './assignment.css';
import Date from "./dateView";
import http from "./httpService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
class MainView extends Component
{      state={
            data:[],
            buttons:["Home","Profile","","",""],
            activeIndex:-1,
            buttonIndex:-1,
            slotIndex:-1,
        }
        async fetchData(){
            let response=await http.get("https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json");
            this.setState({data:response.data});
        }
        async componentDidMount(){
            this.fetchData();
        }
        componentDidUpdate(prevProps,prevState)
        {   if(prevProps!==this.props) this.fetchData();
        }
        handleDate=(index)=>{
            let s1={...this.state};
            s1.activeIndex=index;
            s1.slotIndex=-1;
            this.setState(s1);
        }
        handleNavBut=(index)=>{
            let s1={...this.state};
            s1.buttonIndex=index;
            this.setState(s1);
        }
        handleSlotButton=(index)=>{
            let s1={...this.state};
            s1.slotIndex=index;
            this.setState(s1);
        }
        render(){
        let {data,buttons,activeIndex,buttonIndex,slotIndex}=this.state;
        let slot=activeIndex!=-1?data[activeIndex].available:"";
        return(
            <div className="container-fill">
                <NavBar buttons={buttons} buttonIndex={buttonIndex} onButton={this.handleNavBut}/>
                <br/><br/><br/>
                <div className="row header_border">
                    <div className="col-xs-1 col-sm-1 col-md-1"></div>
                    <div className="col-xs-1 col-md-1 col-lg-2"></div>
                    <div className="col-xs-1 col-sm-11 col-md-9">
                        <div className="row m-2">
                            <h4 className="d-sm-none d-md-none d-lg-block">
                                <FontAwesomeIcon icon={faArrowLeft}/>
                            </h4>
                            <h1>Book demo session slot</h1>
                            <div className="row ms-2">
                                <h1 className="col-1 text-danger m-0 p-0 width_10"><hr/></h1>
                                <h1 className="col-1 text-primary m-0 p-0 width_10"><hr/></h1>
                            </div>
                            <div className="row m-2">
                                {data.map((st,index)=>
                                    <div className={activeIndex===index?"col-1 cardActive text-light":"col-1 card"}>
                                        <Date data={st} index={index} onDate={this.handleDate}/>
                                    </div>
                                )}
                            </div>
                            {activeIndex>=0?
                                <React.Fragment>
                                   <div className="row m-2">
                                        <h1>Select Slot</h1>
                                        {slot.map((st,index)=>
                                            <div className={slotIndex===index?"col-1 slotActive  text-center text-light":"col-1 slot text-center"} onClick={()=>this.handleSlotButton(index)}>
                                                {st.hour} PM - {st.hour+1} PM
                                            </div>
                                        )}
                                    </div>
                                    <div className="row m-2">
                                        <button className="btn btn-primary payButton m-2">Proceed to Pay</button>
                                    </div>
                                </React.Fragment>
                                :""}
                        </div>
                     </div>
                </div>  
            </div>
        )
    }

}export default MainView;