const useAuth = () => {
    const token = localStorage.getItem("token");
    return token !== null;
};

export default useAuth