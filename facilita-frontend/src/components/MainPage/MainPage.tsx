import { useEffect, useState } from "react";
import ClientTable from "../ClientTable/ClientTable";
import "./MainPage.css";
import api from "../../services/api"
import DialogCadastro from "./DialogCadastro";
import DialogRota from "./DialogRota";

export interface Client {
	codigo?: number;
	nome?: string;
	telefone?: string;
	email?: string;
	cordX?: number;
	cordY?: number;
}

function MainPage() {
	const [nome, setNome] = useState<string> ('')
	const [telefone, setTelefone] = useState<string>('');
	const [email, setEmail] = useState<string>('');

	const [cadastro, setCadastro] = useState<boolean>(false);
	const [rota, setRota] = useState<boolean>(false);

	const [clients, setClients] = useState<Client[]>([]);

	useEffect(() => {
		try {
			api.get(`/client`, { params: { nome, telefone, email } }).then((response) => {
				setClients(response.data);
			});
		} catch (error) {
			console.log(error);
		}

	}, [nome, telefone, email, cadastro])

	return (
		<div>
			<div className='header'>
				<p className='title'>Teste Técnico</p>

				<p className='subtitle'>Facilita Jurídico</p>
			</div>

			{cadastro ? <DialogCadastro isOpenCallback={setCadastro} /> : null}

			{rota ? <DialogRota isOpenCallback={setRota} /> : null}

			<p>Filtro:</p>
			<div className='filter-wrapper'>
				<label>Nome:</label>
				<input
					className='input'
					defaultValue={nome}
					onChange={(e) => setNome(e.target.value)}
				/>

				<label>Email:</label>
				<input
					className='input'
					defaultValue={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<label>Telefone:</label>
				<input
					className='input'
					defaultValue={telefone}
					onChange={(e) => setTelefone(e.target.value)}
				/>
			</div>

			<div className={clients.length ? "table-wrapper" : ""}>
				{clients.length ? (
					<ClientTable clients={clients} />
				) : (
					<p>Não existem usuários cadastrados</p>
				)}
			</div>

			<div>
				<button className='rota-button' onClick={() => setCadastro(true)}>
					Cadastro
				</button>

				<button className='rota-button' onClick={() => setRota(true)}>
					Rota
				</button>
			</div>
		</div>
	);
}

export default MainPage;
