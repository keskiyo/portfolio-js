import gitHub_black from './../img/icons/gitHub-black.svg'
import Second_big_img from './../img/projects/02-big.jpg'

const Project_page = () => {
	return (
		<main class='section'>
			<div class='container'>
				<div class='project-details'>
					<h1 class='title-1'>Video service</h1>

					<img src={Second_big_img} alt='' class='project-details__cover' />

					<div class='project-details__desc'>
						<p>Skills: React, Node.js, MongoDB</p>
					</div>

					<a href='#!' class='btn-outline'>
						<img src={gitHub_black} alt='' />
						GitHub repo
					</a>
				</div>
			</div>
		</main>
	)
}

export default Project_page
