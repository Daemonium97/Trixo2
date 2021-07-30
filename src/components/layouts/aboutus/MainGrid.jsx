import React, { Component } from 'react';
import '../aboutus/MainGrid.css'


class MainGrid extends Component {
	constructor(props) {
        super(props);
        this.state = {
            titlegird: [
                {
                    id: 1,
					title: 'TRIXO',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />incididunt ut labore et dolore magna aliqua.',
				},
			],
			boxgrid: [
				{
					id: '1',
					srcimg: 'images/about/t01.jpg',
					subtitle: 'Founder &amp; CEO',
					title: 'STEVEN MONROE',
					listsocial: [
						{
							id: '1',
							datatitle:'Facebook',
							classtitle: 'facebook',
							classicon: 'fa fa-facebook'
						},
						{
							id: '2',
							datatitle:'LinkedIn',
							classtitle: 'linkedin',
							classicon: 'fa fa-linkedin'
						},{
							id: '3',
							datatitle:'Google Plus',
							classtitle: 'google-plus',
							classicon: 'fa fa-google-plus'
						}
					]
				},
				{
					id: '2',
					srcimg: 'images/about/t02.jpg',
					subtitle: 'Founder &amp; CEO',
					title: 'STEVEN MONROE'
				},
				{
					id: '3',
					srcimg: 'images/about/t03.jpg',
					subtitle: 'Finance & Commerce',
					title: 'MICHAEL KING'
				},
				{
					id: '4',
					srcimg: 'images/about/t04.jpg',
					subtitle: 'Company Director',
					title: 'ROMEO ALVAREZ'
				}
			],
			
        }
    }
    render() {
        return (
			<section className="flat-row pd-about-team">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
								{
									this.state.titlegird.map(data =>(
										<div className="title-section center s1" key={data.id} >
											<h2>{data.title}</h2>
											<p className="sub-title-section">TRIXO LE BRINDA SOLUCIONES INTEGRALES PARA SU EMPRESA EN EL PUNTO DE VENTA.  POR SU AMPLIO  CONOCIMIENTO EN CONSUMO MASIVO Y SU ALCANCE EN LA REGIÓN, LE OFRECEMOS  SERVICIOS DE DISPLAYS, DEMOSTRADORAS, PROMOTORAS Y ACTIVACIÓN EN EL PUNTO DE VENTA ENFOCADOS EN UN ALTO SERVICIO AL CLIENTE Y BRINDADO INFORMACIÓN POR MEDIO DE TECNOLOGÍA DE AVANZADA.</p>
											<h2>MISIÓN</h2>
											<p className="sub-title-section">Contribuir a cambiar la forma de generar valor a nuestros clientes por medio de nuestros servicios y soluciones, de la forma más eficiente y personalizada posible.</p>
											<h2>VISIÓN</h2>
											<p className="sub-title-section">Ser la empresa de servicios en consumo masivo preferida en la región por su calidad en ejecución, atención al cliente y competitividad.</p>
											<h2>Valores</h2>
											<ul>
												<li>Honestidad</li>
												<li>Colaboración</li>
												<li>Innovacion</li>
												<li>Confianza</li>
												<li>Actitud</li>
												<li>Respeto</li>
												<li>Disfrute</li>
												<li>Humildad</li>
											</ul>
											
										</div>		
									))
								}
							<div className="dividers dividers-about-team"></div>
						</div>
					</div>

							
				</div>
			</section>
            //   flat-row-iconbox
        );
    }
}

export default MainGrid;