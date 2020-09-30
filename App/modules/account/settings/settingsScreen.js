// import React from 'react';
// import { View } from 'react-native';
// import { CategoryTitle, DividingLine, SettingTitle, SwitchButton, StringCategory } from 'react-native-minimal-settings';
// import DateTimePicker from 'react-native-modal-datetime-picker';

// export default class App extends React.Component {

//     constructor() {
//         super();
//         this.state = {
//             teslaValue: false,
//             pizzaValue: false,
//             isDateTimePickerVisible: false,
//             stringCategoryValue: 'Something',
//         }
//     }

//     teslaSwitch = (value) => {
//         this.setState({ teslaValue: value });
//     }

//     pizzaSwitch = (value) => {
//         //Unfortunately pizza disappointed me so it's disabled
//         this.setState({ pizzaValue: value });
//     }

//     _showDateTimePicker = () => {
//         this.setState({ isDateTimePickerVisible: true });
//     }

//     _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

//     _handleDatePicked = (time) => {
//         console.log('A time has been picked: ', time);
//         this.setState({ stringCategoryValue: this._createTime(time.getHours(), time.getMinutes()) });
//         this._hideDateTimePicker();
//     };

//     _createTime = (hours, minutes) => {
//         if (minutes < 10) {
//             minutes = '0' + minutes;
//         }
//         return hours + ':' + minutes;
//     }

//     render() {
//         return (
//             <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
//                 <SettingTitle
//                     title={"Settings"}
//                     titleBackgroundColor={'#746965'}
//                     titleColor={'white'}
//                 />
//                 <CategoryTitle
//                     title={'General'}
//                 />
//                 <DividingLine
//                     lineColor={'rgba(128, 128, 128, 0.5)'}
//                 />
//                 <SwitchButton
//                     title={'Tesla'}
//                     toggleSwitch={this.teslaSwitch}
//                     switchValue={this.state.teslaValue}
//                     description={"Teslas are amazing and so is the their Chairman & CEO Elon Musk."}
//                     blockIcon={"ios-car"}
//                     iconColor={"red"}
//                 />
//                 <SwitchButton
//                     title={'Pizza'}
//                     toggleSwitch={this.pizzaSwitch}
//                     switchValue={this.state.pizzaValue}
//                     description={'Pizzas are very hit or miss, so having your expectations not met kind of sucks.'}
//                     blockIcon={"md-pizza"}
//                     iconColor={"skyblue"}
//                     isDisabled={true}
//                 />
//                 <StringCategory
//                     title={'Time'}
//                     description={'Use other libraries with the minimal settings library to make better applications!'}
//                     blockIcon={'ios-time'}
//                     iconColor={'#2E4053'}
//                     initialValue={this.state.stringCategoryValue}
//                     blockAction={this._showDateTimePicker}
//                 />
//                 <DateTimePicker
//                     isVisible={this.state.isDateTimePickerVisible}
//                     onConfirm={this._handleDatePicked}
//                     onCancel={this._hideDateTimePicker}
//                     mode={'time'}
//                 />
//             </View>
//         );
//     }
// }