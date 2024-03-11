import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        return (
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-m-6 col-sm-6 col-12'>
                <div className="card" >
                    <img src={this.props.pic} height="200px" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{height:'110px'}}>{this.props.title.slice(0,70)+"..."}</h5>
                        <h6 style={{fontSize:"13px"}}>Source : {this.props.source}</h6>
                        <h6 style={{fontSize:"13px"}}>Date : {`${new Date(this.props.date).getFullYear()}/${new Date(this.props.date).getDate()}/${new Date(this.props.date).getMonth()+1} ${new Date(this.props.date).getHours()}:${new Date(this.props.date).getMinutes()}`}</h6>
                        <hr />
                        <p className="card-text"style={{height:'250px'}}>{this.props.description}</p>
                        <a href={this.props.url} className="btn background text-light w-100  btn-sm mybtn">Read Full Article</a>
                    </div>
                </div>

            </div>
        )
    }
}
