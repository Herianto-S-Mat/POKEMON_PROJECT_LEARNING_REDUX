import  {ReactNode} from "react";

interface ModalType {
    type: "pokemon" | "berry";
    children?: ReactNode|null;
}

export interface ActionType {
    type: 'CLOSE'|'SET_MODAL';
    content?: ModalType;
  }

  const modalReducer: React.Reducer<ModalType | null, ActionType> = (state = null, action: ActionType) => {
    switch (action.type) {
        case 'CLOSE':
            return null;
        case 'SET_MODAL':
            if (action.content === undefined) {
                return null;
            }
            return action.content;
        default:
            return state;
    }
};

export default modalReducer;