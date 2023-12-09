
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MiToast  ({ type, message })  {
    const toastType = type === 'success' ? toast.success : toast.error;

    return (
        <div>
            {toastType(message, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            })}
        </div>
    );
}

export default MiToast;
