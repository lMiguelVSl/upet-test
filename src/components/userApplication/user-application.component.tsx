import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import { User } from '../../models/user';
import { Card, Typography } from '@mui/material';
import './user-application.component.css';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

const UserApplication = () => {
    let { id } = useParams();
    let userObj: User = {
        name: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: ''
    };
    const [userData, setUserData] = useState(userObj);

    const getUserFunc = async (id: string) => {
        axios(`http://localhost:8080/form/getUser/${id}`)
            .then(res => {
                setUserData(res.data.user);
            });
    }

    useEffect(() => {
        if (!id) id = '';
        getUserFunc(id);
    }, []);

    return (
        <>
            <Card style={{ maxWidth: 500, margin: "0 auto", padding: "20px 5px" }}>
                <div id='component-content'>
                    <Typography gutterBottom variant="h4">uPet</Typography>
                    <div id='header-message'>
                        <div id='icon'><MarkEmailReadIcon></MarkEmailReadIcon></div>
                        <div id='thanks-m'>
                            <b>
                                Thanks, {userData.name}
                                <br />
                                We've received your application

                            </b>
                        </div>
                    </div>
                    <div id='main-message'>
                        <p>
                            We'll process your application as son as possible and send you a decision within 30 days to {userData.phoneNumber}
                            or {userData.email}. We will contact you in case more information is needed.
                            <br />
                            <br />
                            While we're reviewing your application, please don't submit another application for the uPet's breeder program.
                        </p>
                    </div>

                </div>
            </Card>


        </>
    );
}

export default UserApplication; 