import React, { Component} from 'react';
import { Modal } from 'react-bootstrap';


import ListMap from './listmap';

const companiesArray = [
    {
        id :1,
        company:"CLS"
    },
    {
        id :2,
        company:"Marzano"
    },
    {
        id :3,
        company:"SolutionTree"
    }
]

export default class Companies extends Component  {

    state = {
        companies:[],
        loading:true,
        showModal:false,
        lastDeletedItem:'',
        addItem:false
    }

    componentDidMount() {

        this.setState({
            companies: companiesArray,
            loading: false
        })

        
      };
     save = (id,item) => {
        companiesArray.find(e => e.id == id).company = item;

       // setCompanies(companiesArray);
    }
    
    deleteItem = (id) => {
        let item = companiesArray.find(e => e.id == id);
        try{
            
        companiesArray.splice(companiesArray.indexOf(item),1)

        } catch{
            console.log('error')
        } finally{
            this.setState({
                companies: companiesArray,
                lastDeletedItem:item.company,
                showModal: true
            })
        }
        
    }

    addItem = () => {
        this.setState({
            addItem:true
        })
    }
    adding = (item)=> {
        companiesArray.push({
            id : companiesArray.length? companiesArray[companiesArray.length -1].id + 1: 1,
            company : item
        })
        console.log(companiesArray)
        this.setState({
            companies: companiesArray,
            addItem :false
        })

    }
    
     handleShowModal = () => {
         this.setState({
             showModal : !this.state.showModal
         })
    }
    cancelAdding = () =>{
        this.setState({
            addItem:false
        })
    }



    

   
    render() {
        const {companies,showModal,loading,lastDeletedItem,addItem} = this.state

        const companiesMap = companies.map(({id,company}) =>{
            return (
                <ListMap key={`${id}-${company}`} name={company} id={id} placeholder="Company Name" save={this.save} deleteItem={this.deleteItem} />
            )
        })

        if(loading){
            return <div>Loading</div>
        }

        return (
            <div className="col col-12 col-sm-12 col-md-6 col_right">

                <div className="box_title">
                        companies
                </div>
                <div className="box_button">
                    <button type="button" className="btn btn-primary" onClick={this.addItem}>add</button>
                </div>
                <div className={`box_form ${companies.length > 10? 'scrolleffect':''}`}>
                    {addItem && <ListMap   placeholder="Company Name" save={this.adding} deleteItem={this.cancelAdding} />}
                    { companies.length? companiesMap: 'No Data' }

                </div>
                
                <Modal show={showModal}  onHide={this.handleShowModal} centered>
                    <Modal.Header closeButton>
                    
                    </Modal.Header>
                    <Modal.Body>Company with name {lastDeletedItem} successfuly deleted</Modal.Body>
 
                </Modal>
            </div>

        )
    }
}
