import { useSelector } from "react-redux";

const DisplayUsers = () => {
	const data = useSelector((state) => {
		return state.users;
	});

	return <ul>
		{
			data.map((user, id) => {
				return <li key={id}>
					{user}
				</li>
			})
		}
	</ul>
};

export default DisplayUsers;
