export default theme => ({
  component: {
    minHeight: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "column"
  },
  root: {
    fontFamily: theme.typography.font.family2,
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: "5px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "&.highlighted": {
      border: `1px solid ${theme.palette.primary.color1}`
    }
  },
  cardType: {
    color: "white",
    height: "50px",
    display: "flex",
    fontSize: "18px",
    textAlign: "center",
    fontFamily: `'montserrat', sans-serif`,
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(135deg, #2AC88F 0%, #29A9DB 49.19%, #6A2BB9 100%)"
    // backgroundColor: theme.palette.primary.color3,
    // padding: 15,
    // color: 'white',
    // borderTopLeftRadius: 5,
    // borderTopRightRadius: 5,
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // '&.highlighted': {
    //   backgroundColor: theme.palette.primary.color1,
    // },
  },
  cardInfoWrapper: {
    display: "flex",
    padding: "50px",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#232F3F",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    minHeight: "125px",
    flex: 1
    // padding: 20,
    // display: 'flex',
    // flex: 1,
    // flexDirection: 'column',
  },
  cardPrice: {
    color: "#2bc88f",
    fontSize: "34px",
    textAlign: "center",
    fontFamily: `'montserrat', sans-serif`,
    fontWeight: "700"
    // fontSize: 34,
    // color: theme.palette.primary.color1,
    // fontFamily: theme.typography.font.family2,
    // fontWeight: 700,
    // textTransform: 'uppercase',
    // textAlign: 'center',
  },
  cardPeriod: {
    color: theme.palette.grey[400],
    fontSize: 15,
    fontWeight: 300,
    textAlign: "center"
  },
  cardShortDesc: {
    color: "#f5e4e4",
    fontSize: 17,
    fontWeight: 500,
    textAlign: "center",
    marginTop: 30,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  cardBtnWrapper: {
    textAlign: "center",
    marginBottom: "20px"
  },
  cardBtn: {
    width: "300px",
    padding: "15px",
    borderRadius: "50px",
    background: "#232f3f",
    color: "#2fc88e",
    fontFamily: "montserrat",
    fontWeight: "600"
  },
  cardBtnText: {
    color: theme.palette.primary.color2,
    "$cardBtn:hover &": {
      color: "white"
    }
  }
});
