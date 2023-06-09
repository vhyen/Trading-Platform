import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import { Color } from '../../constants/color';
export default function NotificationToast({show,setShow,notification}:any) {
  return (
        <ToastContainer
          className="p-3 position-fixed"
          position='bottom-end'
          style={{ zIndex: 1 }}
        >
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header style={{backgroundColor: notification?.status ? Color.success : Color.failed}}>
              <strong className="me-auto">{notification?.header}</strong>
            </Toast.Header>
            <Toast.Body>{notification?.content}</Toast.Body>
          </Toast>
        </ToastContainer>
  );
}
