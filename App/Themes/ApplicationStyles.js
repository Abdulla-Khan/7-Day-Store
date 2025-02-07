import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: Colors.background
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.transparent
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin
    },
    sectionText: {
      ...Fonts.style.normal,
      paddingVertical: Metrics.doubleBaseMargin,
      color: Colors.snow,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center'
    },
    subtitle: {
      color: Colors.text,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin
    },
    titleText: {
      ...Fonts.style.h2,
      fontSize: 14,
      color: Colors.text
    },

    //New Style//
    //login page//
    mainScrollViewContainer: {
      backgroundColor: Colors.mainBackgroundColor,
      flexGrow: 1,
      paddingVertical: Metrics.mediumMargin,
    },
    contentArea: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: Metrics.mediumMargin
    },
    //inner page//
    mainViewInnerPage: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: Colors.mainBackgroundColor
    },
    scrollViewInnerPage: {
      //backgroundColor: 'red',
      paddingHorizontal: Metrics.mediumMargin,
      paddingVertical: Metrics.mediumMargin
    },
    InnerFlatListContainer: {
      //paddingHorizontal: Metrics.mediumMargin,
      //backgroundColor: Colors.eggplant,
      paddingBottom: Metrics.mediumMargin
    },
    // InnerFlatListContainerGallery: {
    //   paddingBottom: Metrics.mediumMargin,
    //   paddingHorizontal: Metrics.mediumMargin
    // }
    
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.ember,
    alignItems: 'center',
    textAlign: 'center'
  }
}

export default ApplicationStyles
