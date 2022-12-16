import { useState } from "react"
import "./index.scss"

const questions = [
	{
		title: "React - это ... ?",
		variants: ["библиотека", "фреймворк", "приложение"],
		correct: 0,
	},
	{
		title: "Компонент - это ... ",
		variants: [
			"приложение",
			"часть приложения или страницы",
			"то, что я не знаю что такое",
		],
		correct: 1,
	},
	{
		title: "Что такое JSX?",
		variants: [
			"Это простой HTML",
			"Это функция",
			"Это тот же HTML, но с возможностью выполнять JS-код",
		],
		correct: 2,
	},
]

function Result({playAgain, correct}) {
	console.log(correct)

	return (
		<div className="result">
			<img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
			<h2>Вы отгадали {correct} ответа из 10</h2>
			<button onClick={playAgain}>Попробовать снова</button>
		</div>
	)
}

function Game({ question, onClickVariant, step }) {
	const part = Math.round((step / questions.length * 100))
	console.log(part)

	return (
		<>
			<div className="progress">
				<div style={{ width: `${part}%` }} className="progress__inner"></div>
			</div>
			<h1>{question.title}</h1>
			<ul>
				{question.variants.map((variant, index, correct) => (
					<li onClick={() => onClickVariant(index)} key={variant}>{variant}</li>
				))}
			</ul>
		</>
	)
}

function App() {
	const [step, setStep] = useState(0)
	const [correct, setCorrect] = useState(0)
	const question = questions[step]

	const onClickVariant = (index) => {
		console.log(step, index)
		setStep(step + 1)

		if (index === questions.correct) {
			setCorrect(correct + 1)
		}
	}

	const playAgain = () => {
		setStep(0)
	}

	return (
		<div className="App">
			{
				step !== questions.length ?
				<Game
					onClickVariant={onClickVariant}
					question={question}
					step={step}
				/> : <Result playAgain={playAgain} correct={correct}/> }
		</div>
	)
}

export default App
