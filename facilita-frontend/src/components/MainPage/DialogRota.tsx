import { useEffect, useState } from "react";
import { Client } from "./MainPage";
import "./MainPage.css"
import api from "../../services/api";


const DialogRota = (props: {
	isOpenCallback: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [path, setPath] = useState<Client[]>([])

  useEffect(() => {
		try {
			api
				.get(`/path`)
				.then((response) => {
					setPath(response.data);
				});
		} catch (error) {
			console.log(error);
		}
  }, []);
  
  const handleClose = () => props.isOpenCallback(false)

  return (
		<dialog className='dialog-main' open>
			<p>Melhor Rota:</p>
			<div className="path-wrapper">
				{path.map((client) => (
					<p> - {client.nome}</p>
				))}
			</div>
			<button className='rota-button' onClick={handleClose}>
				Fechar
			</button>
		</dialog>
	);
};


export default DialogRota