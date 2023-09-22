import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import "./Card.css"
const Card = () => {
  const [open, setOpen] = useState(false);
  let arr = [{"name":"abhiroop","email":"abhiroop1969@gmail.com"}]
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [message, setmessage] = useState("")
  const onOpenModal = (e) => {console.log(e);setOpen(true);setname(e.name);setemail(e.email)}
  const onCloseModal = () => setOpen(false);
  const sendRequest=async()=>{
    const client_email=localStorage.getItem("client_email")
    const lawyer_email=email
    const data={client_email,lawyer_email,message}
    const response=await fetch("/api/lawyer/requestClient",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(data)
    }) 
    const res=await response.json()
    console.log(res)
  }
  const handleChange=(e)=>{
    if(e.target.name=="message"){
      setmessage(e.target.value);
    }
  }
  return (
    // arr.map(()=>{
    //   return <div>
    //   <button onClick={onOpenModal}>Open modal</button>
    //   <Modal open={open} onClose={onCloseModal} center>
    //     <h2>Simple centered modal</h2>
    //   </Modal>
    //   </div>
    // })

    <div className="card-container">
      {arr && arr.map((item, index) => (
        <div key={index} className="card">
          <div className="image-container">
            {/* <img src={item.photoUrl} alt={item.title} /> */}
            <img src="https://picsum.photos/100" alt="" />
          </div>
          <div className="card-title">
            <h3 className='card-title-h3tag'>Achintya Mishra</h3>
          </div>
          <div className="card-details">
          <p className='card-details-p'>Rating : 5</p>
          <p className='card-details-p'>No of Cases: 10</p>
          <p className='card-details-p'>Expertise : Criminal</p>
          <p className='card-details-p'>Per hearing Charge: 500 to 1500</p>
          </div>
          <div className='btn-container'>
          <button className='btn'onClick={()=>onOpenModal(item)}>Contact</button> 
          </div>
        </div>
      ))}
      <Modal open={open} onClose={onCloseModal} classNames={{modal: 'customModal'}} center>
              <div className="modal-img-container">
                <img src="modal-photo.png" className="modal-photo" alt="photo-unavailable"/>
              </div>
              <h2 className='modal-name'>{name}</h2>
              <h2 className='modal-name'>{email}</h2>
              <input className='modal-input' type='text' id="message" name='message' value={message} onChange={handleChange} placeholder='Add a note'></input>
              <div className="btn-container1">
              <button className='btn' onClick={sendRequest}>Send Request</button>
              </div>
            </Modal>
    </div>
  )
}

export default Card