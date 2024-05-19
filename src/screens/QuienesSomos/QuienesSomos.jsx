import React from 'react'

import Footer from '../../components/footer/footer'
import Header from '../../components/header'
import { HeaderContainer } from './QuienesSomos.styles'

const QuienesSomos = () => {
	return (
		<HeaderContainer>
			<Header></Header>
			<div className="container-home">
				<img src="/images/quienes-somos.png" alt="" />
			</div>

			<div className="container">
				<div className="video">
					<iframe
						title="BioMerieux - Pioneering Diagnostics - Introducción"
						width="660"
						height="371"
						src="https://www.youtube.com/embed/NMpkXBvGeoc?feature=oembed"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen=""></iframe>

					<div className="texto">
						<h2>
							Pioneering diagnostics: mejorando la salud pública
							del mundo
						</h2>
						<p>
							Somos una compañía con espíritu emprendedor y pasión
							por la innovación. Entendemos sus desafíos, no sólo
							imaginamos productos y servicios para atender sus
							necesidades, sino que pensamos en soluciones
							globales. Nuestro desarrollo durante estos años ha
							sido impulsado por un espíritu pionero e implacable
							compromiso para mejorar la salud pública en todo el
							mundo. Hoy día, en más de 150 países a través de 41
							filiales y una amplia red de distribuidores,
							bioMérieux ofrece soluciones de diagnóstico que
							mejoran la salud del paciente y garantizan la
							seguridad del consumidor.
							<br />
							<br />
							Te invitamos a conocernos en este video.
						</p>
					</div>
				</div>
			</div>

			<div className="courses mt-[60px]"></div>
			<Footer></Footer>
		</HeaderContainer>
	)
}

export default QuienesSomos
