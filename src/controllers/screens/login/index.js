import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
/** Local Modules */
import useApi from "api";
import { toast } from "react-toastify";

const useLogin = () => {

    /** Api */
    const {useActions} = useApi();
    const {dispatch, useAuthActions} = useActions();
    const {actLogin} = useAuthActions();

    /** Form */
    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({mode: "onChange"});

    const handleLogin = (data) => {
        dispatch(actLogin({
            data,
            onError: (error) => {
                toast.error(error.response.data.message.message);
                console.error(error)
            },
            onSuccess: () => {
                toast.success('Bienvenido!');
                setTimeout(() => {
                    window.location.href = '/'
                }, 6000)
            }
        }))
    }

    return {
        errors,
        isValid,
        register,
        handleSubmit,
        handleLogin
    };
}

export default useLogin;