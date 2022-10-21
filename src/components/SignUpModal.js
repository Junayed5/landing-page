import React from 'react';
import Modal from 'react-bootstrap/Modal';

const SignUpModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <div style={{ backgroundColor: '#EFFFF4', height: 50 }} className='rounded-top' closeButton>
                <p className='d-flex justify-content-center mt-2'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
            </div>
            <div className='row '>
                <div className='col m-4'>
                    <h3 className='fw-bold pb-3'>Create Account</h3>
                    <form className='mb-3'>
                        <div className='d-flex'>
                            <input style={{ width: 160 }} className="form-control rounded-0" type="text" placeholder="First Name" />
                            <input style={{ width: 160 }} className="form-control rounded-0" type="text" placeholder="Last Name" />
                        </div>
                        <input style={{ width: 320 }} className="form-control rounded-0" type="email" placeholder="Email" />
                        <input style={{ width: 320 }} className="form-control rounded-0" type="password" placeholder="Password" />
                        <input style={{ width: 320 }} className="form-control rounded-0" type="password" placeholder="Confirm Password" />
                    </form>

                    <button style={{ width: 300 }} className='btn btn-primary rounded-pill mb-4 fw-bold'>Create Account</button><br />
                    <button style={{ width: 300 }} className='border btn btn-light mb-2'>Sign up with Facebook</button><br />
                    <button style={{ width: 300 }} className='border btn btn-light'>Sign up with Facebook</button>
                </div>
                <div className='col'>
                    <div className='mt-4'>
                        <button style={{ paddingLeft: 70 }} className='pe-5 btn btn-link text-black text-decoration-none' >Already have an account <span className='text-primary fw-bold'> Sign In</span></button>
                        <img className='hidden-xs d-none d-sm-block' src="https://i.ibb.co/5MZ5KQq/signin.png" alt="" />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default SignUpModal;