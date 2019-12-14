const c = (el) => document.querySelector(el)
const cs = (el) => document.querySelectorAll(el)

function efeitoInput() {

	const label = cs('label');
	const input = cs('input');

	function focusInput(index) {

		label[index].classList.add('efeito');
		input[index].style.borderColor = '#054a91';
	}

	function remove(index) {

		if (input[index].value === '')
			label[index].classList.remove('efeito');
		input[index].style.borderColor = '#ccc';
	}

	input.forEach((item, index) => {

		item.addEventListener('focus', () => {
			focusInput(index);
		})

		item.addEventListener('blur', () => {
			remove(index);
		})

	})

}

efeitoInput();

function moveForm() {

	const button = cs('button');
	const container = c('.container');
	const login = c('.login-show');
	const register = c('.register-show');

	login.classList.add('ativo');

	function showForm(item) {

		if (item == 1) {
			login.classList.remove('ativo');
			register.classList.add('ativo');
		} else {
			register.classList.remove('ativo');
			login.classList.add('ativo');
		}
	}

	function moveContainer() {
		container.classList.toggle('right');
	}

	button.forEach((item, index) => {

		item.addEventListener('click', () => {

			moveContainer();
			showForm(index);

		})
	})

}

moveForm();





