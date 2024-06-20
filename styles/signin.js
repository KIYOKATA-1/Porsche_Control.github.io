import { StyleSheet} from 'react-native';

export const LStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0d0d0f',
      alignItems: 'center',
      justifyContent: 'center',
    },
    car:{
        position: 'relative',
        width: 425,
        height: 400,
        bottom: 75,
        objectFit: 'cover',
        borderRadius: 30,
        objectFit: 'cover',
        shadowColor: "#CFFF7F",     
        shadowOffset: { width: 1, height:1}, 
        shadowOpacity: 0.5,   
        shadowRadius: 25,   
    },
    input:{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 190,
        width: 350,
        bottom: 50,
    },
    username:{
        fontSize: 20,
        fontFamily: 'coda-regular',
        borderBottomWidth: 4,
        borderColor: '#588292',
        width: 300,
        height: 40,
        color: 'white',
        paddingLeft: 20,
        position: 'relative',
        bottom: 20,
    },
    password:{
        fontSize: 20,
        fontFamily: 'coda-regular',
        borderBottomWidth: 4,
        borderColor: '#588292',
        width: 300,
        height: 40,
        color: 'white',
        paddingLeft: 20,
        position: 'relative',
        top: 20,
    },
    btnContainer:{
        position:'relative',
        width: 400,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
    }
    ,
    loginBtn:{
        position: 'relative',
        width: 300,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 30,
        backgroundColor: '#588292',
        shadowColor: 'white', 
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.8,  
        shadowRadius: 15, 
    },
    loginBtnText:{
        position: 'relative',
        fontFamily: 'coda-regular',
        fontSize:20,
        fontWeight: 700,
        color: 'white',
    },
    signUpBtn:{
        position: 'relative',
        left: 100,
        bottom: 70,
        width: 100,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpBtnText:{
        color: 'snow',
        fontSize: 16,
        fontFamily: 'coda-regular',
    },
    
  });
