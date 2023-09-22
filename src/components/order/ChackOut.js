import React, { useEffect, useState } from 'react'
import PriceSummary from '../global-components/PriceSummary'
import { getAddress } from '../../redux/action/address.action';
import { useDispatch, useSelector } from 'react-redux';
import CheckOutSteps from './CheckOutSteps';
import { ButtonComponents, FormInputModule, FormLabelModule } from '../global-components/Form.components';
import { userLogin } from '../../redux/action/userAuth.action';

const ChackOut = () => {
  const auth = useSelector(state => state.userAuth);
  const userAddress = useSelector(state => state.address);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [adddata, setAdddata] = useState([])
  const [selectedaddress, setSelectedaddress] = useState(null)
  console.log('ff', adddata);
  console.log('dd', selectedaddress);
  const dispatch = useDispatch();
  const userLoginData = async (e) => {
    e.preventDefault();
    const user_Login_Data = {
      email,
      password
    }
    dispatch(userLogin(user_Login_Data))
  }

  useEffect(() => {
    const alladdress = userAddress.address.map(selectaddress => ({
      ...selectaddress,
      selected: false,
      edit: false
    }))
    setAdddata(alladdress);
  }, [userAddress.address]);

  const selectAdd = (selectaddress) => {
console.log('pp',selectaddress);
    const updatedAddress = adddata.map(adr => 
      console.log('hh',adr)
      // adr._id == selectaddress._id ? { ...adr, selected: true } : { ...adr, selected: false }
    )

    // setSelectedaddress(updatedAddress)
  }

  useEffect(() => {
    auth.authenticate && dispatch(getAddress());
  }, [auth.authenticate])
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center my-4">
        <div className="col-md-8">
          <CheckOutSteps
            stepNumber='1'
            title="LOGIN"
            active={!auth.authenticate}
            body={
              auth.authenticate ? <div className='row'>
                <div><span>Email : </span>
                  <span>{auth.user.email}</span></div>
                <div><span>Name : </span>
                  <span>{auth.user.fullname}</span></div>
              </div> : <form onSubmit={userLoginData}>
                <div className='row'>
                  <div className='col-md-4'>
                    <div className="form-outline mb-4">
                      <FormInputModule typ="email" cn="form-control form-control-lg" val={email} onChange={e => setEmail(e.target.value)} plh="Enter Email" />
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className="form-outline mb-4">
                      <FormInputModule plh="Enter Password" typ="password" nm="password" val={password} cn="form-control form-control-lg" onChange={e => setPassword(e.target.value)} />
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <ButtonComponents
                      typ="submit"
                      cn="btn btn-block fs-5 fw-bold "
                      btnname="Login"
                    />
                  </div>



                </div>
              </form>
            }
          />
          <CheckOutSteps
            stepNumber='2'
            title="DELIVERY ADDRESS"
            active={userAddress.address.length > 0 ? true : false}
            actinBtn="Add New Address"
            body={
              <>
                {
                  userAddress.address.map(adr =>
                    <div className='row border mb-1'>
                      <div className='col-md-1'>
                        <FormInputModule onClick={() => { selectAdd(adr) }} typ="radio" nm="address" />
                      </div>
                      <div className='col-md-10'>
                        <div>
                          <div className='text-capitalize'>
                            <span >{adr.name} |</span>
                            <span > {adr.addresstype} |</span>
                            <span > {adr.contact_number}</span>
                          </div>
                          <div className='text-capitalize'>
                            {adr.address}
                          </div>
                          {
                            adr.selected ? <ButtonComponents
                              typ="button"
                              cn="btn btn-block fs-5 fw-bold my-2 text-uppercase "
                              btnname="DELIVERY HERE"
                            /> : null
                          }

                        </div>
                      </div>
                      <div className='col-md-1'>
                        {
                          adr.selected ? <span>Edit</span> : null
                        }
                      </div>
                    </div>
                  )
                }
              </>
            }
          />
          {/* <AddressForm
            onSubmitForm={onAddressSubmit}
            onCancel={() => { }}
          /> */}
          <CheckOutSteps
            stepNumber='3'
            title="ORDER SUMMARY"
            active={false}
            body={
              <div>
                <span>Email</span>
                <span>{auth.user.email}</span>
              </div>
            }
          />
          <CheckOutSteps
            stepNumber='4'
            title="PAYMENT OPTIONS"
            active={false}
            body={
              <div>
                <span>Email</span>
                <span>{auth.user.email}</span>
              </div>
            }
          />
        </div>
        <PriceSummary />
      </div>
    </div>
  )
}

export default ChackOut