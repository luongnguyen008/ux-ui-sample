import { useHistory } from "react-router-dom";
import axios from "axios";
import { setCookie, getCookie, clearCookie } from "../../config";
import { useDispatch } from "react-redux";
import { toast } from '../../utils/snackbarUtils';

axios.defaults.baseURL = 'http://localhost:8080';

export function useAuth() {
	const dispatch = useDispatch();
	let history = useHistory();
	//set user
	const setUserContext = async () => {
		let token = getCookie("jwt")
		axios.defaults.headers.common["Authorization"] = token;
		return await
			axios.get("/api/users/info")
				.then((res) => {
					dispatch({ type: 'GET_USER', payload: { data: res.data } })
					history.push("/home");
				})
				.catch((err) => {
					console.log("err", err);
				});
	};

	//login user
	const loginUser = async (data) => {
		const { username, password } = data;
		return axios
			.post("/api/auth/login", { username, password })
			.then(async (res) => {
				let jwt = res.data.tokenType + " " + res.data.accessToken;
				setCookie("jwt", jwt, 10000);
				//gọi service tìm kiếm user theo jwt để set user vào UserContext
				await setUserContext();
			})
			.catch((err) => {
				console.log("error", err);
			});
	};

	return {
		loginUser,
	};
}
export function useLogout() {
	let history = useHistory();
	const logoutUser = async () => {
		clearCookie("jwt")
		history.push("/")
	}
	return {
		logoutUser
	}
}
export function useGetAllRoles() {
	const dispatch = useDispatch();
	const getAllRoles = () => {
		// axios.get('api/users/roles')
		// 	.then(res => {
		// 		dispatch({ type: 'GET_ALL_ROLES', payload: { data: res.data } })
		// 	}).catch(err => {
		// 		toast.error("Lấy danh sách role thất bại")
		// 	})
	}
	return { getAllRoles }
}