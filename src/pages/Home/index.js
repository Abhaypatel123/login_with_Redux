import React from "react";
import MaterialTable from "material-table";
import axios from "axios";
import Appheader from "../AppHeader";
import './home.css';
import requireAuth from "../../Hoc/requireAuth";
import {getProductList} from '../redux/Action';
import {connect} from 'react-redux';


class Home extends React.Component{
   constructor(props){
	    super(props);
        this.state={
            loader:false,
            rowData:[],
            columnData:[],
        }
        this.getData = this.getData.bind(this);
    }   

    componentDidMount(){
        this.getData();
    }


    componentWillReceiveProps(nextProps){
        
        console.log('home',nextProps)
        // this.setState({

        // })
    }

    getData(){
        // this.setState({loader:true})
        // axios.get('http://dummy.restapiexample.com/api/v1/employees').then((res)=>{
        //     console.log('res',res)
        //     this.setState({loader:false})
        //     let {data} = res.data
        //     let getKeys =data[0]
        //     let columns =[]
        //     let keys = Object.keys(getKeys)
        //     keys.map((item,i)=>{
        //         columns.push({title:item,field:item})
        //     })
        //     console.log(keys,columns)

        //     this.setState({rowData:data,columnData:columns})
        //     console.log(data)
        // }).catch((e)=>{
        //     this.setState({loader:false})
        //     console.log('e',e)
        // })
        this.setState({loader:true})
        this.props.getProductList().then((res)=>{
            console.log(res)
            this.setState({loader:false})
        }).catch((e)=>{
            console.log('e',e)
            this.setState({loader:false})
        })
    }


	render() {
        const {loader,rowData,columnData} = this.state
        const {products=[]} = this.props.ProductReducer || {}
        console.log('homme',this.props)
        let productsHeader = []
        if(products && products.length > 0){
            productsHeader  =  Object.keys(products[0])

        }

        console.log('headerprodt',productsHeader,this.props.productReducer )
		return(
                <div>
                    <Appheader 
                        history={this.props.history}
                    />
                    <div className="home-main">
                    

                        {loader ?
                            <div className="loader">
                                Loading .......
                            </div>
                        :
                            // <MaterialTable
                            //     columns={columnData}
                            //     data={rowData}
                            //     title="Demo Title"
                            // />
                            <table>
                                <tr>
                                    {productsHeader.map((header,index)=>{
                                        return(
                                            <th key={index}>{header}</th>
                                        )
                                    })}
                                </tr>
                                {products.map((item,i)=>{
                                    return(
                                        <tr key={i}>
                                            <td>{item["id"]}</td>
                                            <td>{item["employee_name"]}</td>
                                            <td>{item["employee_salary"]}</td>
                                            <td>{item["employee_age"]}</td>
                                            <td>{item["profile_image"]}</td>
                                        </tr>
                                    )
                                })}
                            </table>
                        }
                        
                    </div>
                </div>
		)
	}
}

const mapstateToProps = ({auth,ProductReducer}) =>{
    return { auth , ProductReducer}
}

const mapDispatchToProps={
    getProductList
}

export default connect(mapstateToProps,mapDispatchToProps)(requireAuth(Home));