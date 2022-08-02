import {useAppContext, appActionTypes} from "../../context/providers/app.provider";
import history from "../../services/history.service";

const LoginAuthPage = () => {
    const [, dispatch] = useAppContext();
    const {setUserAfterLogin} = appActionTypes;

    const handleLogin = (ev: any) => {
        /* HERE SHOULD BE LOGIN LOGIC */
        setUserAfterLogin(dispatch, {
            data: {
                expiresIn: 121212121,
                accessToken: 'ooodkkkdkkdkdk',
                user: {
                    public_id: "12kk12kk1kk1kk1k11k",
                    name: "Test User",
                    email: "test@example.com",
                    status: true,
                    roles: ['admin'],
                    createdAt: '01.01.2222',
                    updatedAt: '01.01.2222'
                }
            },
            errors: []
        });

        history.push("/");
    }

    return <>Login Page <button onClick={handleLogin}>LOGIN</button></>;
}

export default LoginAuthPage;
