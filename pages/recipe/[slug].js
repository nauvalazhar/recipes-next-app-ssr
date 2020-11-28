import Link from 'next/link'

export async function getServerSideProps({ query: {slug} }) {
	const req = await fetch('https://masak-apa.tomorisakura.vercel.app/api/recipe/' + slug);
	const res = await req.json();

	return {
		props: {
			recipe: res.results
		}
	}
}

export default function Recipe({ recipe }) {
	return (
		<article>
			<Link href="/"><a>&lsaquo; Kembali</a></Link>
			<h1>{recipe.title}</h1>
			<p>{recipe.desc}</p>
			<table border="1" cellspacing="0" cellpadding="0">
				<tr>
					<td>Servings</td>
					<td>{recipe.servings}</td>
				</tr>
				<tr>
					<td>Times</td>
					<td>{recipe.times}</td>
				</tr>
				<tr>
					<td>Dificulty</td>
					<td>{recipe.dificulty}</td>
				</tr>
				<tr>
					<td>Author</td>
					<td>{recipe.author.name} (pada {recipe.author.datePublished})</td>
				</tr>
			</table>

			<h4>Item</h4>
			<ul>
				{recipe.needItem.map(need => (
					<li>{need.item_name}</li>
				))}
			</ul>

			<h4>Ingredient</h4>
			<ul>
				{recipe.ingredient.map(ingredient => (
					<li>{ingredient}</li>
				))}
			</ul>

			<h4>Step</h4>
			<ul>
				{recipe.step.map(step => (
					<li>{step}</li>
				))}
			</ul>
		</article>
	);
}