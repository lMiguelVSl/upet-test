import { useParams } from 'react-router-dom';

const UserApplication = () => {
    const { id } = useParams();
    return (
        <>
            <div>USER APPLICATION WORKS.</div>
            <h1>{id}</h1>
        </>
    );
}

export default UserApplication;