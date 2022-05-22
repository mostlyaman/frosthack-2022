export const state = () => ({
    user: false,
})

export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION : (state, {authUser}) => {
        if(!authUser){
            console.log(authUser)
            console.log("authUser not defined")
            state.user = false;
        }else{
            
            const {uid, email, displayName, photoURL } = authUser;
            state.user = {uid, email, displayName, photoURL};
        }
    },
    addDbData: (state, data) => {
        state.user = {...data}
    }
};

export const actions = {
    async onAuthStateChangedAction({commit, state}){
        // Checking if the user has logged in
        if(state.user){
            // Checking if there is entry for user data
            const userDataExists = await this.$fire.firestore.collection('users').doc(state.user.uid).get()
            // if data exists
            if (userDataExists.exists){
                commit('addDbData', userDataExists.data())
            }else{
                // Insert data fields for newly created users here
                const userdata = {
                    ...state.user,
                }
                await this.$fire.firestore.collection('users').doc(state.user.uid).set(userdata);
                commit('addDbData', userdata);
            }
        }else{
            console.log("NotLoggedIn")
        }
        
    }

}