
import {
    StyleSheet,
    Text,
    View,
    Image,
    useWindowDimensions,
    TouchableOpacity
  } from "react-native";
  import Haunted from "../images/HountedHouseGame.png";
  import Decidr from "../images/Decidr.png";
  import ECard from "../images/E-Card.png";
  import MarvelSpace from "../images/marvel-space.png";

function Portfolio() {
  return <View style={styles.container}>


                <Text style={styles.h1}>Projects</Text> 
                <View >
                  <View >
                    <View >
                      <Image style={styles.img} source={Haunted}  />
                      <View >
                        <View >
                          <Text >
                            The Hounted House Game
                          </Text>
                          <Text >2021/</Text>
                        </View>
                        {/* <View >
                           <a
                            href="https://github.com/keshi2021/haunted-house-game"
                            >
                            <i className="fab fa-github"></i>
                          </a>
                          <a
                            href="http://luceroweb.github.io/haunted-house-game/"
                            
                          > 
                            <TouchableOpacity
                              type="button"
                            >
                              Live site
                            </TouchableOpacity>
                          </a> 
                        </View> */}
                      </View>
                      <View>
                        <Text>learned and implemented react.js</Text>
                        <Text>used agile methodology to manage the project </Text>
                        <Text>
                          Collaborated with QA teammates to test the responsive
                          application
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Image style={styles.img} source={Decidr} alt="..." />
                      <Text >
                        <View>
                          <Text >Decidr</Text>
                          <Text >2021/</Text>
                        </View>
                        {/* <View >
                          <a
                            href="https://github.com/keshi2021/decidr"
                            
                          >
                            <i className="fab fa-github"></i>
                          </a>
                          <a
                            href="https://keshi2021.github.io/decidr"
                          >
                            <TouchableOpacity
                              
                            >
                              Live site
                            </TouchableOpacity>
                          </a>
                        </View> */}
                      </Text>
                      <View>
                        <Text>learned and implemented React-native</Text>
                        <Text>used agile methodology to manage the project </Text>
                      </View>
                    </View>
                    <View >
                      <Image style={styles.img} source={ECard}  />

                      <View>
                        <View >
                          <Text>E-Card</Text>
                          <Text >2021/</Text>
                        </View>
                        {/* <View >
                          <a
                            href="https://github.com/keshi2021/ecard"
                          >
                            <i className="fab fa-github"></i>
                          </a>
                          <a
                            href="https://keshi2021.github.io/ecard"
                            
                          >
                            <TouchableOpacity
                            >
                              Live site
                            </TouchableOpacity>
                          </a>
                        </View> */}
                      </View>
                      <View >
                        <Text>learned and implemented React</Text>
                        <Text>used agile methodology to manage the project </Text>
                      </View>
                    </View>
                    <View>
                      <Image
                        source={MarvelSpace}
                        style={styles.img}                        
                        alt="..."
                      />
                      <View >
                        <View>
                          <Text>Marvel Space</Text>
                          <Text>2021/</Text>
                        </View>
                        {/* <View>
                          <a
                            href="https://github.com/keshi2021/team-spider-man"
                            className="fs-2 me-5"
                          >
                            <i className="fab fa-github"></i>
                          </a>
                          <a
                            href="http://keshi2021.github.io/team-spider-man"
                            className="fs-2"
                          >
                            <TouchableOpacity
                            >
                              Live Site
                            </TouchableOpacity>
                          </a>
                        </View> */}
                      </View>
                      <View >
                        <Text>learned and implemented React-native</Text>
                        <Text>used agile methodology to manage the project </Text>
                      </View>
                    </View>
                  </View>
                </View>
            </View>
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#abaec4",
      alignItems: "center",
      justifyContent: "center",
    },
    h1: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
    },
    bold: {
      fontWeight: "bold",
    },
    p: {
      marginBottom: 20,
    },
    img: {
      width: 250,
      height: 250,
      maxWidth: "100%",
      alignSelf:"center"

    },
  });

export default Portfolio;
