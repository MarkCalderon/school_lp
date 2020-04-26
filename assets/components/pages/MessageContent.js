import React from 'react'

class MessageContent extends React.Component {
	
	componentDidMount() {
		window.scrollTo(0,0)
		document.getElementById('sp__menu__list').classList.remove('is__active')
		document.getElementById('sp__menu').classList.remove('is__active')
	}
	
	render() {
		return(
			<main className="other">
				<div id="test"></div>
				<div className="inner">
					<section className="kv">
						<div className="inner">
							<div className="kv__container">
								<h1>MESSAGE FROM THE PRINCIPAL</h1>
								<div className="image" style={{ backgroundImage: "url('/assets/img/history/history_img-01.jpg')"}}></div>
							</div>
						</div>
					</section>

					<section className="message">
						<div className="inner">
							<figure>
								<div className="image" style ={ { backgroundImage: "url('/assets/img/about/founder_img-01.jpg')" } }></div>
							</figure>

							<div className="content">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis, dui a tempus semper, tortor nunc mollis arcu, ut condimentum dui ligula eget tellus. Donec egestas nibh sed metus facilisis iaculis id sed dolor. Nunc maximus diam eu rutrum facilisis. Nulla facilisi. Etiam malesuada rutrum lacus, nec cursus felis maximus nec. Sed dapibus risus at nulla egestas malesuada. Aliquam erat volutpat. Aenean lobortis et nulla vulputate lobortis. Nullam cursus dui vulputate magna dignissim, ac pharetra nunc facilisis. Ut fringilla rhoncus pretium. Fusce commodo faucibus ligula.</p>
								<p>Phasellus et ex vel mauris tincidunt condimentum vel at turpis. Nam dictum urna in sapien laoreet, non porta libero volutpat. Mauris sodales libero eget mi suscipit eleifend. Cras ut mollis tortor, id cursus nulla. In ac nulla accumsan metus aliquet pharetra. Proin elementum nibh iaculis convallis ultricies. Proin venenatis tellus nulla, sit amet sodales metus congue nec. Cras rhoncus commodo metus, sit amet aliquet tellus consectetur at. Morbi placerat enim ante, efficitur imperdiet dolor tincidunt at. Cras malesuada quis tortor quis vulputate. Nullam porta maximus velit eget ornare.</p>
								<p>Suspendisse condimentum purus et nulla iaculis semper. Proin euismod purus lectus, vel tincidunt turpis ultricies in. Donec suscipit a tortor ac eleifend. Quisque nec turpis dolor. Etiam ornare ex suscipit tortor aliquet, eget convallis nulla pharetra. Integer enim dolor, aliquam eu arcu in, mattis ultricies purus. Mauris faucibus nisl ac enim commodo, et scelerisque purus dictum. Etiam eu sagittis dui. Duis non nunc vel nulla volutpat tristique. Nunc eget odio id quam varius eleifend. Nullam enim nulla, venenatis porta leo in, rutrum pellentesque enim. Fusce sed nunc nunc.</p>
								<p>Nullam mauris elit, aliquet sit amet quam sagittis, porttitor dapibus erat. Ut placerat tellus eu odio tristique bibendum. Aenean quis sapien sit amet metus viverra cursus. Duis vestibulum eget ligula vel imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non nibh maximus, interdum libero consequat, imperdiet odio. Pellentesque tincidunt dui nibh, in aliquam quam finibus at. Donec urna risus, fermentum quis faucibus sit amet, sollicitudin eu lacus. Phasellus ut laoreet dolor, id tincidunt enim. Vivamus ligula arcu, consequat quis ultrices nec, pretium posuere lectus. Nam a rutrum nisi. Donec sodales eu purus sed ornare. Nulla vulputate arcu et luctus consectetur. Sed maximus nisl nec odio luctus, vel consectetur erat rhoncus.</p>
								<p>Nullam vitae neque vitae magna pharetra luctus eget varius enim. Curabitur vel justo a ex ultrices bibendum vel sed erat. Suspendisse vestibulum magna ante, eget dictum lacus interdum vel. Cras vel tincidunt felis. Pellentesque tincidunt, orci ac finibus sollicitudin, tellus arcu facilisis orci, ut aliquam est lectus at justo. Nunc varius non ex eget consectetur. Ut quis massa efficitur, interdum massa nec, pellentesque tortor. Morbi ultricies, dui eget auctor aliquam, elit ex faucibus purus, id egestas ipsum justo sit amet odio. Ut id massa elit. Suspendisse a libero sagittis, rhoncus neque eget, interdum libero. Nam tincidunt risus id justo auctor laoreet. Quisque vitae dolor sit amet tortor volutpat posuere eget sit amet nulla. Phasellus sit amet posuere libero. Integer et consectetur nibh, at blandit sapien. Maecenas blandit sem eu metus auctor ultricies.</p>
								<p>Best Regards,</p>
								<p><strong>Mark Calderon</strong><small>Founder and Principal</small></p>
							</div>
						</div>
					</section>

				</div>
			</main>
		)
	}
}

export default MessageContent