import { useState } from "react";
import api from "../../services/api";

const DialogCadastro = (props: {
	isOpenCallback: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [nome, setNome] = useState<string>("");
	const [telefone, setTelefone] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [cordX, setcordX] = useState<number | string>("");
  const [cordY, setcordY] = useState<number | string>("");
  
  const handleSave = async () => {
		await api.post(`/client`, {
			nome,
			email,
			telefone,
			cordX,
			cordY,
		});

		props.isOpenCallback(false);
  };
  
  const handleCancel = () => props.isOpenCallback(false);

	return (
		<dialog className='dialog-main' open>
			<p>Cadastre um novo usuário:</p>

			<div className='input-wrapper'>
				<div className='input-dialog'>
					<label>Nome:</label>
					<input
						className='input'
						defaultValue={nome}
						onChange={(e) => setNome(e.target.value)}
					/>
				</div>

				<div className='input-dialog'>
					<label>Email:</label>
					<input
						className='input'
						defaultValue={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className='input-dialog'>
					<label>Telefone:</label>
					<input
						className='input'
						maxLength={11}
						defaultValue={telefone}
						onChange={(e) => setTelefone(e.target.value)}
					/>
				</div>

				<div className='input-dialog'>
					<label>Cord. X:</label>
					<input
						className='input'
						type='number'
						defaultValue={cordX}
						onChange={(e) => setcordX(Number(e.target.value))}
					/>
				</div>

				<div className='input-dialog'>
					<label>Cord. Y:</label>
					<input
						className='input'
						type='number'
						defaultValue={cordY}
						onChange={(e) => setcordY(Number(e.target.value))}
					/>
				</div>

				<div className='input-button'>
					<button className='rota-button' onClick={handleSave}>
						Salvar
					</button>
					<button className='rota-button' onClick={handleCancel}>
						Cancelar
					</button>
				</div>
			</div>
		</dialog>
	);
};

export default DialogCadastro
