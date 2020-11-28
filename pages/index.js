import Link from 'next/link'

export async function getServerSideProps() {
  const req = await fetch('https://masak-apa.tomorisakura.vercel.app/api/recipes');

  const res = await req.json();

  return {
    props: {
      recipes: res.results
    }
  }
}

export default function Home({recipes}) {
  return (
    <div>
      <h1>Resep Makanan</h1>
      <p>Resep makan dari <code>https://masak-apa.tomorisakura.vercel.app/api/recipes</code></p>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}><Link href={`/recipe/${recipe.key}`}><a>{ recipe.title }</a></Link></li>
        ))}
      </ul>
    </div>
  )
}
