import { StyleSheet, Text, View, FlatList,TouchableOpacity,Dimensions,Animated,Image,ScrollView} from 'react-native';
import {React,useState,useEffect,useRef} from 'react';
import { useFonts } from 'expo-font';
import Sidebar from '../../assets/SVGs/Sidebar';
import Profile from '../../assets/SVGs/Profile';
import ArrowsPic from '../../assets/SVGs/arrows';
import { FontAwesome } from '@expo/vector-icons';
import ProfileIB from '../../assets/SVGs/ProfileIconBox';
import HeartCircle from '../../assets/SVGs/HeartCircle';
import { router } from 'expo-router';
import MapIcon from '../../assets/imgsJsx/map';
import FilterModal from '../components/filterModal'
import { SafeAreaView } from 'react-native-safe-area-context';
import MyProfile from '../../assets/SVGs/MyProfile';
import MessageCircle from '../../assets/SVGs/MessageCircle';
import Settings from '../../assets/SVGs/Settings';
import Calendar from '../../assets/SVGs/Calendar';
import Bookmark from '../../assets/SVGs/Bookmark';
import Mail from '../../assets/SVGs/Mail';
import HelpCircle from '../../assets/SVGs/HelpCircle';
import Logout from '../../assets/SVGs/Logout';
import ProfPic from '../../assets/ProfPic.png';

const { width, height } = Dimensions.get('window');
const sidebarWidth = (202 / 375) * width;

const HeaderHome = () => {
    const [fontsLoaded, err] = useFonts({
    "Poppins-Black": require("../../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../../assets/fonts/Poppins-Thin.ttf"),
  });
  const [friends, setFriends] = useState([]);
  const [error, setError] = useState(null); 
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const sidebarAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const userId = '66b4928e4d3f0b7ad9bfd4c8'; 

    const fetchSuggestions = async () => {
      try {
        const response = await fetch(`http://192.168.100.168:3000/api/suggest-friends/${userId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); 
        setFriends(data); 
        // console.log(data);
      } catch (error) {
        console.error('Error fetching suggestions:', error); 
        setError(error.message);
      }
    };

    fetchSuggestions();
  }, []);

  const GoToViewMorePage = () => {
    router.push('/ViewMorePage');
  };
  const GoToProfilePage = () => {
    router.push('/(pages)/Profile');
  };
  //Filter Modal
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);

  const toggleFilterModal = () => {
    setFilterModalVisible(!isFilterModalVisible);
  };
  const toggleSidebar = () => {
    const toValue = isSidebarVisible ? 0 : 1;
    Animated.timing(sidebarAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIsSidebarVisible(!isSidebarVisible));
  };

  const sidebarTranslateX = sidebarAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-sidebarWidth, 0], // Sidebar slides in and out
  });

  const contentTranslateX = sidebarAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, sidebarWidth], // Content slides right
  });

  
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.sidebar, { transform: [{ translateX: sidebarTranslateX }] }]}>
      
        <View style={styles.profilecircle}>
        <Image
        source={ProfPic}
        style={styles.profileImage}
      />
        </View>
        <Text style={styles.Name}>Flen Fouleni</Text>
        <View style={styles.sidebarContent}>

            <View style={styles.iconContainer}>
<MyProfile style={styles.prof}/>
<Text style={styles.myprofileInfo}>My Profile</Text>
</View>

<View style={styles.iconContainer1}>
<MessageCircle style={styles.mes}/>
<Text style={styles.messageInfo}>Message</Text>
</View>

<View style={styles.iconContainer1}>
<Calendar style={styles.cal}/>
<Text style={styles.calendarInfo}>Calendar</Text>
</View>

<View style={styles.iconContainer1}>
<Bookmark style={styles.book}/>
<Text style={styles.bookmarkInfo}>Bookmark</Text>
</View>

<View style={styles.iconContainer1}>
<Mail style={styles.mail}/>
<Text style={styles.mailInfo}>Contact us</Text>
</View>

<View style={styles.iconContainer1}>
<Settings style={styles.set}/>
<Text style={styles.settingsInfo}>Settings</Text>
</View>

<View style={styles.iconContainer1}>
<HelpCircle style={styles.help}/>
<Text style={styles.helpInfo}>Helps & FAQs</Text>
</View>

<View style={styles.iconContainer1}>
<Logout style={styles.log}/>
<Text style={styles.logoutInfo}>Log Out</Text>
</View>
        </View>
        
      </Animated.View>
      <Animated.View style={[styles.content, { transform: [{ translateX: contentTranslateX }] }]}>
      <View style={styles.iconRow}>
      <TouchableOpacity onPress={toggleSidebar}>
        <Sidebar style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={18} color="#000000" style={styles.searchIcon} />
        </View>
{/* Filter Modal*/}
        <TouchableOpacity style={styles.filterButton} onPress={toggleFilterModal}>
            <View style={styles.arrowButton}>
                <ArrowsPic style={styles.ArrowInput} />
            </View>
        </TouchableOpacity>
        <FilterModal style={styles.modalStyle} isVisible={isFilterModalVisible} onClose={toggleFilterModal} />

        <TouchableOpacity onPress={GoToProfilePage}>
          <Profile style={styles.ProfilePic} />
          </TouchableOpacity>
      </View>
      {/* <View style={styles.titleContainer}>
        <Text style={styles.Suggest}>Friends Suggestions</Text>
        <TouchableOpacity onPress={GoToViewMorePage}>
          <View style={styles.viewMoreContainer}>
            <Text style={styles.viewMore}>View More</Text>
            <Vector style={styles.vectorIcon} />
          </View>
        </TouchableOpacity>
      </View> */}
      <View style={styles.BoxView}>
        <FlatList
          data={friends.slice(0, 4)}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.BoxContainer}>
              <Image source={require('../../assets/profileUserImg.png')} style={styles.circle} />
              <View style={styles.iconTextContainer1}>
                <ProfileIB style={styles.profile} />
                <Text style={styles.profileInfo}>{item.childUsername}</Text>
              </View>
              <View style={styles.iconTextContainer2}>
                <HeartCircle style={styles.heart} />
                <Text style={styles.heartInfo}>{item.interests && Array.isArray(item.interests) ? item.interests.join(', ') : 'No interests'}</Text>
              </View>
              <View style={styles.iconTextContainer3}>
                <MapIcon fill="rgba(86, 167, 255, 1)"></MapIcon>
                <Text style={styles.localisationInfo}>{item.governorat}</Text>
              </View>
              <View style={styles.addCircle}>
                <Text style={styles.Plus}>+</Text>
              </View>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.05, // Dynamic paddingTop
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  iconContainer:{
    flexDirection: 'row',
    },
    sidebar: {
      position: 'absolute',
      top: (20 / 375) * width, // Adjusts top position based on screen width
      bottom: 0,
      left: 0,
      right: sidebarWidth, // Adjusts to the width defined
      width: sidebarWidth, // Fixed width for the sidebar
      borderRadius: 16,
      backgroundColor: '#FFFFFF',
      borderColor: '#4D4D4D',
      borderWidth: 1,
      zIndex: 2,
      padding: 20,
      flexDirection: 'column', // Ensure the layout is column-based
      flex: 1,
    },
    sidebarContent: {
      alignItems: 'flex-start', // Align items to the start
      justifyContent: 'flex-start', // Align items from the top
      flexGrow: 1, // Allow content to expand
      paddingBottom: 20, // Extra space at the bottom
    },
    profilecircle:{
      width: 58,
      height: 58,
      borderRadius: 29,
      borderColor: '#1C3F83',
       borderWidth: 1,
       overflow: 'hidden', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    iconContainer1:{
      flexDirection: 'row',
      marginTop: 32,
      },
      mail:{
        right: 3,
        },
        
       mailInfo:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10,
        },
      iconContainer1:{
        flexDirection: 'row',
        marginTop: 32,
        },
        set:{
          right: 13,
          },
          
          settingsInfo:{
          fontFamily: 'Poppins-SemiBold',
          fontSize: 16,
          fontWeight: '600',
          marginRight: 12,
          },
        iconContainer1:{
          flexDirection: 'row',
          marginTop: 32,
          },
          help:{
            left: 12,
            },
            
            helpInfo:{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 16,
            fontWeight: '600',
            marginLeft: 26,
            },
          iconContainer1:{
            flexDirection: 'row',
            marginTop: 32,
            },

            log:{
              right: 17,
              },
              
             logoutInfo:{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 16,
              fontWeight: '600',
              marginRight: 14,
              },
              iconRow: {
                flexDirection: 'row',
                alignItems: 'center',
                width: '95%',
                paddingHorizontal: width * 0.15, 
                marginTop: height * 0.02, 
              },
  iconTextContainer1: {
    width: (118/180)*width,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: (15/812)*height,
    marginLeft: (31/90)*width,  
  },
  Name:{
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    marginTop: 9,
    marginRight: 16,
    },
  iconTextContainer2: {
    width: (142/375)*width,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: (16/812)*height,  
  },

  iconTextContainer3: {
    width: (109/375)*width,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: (16/812)*height,  
  },

  Plus:{
    fontFamily: 'Poppins-Regular',
    width:14,
    height: 30,
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 30,
    textAlign: 'left',
    color: '#FFFFFF',
    
  },

  arrowButton:{
    alignItems: 'center',
    borderColor: '#1C3F83',
    borderWidth: 1,
    borderRadius: 16,
    height: 32,
    width:32,
    marginTop: height * 0.01, 
    marginLeft: 6,
    
  },

  prof:{
    right: 15,
    },
    
    myprofileInfo:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    fontWeight: '600',
    },
    
    iconContainer:{
    flexDirection: 'row',
    },
    
    iconContainer1:{
      flexDirection: 'row',
      marginTop: 32,
    },
    
    mes:{
      right: 17,
      top:3,
      },
      
      messageInfo:{
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
      fontWeight: '600',
      },
      cal:{
        right: 15,
        },
        
        calendarInfo:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        fontWeight: '600',
        },
        help:{
          left: 12,
          },
    iconContainer1:{
    flexDirection: 'row',
    marginTop: 32,
    },
    
    book:{
      right: 8,
      },
      
      bookmarkInfo:{
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
      fontWeight: '600',
      marginLeft: 7,
      },
      log:{
        right: 17,
        },
        
       logoutInfo:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        fontWeight: '600',
        marginRight: 14,
        },
  ArrowInput:{
    width: width * 0.05, 
    height: height * 0.025, 
     
    marginTop: height * 0.005, 
  },

  ProfilePic: {
    marginTop: height * 0.01, 
    zIndex: 1,
    marginLeft: 6,
  },
  icon: {
    marginTop: height * 0.01, 
    zIndex: 1,
  },
  searchContainer: {
    alignItems: 'center',
    borderColor: '#1C3F83',
    borderWidth: 1,
    borderRadius: 16,
    height: 32,
    width:32,
    marginTop: height * 0.01, 
    marginLeft: width*0.5, 
  },
  searchIcon: {
    width: width * 0.05, 
    height: height * 0.025, 
    marginLeft: width * 0.008, 
    marginTop: height * 0.005, 
  },
  verticalLine: {
    height: '70%',
    width: 1,
    backgroundColor: '#1C3F83',
    marginHorizontal: width * 0.025, 
  },
  searchInput: {
    fontFamily: 'Poppins-Medium',
    flex: 1,
    paddingHorizontal: width * 0.0025, 
    fontSize: width * 0.05, 
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginTop: height * 0.01, 
  },
  profileInfo: {
    marginLeft: width * 0.02, 
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    fontSize : 12
  },
  heartInfo: {
    
    fontFamily: 'Poppins-Medium',
    flex: 1,
    textAlign: 'left',
    fontSize : 12
  },
  localisationInfo: {
    fontFamily: 'Poppins-Medium',
    marginLeft : 5,
    fontSize : 12
  },
  Suggest: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: width * 0.045, 
    marginLeft: width * 0.05, 
    marginBottom: height * 0.007, 
  },
  viewMore: {
    color: '#747688',
    fontSize: width * 0.035, 
    fontWeight: '700',
    fontFamily: 'Poppins-ExtraBold',
    marginTop: height * -0.003, 
    marginLeft: width * 0.0125, 
  },
  viewMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vectorIcon: {
    width: width * 0.05, 
    height: height * 0.025, 
    marginTop: height * 0.009, 
    marginLeft: width * 0.02, 
  },
  circle: {
    width: width * 0.125, 
    height: width * 0.125, 
    borderRadius: width * 0.0625, 
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#00000080',
    top: height * -0.035, 
    position: 'absolute',
  },
  addCircle: {
    width: (36.61/375)*width, 
    height: (36.61/375)*width, 
    borderRadius: width * 0.05, 
    backgroundColor: '#56A7FF',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    top: (150/812)*height, 
    position: 'absolute',
    shadowColor: '#56A7FF', // shadow color
    shadowOffset: { width: 0, height: 4 }, // shadow offset
    shadowOpacity: 0.25, // shadow opacity (64/255 = 0.25)
    shadowRadius: 4, // shadow radius
    elevation: 4, // for Android
    justifyContent: 'center', // centers children vertically
    alignItems: 'center', // centers children horizontally
  },
  addIcon: {
    top: height * 0.01, 
    marginLeft: width * 0.03, 
    position: 'absolute',
  },
  BoxContainer: {
    width: (180/375)*width, 
    height: 150, 
    borderWidth: 1,
    borderColor: '#00000080',
    borderRadius: 16,
    marginTop: height * 0.04, 
    marginLeft: (16/375)*width, 
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom : 50
  },
  BoxView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    marginLeft : 24,
    marginTop : 25,
  },
  contentContainer: {
    paddingHorizontal: width * 0.025,
  },
});