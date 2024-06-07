import React from "react";

const ContactItems = ({data}) => {

    const item = data && data.map((item,index) => { 
        return (
            <div className="col-12 col-lg-4" key={item.id}>
                <div className="item d-flex align-items-center">
                    <div className="icon">
                        <i class={item.iconClassList}></i>
                    </div>
                    <div className="content d-flex flex-column">
                        <h4 className="d-none d-lg-block">
                            {item.title}
                        </h4>
                        <p className="mb-0">
                            {item.content}
                        </p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <React.Fragment>
            {item}
        </React.Fragment>
    )
}

export default ContactItems;