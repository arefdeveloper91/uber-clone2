import { GoogleInputProps } from "@/types/type";
import { View } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
const GoogleTextInput = ({
    icon, 
    initialLocation, 
    containerStyle, 
    textInputBackgroundColor, 
    handlePress,
}: GoogleInputProps) => (
    <View className={`flex flex-row items-center justify-center relative z-50 rounded-xl ${containerStyle} mb-5`}
    >
        <GooglePlacesAutocomplete 
            fetchDetails={true}
            placeholder="Where the fuck you wanna go?"
            debounce={200}
            styles={{
                textInputContainer: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2,
                    marginHorizontal: 20,
                    position: "relative",
                    shadowColor: "#d4d4d4",
                },
                textInput: {
                    backgroundColor: textInputBackgroundColor || 'white',
                    fontSize: 16,
                    fontWeight: 600,
                    marginTop: 5,  
                    width: "100%",
                    borderRadius: 200,
                }
            }}
        />
    </View>
);

export default GoogleTextInput;