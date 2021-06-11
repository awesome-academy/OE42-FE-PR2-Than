import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useForm } from "react-hook-form";
import {loginUser} from '../../redux/userSlice'
import './login.scss'
import ModalRegister from '../register/register';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { LOGIN_SUCCESS } from '../../constants';

LoginModal.propTypes = {
    modalLogin: PropTypes.bool,
    toggleLogin: PropTypes.func,
};

function LoginModal(props) {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {modalLogin,toggleLogin} = props
    const notifyLogin = () => toast.success(t('toast.login_success'));
    const [modalRegister, setModalRegister] = useState(false);
    const user = useSelector(state => state.user)

    const toggleRegister = () => {
        setModalRegister(!modalRegister)
        if(modalLogin) {
            toggleLogin()
        }
    }

    useEffect(() => {
        if(user.status === LOGIN_SUCCESS) {
            toggleLogin()
            notifyLogin()
        }
    },[user.status])

    function onSubmit(data){
        dispatch(loginUser(data))
    }

    return (
        <div className="login__form">
            <ModalRegister modalRegister={modalRegister} toggleRegister={toggleRegister} ></ModalRegister>
            <Modal isOpen={modalLogin} toggle={toggleLogin} >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalHeader toggle={toggleLogin}>{t('login.login')}</ModalHeader>
                    <ModalBody>
                        <div className="input-item">
                            <label htmlFor="input__email">{t('login.email')}</label>  
                            <input {...register("email",{ required: true })} type="email" id="input__email" placeholder={t('login.input_email')}/> 
                            {errors.email && <span>{t('login.require')}</span>}
                        </div>
                        <div className="input-item">
                            <label htmlFor="input__password">{t('login.password')}</label>  
                            <input {...register("password",{ required: true })} type="password" id="input__password" placeholder={t('login.input_password')}/> 
                            {errors.password && <span>{t('login.require')}</span>}

                        </div>
                        <h1 style={{display:user.status ? 'block' : 'none'}}>{user.status}</h1>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" className="btn__login" type="submit">{t('login.login')}</Button>
                        <Button color="secondary" className="btn__register" onClick={toggleRegister}>{t('register.register')}</Button>
                    </ModalFooter>
                </form>
            </Modal>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            ></ToastContainer>
        </div>
    );
}

export default LoginModal;