import { useLocation, useNavigate } from 'react-router-dom';
import React from "react";

function withRouter(Child: React.ComponentClass<any>) {
    return (props: any) => {
        const location = useLocation();
        const navigate = useNavigate();
        return <Child {...props} navigate={navigate} location={location} />;
    };
}

export default withRouter;
