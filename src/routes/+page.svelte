<script>
	import { onMount } from 'svelte';
	import '../app.pcss';

    let hayGuerreros = true;

	// onMount(() => {
	// 	const cards = document.querySelectorAll('.card-container');

	// 	cards.forEach((cardContainer) => {
	// 		const card = cardContainer.querySelector('.card');

	// 		cardContainer.addEventListener('click', function () {
	// 			cardContainer.classList.toggle('active');
	// 			if (card.style.transform === 'rotateY(0deg)') {
	// 				card.style.transform = 'rotateY(180deg)';
	// 			} else {
	// 				card.style.transform = 'rotateY(0deg)';
	// 			}
	// 		});
	// 	});
	// });
</script>

<svelte:head>
	<title>Coliseum | Star Wars</title>
</svelte:head>
<div class="game">
	<h1 class="header text-center">
		<img src="/png/logo.png" width="150" alt="logo" class="m-auto" />
	</h1>
    {#if !hayGuerreros}
	<div class="coliseum flex items-center justify-center">
		<div class="starwars-pressed-btn">
			<span>Buscar guerreros</span>
		</div>		
	</div>
    {/if}
	{#if hayGuerreros}
        <div class="coliseum">
            <div class="card-container">
                <div class="card guerreros local">
                    <div class="front">
                        <img
                            src="https://starwars-visualguide.com/assets/img/characters/4.jpg"
                            alt="Frente de la carta"
                        />
                    </div>
                    <div class="back">
                        <img src="/png/atras.jpg" alt="Reverso de la carta" />
                    </div>
                </div>
                <div class="eleccion eleccion_local">Elegir local</div>
            </div>
            <div class="card-container">
                <div class="card guerreros visitante">
                    <div class="front">
                        <img
                            src="https://starwars-visualguide.com/assets/img/characters/8.jpg"
                            alt="Frente de la carta"
                        />
                    </div>
                    <div class="back">
                        <img src="/png/atras.jpg" alt="Reverso de la carta" />
                    </div>
                </div>
                <div class="eleccion eleccion_visitante">Elegir visitante</div>
            </div>
        </div>
    {/if}

	<nav class="floating-menu">
		<ul>
			<li title="Coliseo">
                <div class="flex flex-col items-center justify-center">
                    <a href="/">
                        <img src="/png/casco.png" alt="" />
                    </a>
                </div>
			</li>
			<li title="Perfil">
				<div class="flex flex-col items-center justify-center">
                    <a href="/perfil">
                        <img src="/png/usuario.png" alt="" />
                    </a>
                </div>
			</li>
		</ul>
	</nav>
</div>

<style>
	.game {
		position: fixed;
		width: 100%;
		height: 100%;
		background-position: center;
		background-repeat: repeat;
		background-image: url('/gif/space.gif');
	}
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		padding: 2rem;
	}
	.coliseum {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.starwars-pressed-btn {
		display: inline-block;
		padding: 15px 30px;
		color: #fff;
		background-color: transparent;
		font-family: 'Orbitron', sans-serif;
		font-weight: bold;
		font-size: 18px;
		letter-spacing: 2px;
		text-transform: uppercase;
		border: 2px solid #ffe81f;
		border-radius: 5px;
		position: relative;
		cursor: pointer;
		text-align: center;
		overflow: hidden;
		transition: all 0.3s ease;
		z-index: 20;
	}

	.starwars-pressed-btn span {
		position: relative;
		z-index: 20;
	}

	.starwars-pressed-btn::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 200%;
		height: 100%;
		background: linear-gradient(120deg, transparent, rgba(255, 232, 31, 0.5), transparent);
		transition: all 0.4s ease;
		z-index: 20;
	}

	.starwars-pressed-btn:hover {
		color: #000;
		background-color: #ffe81f;
		border-color: #ffe81f;
		z-index: 20;
	}

	.starwars-pressed-btn:hover::before {
		left: 100%;
		z-index: 20;
	}

	.starwars-pressed-btn:hover span {
		color: black;
		z-index: 20;
	}

	.starwars-pressed-btn:active {
		background-color: #ffd700;
		transform: scale(0.95);
		border-color: #ffd700;
		transition: all 0.1s ease;
		z-index: 20;
	}

	.eleccion {
		color: #fff;
		font-family: 'Orbitron', sans-serif;
		font-weight: bold;
		font-size: 18px;
		letter-spacing: 2px;
		text-transform: uppercase;
		z-index: 20;
		text-align: center;
		margin-top: 30px;
		cursor: pointer;
	}

	.card-container {
		perspective: 1000px;
		margin: 20px;
	}

	.card {
		width: 350px;
		height: 500px;
		position: relative;
		transform-style: preserve-3d;
		transition: transform 0.3s;
		transform: rotateY(180deg);
	}

	.front,
	.back {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		border-radius: 15px;
	}

	.front img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 15px;
	}

	.back {
		transform: rotateY(180deg);
	}

	.back img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 15px;
	}

	.overlay {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
		font-size: 24px;
		font-weight: bold;
		opacity: 0;
		transition: opacity 0.3s;
		z-index: 1;
	}

	.card-container:hover .card {
		transform: scale(1.05) rotateY(180deg);
	}

	.card-container:hover .overlay {
		opacity: 1;
	}

	.card-container.active:hover .card {
		transform: scale(1.05);
	}
	/* Estilos para el menú flotante */
	.floating-menu {
	position: fixed;
	bottom: 2rem;
	left: 50%;
	transform: translateX(-50%); /* Para centrar el menú */
	background-color: rgba(255, 255, 255, 0.7);
	padding: 10px;
	border-radius: 100px;
	display: flex;
	justify-content: center;
}

	.floating-menu ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: space-around;
		width: 100%;
	}

	.floating-menu li {
		flex: 1;
		text-align: center;
	}

	.floating-menu a {
		color: #ffe81f;
		text-decoration: none;
		font-family: 'Orbitron', sans-serif;
		font-weight: bold;
		font-size: 16px;
		transition: color 0.3s;
	}
	
    .floating-menu a img{
        width: 55px;
        height: 55px;    
        padding: 10px;
        border-radius: 100px;
        transition: 0.3s;
        opacity: 0.8;
	}

    .floating-menu a img:hover{
        background: #cfcfcf;

	}


</style>
