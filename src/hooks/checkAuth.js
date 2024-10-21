const useAuth = () => {
    const token = localStorage.getItem("authToken");
    return token !== null;
};

export default useAuth