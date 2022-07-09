import { useRef, useState } from "react"

enum Operators {
	add, substract, multiply, divide
}

const useCalculator = () => {
	const [prevNumber, setPrevNumber] = useState('0')
	const [number, setNumber] = useState('0')

	const lastOperation = useRef<Operators>()

	const resetNumber = () => {
		setPrevNumber('0')
		setNumber('0')
		lastOperation.current = undefined
	}

	const makeNumber = (val: string) => {

		if (number.includes('.') && val === '.') return

		if (number.startsWith('0') || number.startsWith('-0')) {

			// Punto decimal
			if (val === '.') {
				setNumber(number + val)

				// Evaluar si es otro 0, y hay un punto
			} else if (val === '0' && number.includes('.')) {
				setNumber(number + val)

				// Evaluar si es diferente de 0 y no tiene punto
			} else if (val !== '0' && !number.includes('.')) {
				setNumber(val)

				// Evitar el 0000.0
			} else if (val === '0' && !number.includes('.')) {
				setNumber(number)

			} else {
				setNumber(number + val)
			}

		} else {

			setNumber(number + val)
		}
	}

	const positiveNegative = () => {
		if (number.includes('-')) {
			setNumber(number.replace('-', ''))
		} else {
			setNumber('-' + number)
		}
	}

	const btnDelete = () => {

		let negative = ""
		let temporalNumber = number

		if (number.includes('-')) {
			negative = '-'
			temporalNumber = number.substr(1)
		}

		if (temporalNumber.length > 1) {
			setNumber(negative + temporalNumber.slice(0, -1))
		} else {
			setNumber('0')
		}
	}

	const btnLongPressDelete = () => {
		setNumber('0')
	}

	const changeLastNumber = () => {
		if (number.endsWith('.')) {
			setPrevNumber(number.slice(0, -1))
		} else {
			setPrevNumber(number)
		}
		setNumber('0')
	}

	const btnDivide = () => {
		changeLastNumber()
		lastOperation.current = Operators.divide
	}

	const btnMultiply = () => {
		changeLastNumber()
		lastOperation.current = Operators.multiply
	}

	const btnSubstract = () => {
		changeLastNumber()
		lastOperation.current = Operators.substract
	}

	const btnAdd = () => {
		changeLastNumber()
		lastOperation.current = Operators.add
	}

	const result = () => {
		const num1 = Number(number)
		const num2 = Number(prevNumber)

		switch (lastOperation.current) {
			case Operators.add:
				setNumber(`${num2 + num1}`)
				break

			case Operators.substract:
				setNumber(`${num2 - num1}`)
				break

			case Operators.multiply:
				setNumber(`${num2 * num1}`)
				break

			case Operators.divide:
				if (num1 === 0) {
					setNumber('Can\'t divide by 0')
				} else {
					setNumber(`${num2 / num1}`)
				}
				break
		}
		setPrevNumber('0')
	}

	return {
		resetNumber,
		prevNumber,
		number,
		positiveNegative,
		btnAdd,
		btnDelete,
		btnDivide,
		btnSubstract,
		btnMultiply,
		makeNumber,
		result,
		btnLongPressDelete
	}

}

export default useCalculator
