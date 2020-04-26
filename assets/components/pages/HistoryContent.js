import React from 'react'

class HistoryContent extends React.Component {
	
	componentDidMount() {
		window.scrollTo(0,0)
		document.getElementById('sp__menu__list').classList.remove('is__active')
		document.getElementById('sp__menu').classList.remove('is__active')
	}
	
	render() {
		return (
			<main className="other">
				<div id="test"></div>
				<div className="inner">
					<section className="kv">
						<div className="inner">
							<div className="kv__container">
								<div className="image" 
								style={{backgroundImage: "url('/assets/img/about/about_img-01.jpg')"}}></div>
								<h1>ABOUT US</h1>
							</div>
						</div>
					</section>

					<section className="history">
						<div className="inner">
							<div className="content">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt orci nec orci dapibus, elementum blandit velit fermentum. Sed suscipit, elit vitae tempor finibus, nisl dolor accumsan ex, sodales sagittis mauris metus nec elit. Quisque sed lacinia metus. Fusce posuere tellus orci, in porta massa facilisis eget. Ut luctus ullamcorper sem, sed fringilla est ullamcorper et. Pellentesque sem felis, pulvinar eget dignissim ac, scelerisque vel diam. Duis vulputate facilisis sem, et porttitor nulla. Etiam venenatis leo vel lorem ultricies porta. Duis eu est eu leo ultrices placerat. Nunc mattis metus vel mattis volutpat. Sed vel vehicula felis, gravida volutpat nunc. Morbi quis maximus turpis.</p>								
								<p>Nunc eu lobortis erat. Fusce ut euismod felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut faucibus nisl non ex condimentum malesuada. Phasellus ultricies, orci ac posuere consectetur, elit erat molestie nulla, nec porta ex lacus vitae elit. Ut ullamcorper lorem dui, quis elementum sem euismod vel. Etiam felis lacus, imperdiet et semper sit amet, maximus vel erat. Aenean et justo nibh. Phasellus porta enim vitae nulla scelerisque eleifend. Sed in quam semper nibh venenatis facilisis. Integer convallis convallis interdum.</p>
								<p>Curabitur augue erat, ullamcorper in pretium eu, consectetur vitae orci. In porttitor orci in tellus gravida tempor. Maecenas sapien turpis, ultrices eget massa eu, venenatis interdum ligula. Nullam ut lobortis nunc, eget eleifend neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc tristique feugiat egestas. Fusce eu commodo risus, lacinia egestas metus. Pellentesque rutrum augue et mauris pharetra malesuada. Duis quis nisi lacus. Nam iaculis, dolor ut consectetur iaculis, sapien arcu laoreet dui, vel pharetra elit augue sollicitudin metus. Morbi vehicula nulla dui, id hendrerit sem sodales id. Nam vel rhoncus arcu. Nullam molestie quam in tempor dictum. Sed erat enim, imperdiet quis turpis id, auctor placerat ipsum. Mauris diam lorem, hendrerit quis odio vitae, vestibulum consectetur purus.</p>
								<p>Maecenas ac vehicula metus, id ultrices elit. Quisque faucibus lobortis augue, ultricies dapibus sapien suscipit ac. Praesent feugiat metus sit amet velit dignissim, quis viverra leo tincidunt. Mauris eu diam vel lacus molestie commodo quis a sapien. Praesent efficitur sed ligula at imperdiet. Aliquam tempus mi eros, et posuere nunc euismod ac. Phasellus felis ex, bibendum vitae facilisis sed, fermentum non elit. Ut ut varius nisl, eget vehicula augue. Proin libero est, viverra ac porta ut, consequat at risus.</p>
								<p>Quisque id sodales arcu, ac ultricies mauris. Vestibulum at augue placerat, pellentesque diam quis, vulputate dui. Cras porttitor volutpat imperdiet. Vestibulum fermentum risus mollis leo consequat tempor. Quisque sit amet massa in nisl efficitur commodo. Cras porta lorem sed sem aliquam scelerisque. Vestibulum id iaculis nunc. Integer condimentum lacinia dolor ut sagittis. Aliquam id posuere nisi, congue aliquet nisl.</p>
							</div>
						</div>
					</section>

					<section className="history with__image">
						<div className="inner">
							<figure>
								<div className="image" style={{backgroundImage: "url('/assets/img/about/founder_img-01.jpg')"}}></div>
							</figure>

							<div className="content">
								<p><strong>Founder</strong></p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis leo, malesuada sit amet turpis non, pharetra interdum purus. Donec sit amet feugiat orci, eu porttitor libero. Nulla rutrum varius convallis. Sed faucibus, quam sit amet varius tempus, mauris massa accumsan ante, cursus tristique dui quam at metus. Duis sit amet est quis arcu elementum finibus ut non arcu. Mauris fringilla tortor lacinia, viverra sem ac, maximus neque. Aenean tincidunt mauris eget nulla faucibus, laoreet convallis dui tempor. Aliquam tristique diam quis dolor elementum pretium. Sed hendrerit tempor leo, quis fringilla enim condimentum quis. Sed at dapibus ipsum, vitae euismod nibh. Nullam faucibus vestibulum augue sed luctus. Cras aliquet nibh ante, non porttitor elit molestie et. Sed ac elit eu tellus laoreet consectetur. Nullam non felis ipsum.</p>
								<p>Etiam pretium nulla nec tempus sollicitudin. Praesent tristique ut leo eget rutrum. Aliquam nibh dolor, rhoncus eget tortor vitae, porta tincidunt lorem. Phasellus quis vestibulum dui. Aliquam eu pulvinar odio. Nulla at tellus a nibh molestie ultricies. Aliquam finibus leo est, vel ullamcorper nulla feugiat ac. Duis vitae mattis enim, id venenatis neque. Nunc viverra at augue eu vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis at pretium arcu. In convallis finibus vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
								<p>Aenean a ligula ut odio luctus gravida. Proin vitae ipsum ac nisl rutrum volutpat. Aenean in ultrices purus. Ut magna turpis, molestie at mi sed, euismod sagittis magna. Nullam vitae laoreet nulla, at ornare massa. Integer dictum vel leo in vehicula. Nulla nisi ex, hendrerit eu commodo et, posuere in tellus.</p>
							</div>
						</div>
					</section>

				</div>
			</main>
		)
	}
}

export default HistoryContent