import React from 'react';
import { View, Text } from 'react-native';
import BtnCalc from '../components/BtnCalc';
import { styles } from '../theme/appTheme';
import useCalculator from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {
    resetNumber,
    prevNumber,
    number,
    positiveNegative,
    btnDelete,
    btnDivide,
    makeNumber,
    btnMultiply,
    btnSubstract,
    btnAdd,
    result,
    btnLongPressDelete,,
  } = useCalculator();;
  return (
    <View style={styles.calculatorContainer}>
      {prevNumber !== '0' && (
        <Text style={styles.resultSmall}>{prevNumber}</Text>
      )}
      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.result}>
        {number}
      </Text>

      {/* Row Buttons */}
      <View style={styles.rows}>
        <View style={styles.row}>
          <BtnCalc txt="C" color="#9b9b9b" action={resetNumber} />
          <BtnCalc txt="+/-" color="#9b9b9b" action={positiveNegative} />
          <BtnCalc
            txt="del"
            color="#9b9b9b"
            action={btnDelete}
            longPress={btnLongPressDelete}
          />
          <BtnCalc txt="/" color="#ff9427" action={btnDivide} />
        </View>

        {/* Row Buttons */}
        <View style={styles.row}>
          <BtnCalc txt="7" action={makeNumber} />
          <BtnCalc txt="8" action={makeNumber} />
          <BtnCalc txt="9" action={makeNumber} />
          <BtnCalc txt="X" color="#ff9427" action={btnMultiply} />
        </View>

        {/* Row Buttons */}
        <View style={styles.row}>
          <BtnCalc txt="4" action={makeNumber} />
          <BtnCalc txt="5" action={makeNumber} />
          <BtnCalc txt="6" action={makeNumber} />
          <BtnCalc txt="-" color="#ff9427" action={btnSubstract} />
        </View>

        {/* Row Buttons */}
        <View style={styles.row}>
          <BtnCalc txt="1" action={makeNumber} />
          <BtnCalc txt="2" action={makeNumber} />
          <BtnCalc txt="3" action={makeNumber} />
          <BtnCalc txt="+" color="#ff9427" action={btnAdd} />
        </View>

        {/* Row Buttons */}
        <View style={styles.row}>
          <BtnCalc txt="0" btnBig action={makeNumber} />
          <BtnCalc txt="." action={makeNumber} />
          <BtnCalc txt="=" color="#ff9427" action={result} />
        </View>
      </View>
    </View>
  );;
};

export default CalculatorScreen;
