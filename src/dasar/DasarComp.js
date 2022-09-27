// functional component / stateless component
// rnf / rnfe
import {View, Text, Button} from 'react-native';
import React, {Component} from 'react';
import Alamat from './Alamat';
// ES6/7 class

// fungsi biasa
// rnf
// function DasarComp() {
//   return (
//     <View>
//       <Text>Dasar Component dengang function biasa</Text>
//     </View>
//   );
// }

// arrow function / best practice
// rnfe
const DasarComp = () => {
  return (
    <View>
      <Text>Mebuat Component dengan Arrow function</Text>
      <Nama nama="Rine winsrizal" />
      <Alamat alamat="Bandung" job="Fullstack Developer" />
    </View>
  );
};

export default DasarComp;

// membuat component dengan class / statefull component
// rnc
class Nama extends Component {
  // rconst
  constructor(props) {
    super(props);

    this.state = {
      umur: 17,
      nama: 'ihsan',
    };
  }
  render() {
    return (
      <View>
        {/* penulisan props di kelas komponen */}
        <Text>Hai, nama Saya {this.props.nama}</Text>
        <Text>Nama Lengkap : {this.state.nama}</Text>
        <Text>Umur : {this.state.umur}</Text>
        <Button
          title="btn"
          onPress={() =>
            this.setState({
              nama: 'Dine Ramadhani',
              umur: 30,
            })
          }
        />
      </View>
    );
  }
}
