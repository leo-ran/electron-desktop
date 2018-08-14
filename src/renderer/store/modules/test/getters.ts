import { GetterTree, Getter } from "vuex";
import { testState } from '@/store/modules/test/state';
import { RootState } from '@/store';
import { UserState } from '@/store/modules/user/state';


const user:Getter<testState, UserState> = (state: testState) => state.user


const getters:GetterTree<testState, UserState> = {
    data: (state:testState) => state.user
}

export default getters
