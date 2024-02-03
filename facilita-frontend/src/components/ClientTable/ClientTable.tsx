import './ClientTable.css'
import { Client } from '../MainPage/MainPage'

type propType = {
  clients: Client[]
}

function ClientTable(props: propType) {

  const clients: Client[] = props.clients

  return (
		<table className='table'>
			<thead>
				<tr>
					<th>Código</th>
					<th>Nome</th>
					<th>Telefone</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				{clients.map((client) => (
					<tr key={client.codigo}>
						<td>{client.codigo}</td>
						<td>{client.nome}</td>
						<td>{client.telefone}</td>
						<td>{client.email}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
  
}

export default ClientTable