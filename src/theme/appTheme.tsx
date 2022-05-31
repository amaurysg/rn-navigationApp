import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  personalButton: {
    height: 100,
    width: 100,
    backgroundColor: 'orange',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  avatarContainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  avatar:{
    height:100,
    width:100,
    borderWidth:2,
    borderColor:'grey',
    borderRadius:50,
    marginLeft:5,
    
  },
  menuLateralOptions:{
    marginVertical:10, 
    alignItems:'center'
  },
  menuButtonOptions:{
    marginVertical:5, 
    fontSize:22,
  },
  menuTextOptions:{
    fontSize:22,
  }
});
