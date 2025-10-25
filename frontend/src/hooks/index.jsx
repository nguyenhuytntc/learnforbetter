import { useGetAuthUserQuery } from "@services/rootApi";
import { useDispatch } from "react-redux";

export const useGetUserInfo = () => {
    const dispatch = useDispatch();
    const { data } = useGetAuthUserQuery();

    if (data) {
        dispatch();
    }
};
