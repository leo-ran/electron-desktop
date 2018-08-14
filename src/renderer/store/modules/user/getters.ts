import { GetterTree, Getter } from "vuex";
import { UserState } from '@/store/modules/user/state';
import { RootState } from '@/store';


const user:Getter<UserState, RootState> = (state: UserState) => state.user


const getters:GetterTree<UserState, RootState> = {
    user: (state:UserState) => state.user
}

export default getters