import {useAppContext, appActionTypes} from "../../context/providers/app.provider";

const HeaderRootContainer = () => {
    const [{token}, dispatch] = useAppContext();
    const {logout} = appActionTypes;

    const handleLogout = () => {
        logout(dispatch);
    }

    return <div>HEADER PART {token && <button onClick={handleLogout}>Logout</button>}</div>;
}

export default HeaderRootContainer;
