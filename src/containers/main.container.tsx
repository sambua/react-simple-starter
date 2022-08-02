import React, {Suspense} from "react";
import {useRoutes} from "react-router-dom";

import routes from "../routes";
import HeaderRootContainer from "./root/header.root.container";
import FooterRootContainer from "./root/footer.root.container";
import LoadingComponent from "../components/loading/loading.component";

const MainContainer = (props: any) => {

    return <Suspense fallback={<LoadingComponent />}>
        <HeaderRootContainer />
            <div>
                {useRoutes(routes)}
            </div>
        <FooterRootContainer/>
    </Suspense>
}

export default MainContainer;
