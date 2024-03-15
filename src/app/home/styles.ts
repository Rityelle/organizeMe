import { theme } from "@/src/theme";
import { borderRadius } from "@/src/theme/borderRadius";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.blue_cyan_s_6,
    paddingHorizontal: 20,
    paddingTop: 50,

  },
  containerTitle: {
    flexDirection:'row',
    gap: 4,
  },

  title: {
    fontSize: theme.fonts.size.heading.xs,
    fontFamily: theme.fonts.family.medium,
    color: theme.colors.white,
    marginBottom: 20,
  },

  name: {
    fontSize: theme.fonts.size.heading.xs,
    fontFamily: theme.fonts.family.medium,
    color: theme.colors.green,
    marginBottom: 20,
  },

  text: {
    color: theme.colors.white,
    fontSize: theme.fonts.size.heading.xl,
    fontFamily: theme.fonts.family.bold
  },

  subText: {
    color: theme.colors.white,
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.regular,
  },

  containerButton: {
    paddingTop: 20,
    alignItems:'center',
  },

  containerSeparetor: {
    marginTop: 30,
    flexDirection:'column',
  },

  textSeparetor:{
    color: theme.colors.white,
    fontFamily: theme.fonts.family.medium,
    fontSize: theme.fonts.size.body.md
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: theme.colors.white,
  },

  containerButtonModal: {
    alignItems:'center',
    width:"100%",
  },
  
  list: {
    flex: 1,
  },

  containerItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  button: {
    height: 64,
    width: '100%',
    backgroundColor: theme.colors.blue_magenta_s_5,
    borderRadius: theme.borderRadius.sm,
    alignItems:"center",
    justifyContent:'space-between',
    flexDirection:'row',
    padding: 5,
    marginTop: 5
  },
  
  itemText: {
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.green

  },

  leftActionContainer: {
    height: 64,
    backgroundColor: theme.colors.blue,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: theme.borderRadius.sm,
    paddingHorizontal: 20,
    marginTop: 5
  },
  rightActionContainer: {
    height: 64,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: theme.borderRadius.sm,
    paddingHorizontal: 20,
    marginTop: 5
  },
  editText: {
    color: 'white',
    fontWeight: 'bold',
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
  },
  
  deleteButton: {
    backgroundColor: "red",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "#fff",
  },
});
