import { useDispatch, useSelector } from 'react-redux';
// import { useModalContext } from '../resource/context/Modal'

const Modal:React.FC = () => {
    // const {navModal, setModal} = useModalContext();
    const dispatch = useDispatch();
    const modal = useSelector((state: { modal?: any }) => state.modal);
    if (!modal) {
        return null;
    }

    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            dispatch({ type: 'CLOSE' });
        }
    };
      return (
        <div
            style={{
                backgroundColor: 'rgba(0,0,0,.5)',
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                display: 'flex',
                padding: '1em',
                justifyContent: 'center',
            }}
            onClick={handleOutsideClick}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    padding: '1em',
                    borderRadius: '1em',
                    flexGrow: '1',
                    maxWidth: '30em',
                    minHeight: '30em',
                    maxHeight: '100%',
                    overflowY: 'auto',
                }}
            >
                <div
                    onClick={() => dispatch({ type: 'CLOSE' })}
                    style={{
                        cursor: 'pointer',
                        alignSelf: 'end',
                        width: 'max-content',
                        fontSize: '2em',
                    }}
                >
                    X
                </div>
                {modal.children}
            </div>
        </div>
    );
}

export default Modal