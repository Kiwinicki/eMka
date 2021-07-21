const Route = ({ path, children }) => {
	console.log(window);
	return window.location === path ? children : null;
};

export default Route;
